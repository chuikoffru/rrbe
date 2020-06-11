import React from "react";
import { DropTarget } from "react-dnd";
import { useDispatch } from "react-redux";
import loadable from "@loadable/component";

import { selectWidget } from "../redux/sections/actions";

const Column = ({
  rows,
  columnIndex,
  sectionIndex,
  accepts,
  isOver,
  canDrop,
  connectDropTarget,
  lastDroppedItem,
}) => {
  const dispatch = useDispatch();

  // Выбираем виджет
  const setSelectedWidget = (event, columnIndex, rowIndex, widgetName) => {
    event.stopPropagation();
    dispatch(selectWidget(sectionIndex, columnIndex, rowIndex, widgetName));
  };

  return connectDropTarget(
    <div className="col" key={columnIndex}>
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

export default DropTarget(
  (props) => props.accepts,
  {
    drop(props, monitor) {
      props.onDrop(monitor.getItem());
    },
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  })
)(Column);
