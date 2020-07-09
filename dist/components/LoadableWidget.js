import React, { Suspense, useCallback, useMemo, useRef } from "react";
import loadable from "@loadable/component";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { contextMenu } from "react-contexify";
import loadWidget from "../helpers/loadWidget";
import { selectWidget, selectSection } from "../store/sections/actions";
import { ItemTypes } from "../helpers/itemTypes";

const LoadableWidget = ({
  widget,
  sectionIndex,
  rowIndex,
  columnIndex,
  moveWidget
}) => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const WidgetComponent = useMemo(() => loadable(() => loadWidget(widget.name)), [widget]); // Выбираем виджет

  const setSelectedWidget = useCallback((columnIndex, rowIndex) => {
    dispatch(selectWidget(sectionIndex, columnIndex, rowIndex, widget.name));
  }, [dispatch, sectionIndex, widget.name]);
  const {
    styles,
    applyStylesToWidget
  } = widget.params;
  const [, drop] = useDrop({
    accept: ItemTypes.WIDGET,

    hover(item, monitor) {
      var _ref$current;

      if (!ref.current) {
        return;
      }

      const dragIndex = item.rowIndex;
      const hoverIndex = rowIndex;

      if (dragIndex === hoverIndex) {
        return;
      } // Determine rectangle on screen


      const hoverBoundingRect = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.getBoundingClientRect(); // Get vertical middle

      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2; // Determine mouse position

      const clientOffset = monitor.getClientOffset(); // Get pixels to the top

      const hoverClientY = clientOffset.y - hoverBoundingRect.top; // Dragging downwards

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      } // Dragging upwards


      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      } // Time to actually perform the action


      moveWidget(dragIndex, hoverIndex);
      item.rowIndex = hoverIndex;
    }

  }); // Хук захвата виджета

  const [, drag] = useDrag({
    item: {
      type: ItemTypes.WIDGET,
      widget,
      rowIndex
    }
  });
  drag(drop(ref));
  const showContextMenu = useCallback(e => {
    e.preventDefault();
    e.stopPropagation(); // Делаем выбранную секцию активной

    dispatch(selectSection(sectionIndex)); // Делаем выбранный виджет активным

    dispatch(selectWidget(sectionIndex, columnIndex, rowIndex, widget.name)); // Показываем контекстное меню

    contextMenu.show({
      id: ItemTypes.WIDGET,
      event: e,
      props: {
        widget,
        sectionIndex,
        rowIndex,
        columnIndex
      }
    });
  }, [columnIndex, dispatch, rowIndex, sectionIndex, widget]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "rrbe__widget",
    style: applyStylesToWidget ? styles : {},
    id: widget.id,
    key: rowIndex,
    onClick: () => setSelectedWidget(columnIndex, rowIndex, widget.name),
    onContextMenu: showContextMenu
  }, /*#__PURE__*/React.createElement(Suspense, {
    fallback: /*#__PURE__*/React.createElement("div", null, "Loading...")
  }, /*#__PURE__*/React.createElement(WidgetComponent, widget.params)));
};

export default LoadableWidget;