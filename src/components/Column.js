import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import loadable from "@loadable/component";
import classNames from "classnames";

import { selectWidget } from "../redux/sections/actions";

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
      className={classNames({ col: true, isActive: isOver && canDrop })}
    >
      {isOver && canDrop ? "Кидай сюда" : `Принимаем: ${accept.join(", ")}`}
      {rows.map((row, rowIndex) => {
        const Widget = loadable(() => import(`../widgets/${row.widgetName}`));
        return (
          <div
            key={rowIndex}
            onClickCapture={(event) =>
              setSelectedWidget(event, columnIndex, rowIndex, row.widgetName)
            }
          >
            <Widget {...row.props} />
          </div>
        );
      })}
    </div>
  );
};

export default Column;
