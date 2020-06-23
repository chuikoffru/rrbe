import React from "react";
import { useDrop } from "react-dnd";
import classNames from "classnames";

import LoadableWidget from "./LoadableWidget";

import "scss/columns.scss";

const Column = ({ rows, columnIndex, sectionIndex, accept, onDrop }) => {
  //console.log("Column init");

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
      ref={drop}
      className={classNames({
        rrbe__column: true,
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
