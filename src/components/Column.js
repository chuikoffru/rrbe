import React, { useCallback } from "react";
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

  const moveWidget = useCallback(
    (dragIndex, hoverIndex) => {
      const dragWidget = rows[dragIndex];
      console.log("dragIndex, hoverIndex", dragIndex, hoverIndex);
      console.log("dragWidget", dragWidget);
      /* setCards(
        update(rows, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragWidget],
          ],
        }),
      ) */
    },
    [rows]
  );

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
          moveWidget={moveWidget}
        />
      ))}
    </div>
  );
};

export default Column;
