import React from "react";
import { useDrop } from "react-dnd";
import classNames from "classnames";

import "./scss/columns.scss";
import LoadableWidget from "./LoadableWidget";

const Column = ({ rows, columnIndex, sectionIndex, accept, onDrop }) => {
  console.log("Column init");

  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

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
      {rows.map((widget, rowIndex) => (
        <LoadableWidget
          key={widget.id}
          widget={widget}
          sectionIndex={sectionIndex}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
        />
      ))}
    </div>
  );
};

export default Column;
