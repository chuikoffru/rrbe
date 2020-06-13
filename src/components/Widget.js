import React from "react";
import { Card } from "react-bootstrap";
import { useDrag } from "react-dnd";
import classNames from "classnames";
//import { useDispatch } from "react-redux";
//import { addWidget } from "../redux/sections/actions";
//import { generateId } from "../helpers/string";

const Widget = ({ widget }) => {
  //const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag({
    item: { ...widget },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    //end: (item, monitor) => console.log("item", item, monitor),
  });

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

  return (
    <div
      ref={drag}
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

export default Widget;
