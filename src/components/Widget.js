import React, { useRef } from "react";
import { Card } from "react-bootstrap";
import { DragSource } from "react-dnd";
import classNames from "classnames";
//import { useDispatch } from "react-redux";
//import { addWidget } from "../redux/sections/actions";
//import { generateId } from "../helpers/string";

const Widget = ({ widget, isDropped, isDragging, connectDragSource }) => {
  //const dispatch = useDispatch();
  const widgetRef = useRef({});

  /* const addNewWidget = (e) => {
    const data = {
      widgetName: "Text",
      id: generateId(),
      props: {
        text: "Динамически добавили текст",
      },
    };
    dispatch(addWidget(0, 1, data));
  }; */

  return connectDragSource(
    <div
      ref={widgetRef}
      className={classNames({
        widgets__item: true,
        isDragging,
      })}
    >
      <Card>
        <Card.Body>{widget.icon}</Card.Body>
      </Card>
    </div>
  );
};

export default DragSource(
  (props) => props.type,
  {
    beginDrag: (props) => ({ name: props.name }),
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  })
)(Widget);
