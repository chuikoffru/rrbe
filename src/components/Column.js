import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import loadable from "@loadable/component";
import classNames from "classnames";

import { selectWidget } from "../redux/sections/actions";

import "./scss/columns.scss";

const Column = ({ rows, columnIndex, sectionIndex, accept, onDrop }) => {
  const dispatch = useDispatch();

  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  // Выбираем виджет
  const setSelectedWidget = (event, columnIndex, rowIndex, widgetName) => {
    event.stopPropagation();
    dispatch(selectWidget(sectionIndex, columnIndex, rowIndex, widgetName));
  };

  return (
    <div
      key={columnIndex}
      ref={drop}
      className={classNames({
        col: true,
        canDrop,
        isActive: isOver && canDrop,
      })}
    >
      {rows.map((widget, rowIndex) => {
        const WidgetComponent = loadable(() =>
          import(`../widgets/${widget.name}`)
        );
        return (
          <div
            key={rowIndex}
            onClickCapture={(event) =>
              setSelectedWidget(event, columnIndex, rowIndex, widget.name)
            }
          >
            <WidgetComponent {...widget.params} />
          </div>
        );
      })}
    </div>
  );
};

export default Column;
