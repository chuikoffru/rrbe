import React, { Suspense, useCallback, useMemo, useRef } from "react";
import loadable from "@loadable/component";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";

import loadWidget from "helpers/loadWidget";
import { selectWidget } from "redux/sections/actions";
import { ItemTypes } from "helpers/itemTypes";

const LoadableWidget = ({
  widget,
  sectionIndex,
  rowIndex,
  columnIndex,
  moveWidget,
}) => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const WidgetComponent = useMemo(
    () => loadable(() => loadWidget(widget.name)),
    [widget]
  );

  // Выбираем виджет
  const setSelectedWidget = useCallback(
    (columnIndex, rowIndex) => {
      dispatch(selectWidget(sectionIndex, columnIndex, rowIndex, widget.name));
    },
    [dispatch, sectionIndex, widget.name]
  );

  const { styles, applyStylesToWidget } = widget.params;

  const [, drop] = useDrop({
    accept: ItemTypes.WIDGET,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.rowIndex;
      const hoverIndex = rowIndex;
      //console.log("dragIndex, hoverIndex, item", dragIndex, hoverIndex, item);
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveWidget(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.rowIndex = hoverIndex;
    },
  });

  // Хук захвата виджета
  const [, drag] = useDrag({
    item: { type: ItemTypes.WIDGET, widget, rowIndex },
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className="rrbe__widget"
      style={applyStylesToWidget ? styles : {}}
      id={widget.id}
      key={rowIndex}
      onClick={() => setSelectedWidget(columnIndex, rowIndex, widget.name)}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <WidgetComponent {...widget.params} />
      </Suspense>
    </div>
  );
};

export default LoadableWidget;
