import React, { useCallback } from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import classNames from "classnames";

import { changeColumns } from "redux/sections/actions";
import { swap } from "helpers/arrays";
import LoadableWidget from "./LoadableWidget";

import "scss/columns.scss";

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

  const moveWidget = useCallback(
    (dragIndex, hoverIndex) => {
      console.log(dragIndex, hoverIndex);
      const data = swap(rows, dragIndex, hoverIndex);
      dispatch(changeColumns({ sectionIndex, columnIndex, data }));
    },
    [columnIndex, dispatch, rows, sectionIndex]
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
