import React from "react";
import { Card } from "react-bootstrap";
import { useDrag } from "react-dnd";
import classNames from "classnames";

const Widget = ({
  widget
}) => {
  const [{
    isDragging
  }, drag] = useDrag({
    item: { ...widget
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: drag,
    className: classNames({
      widgets__item: true,
      isDragging
    })
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Card.Body, null, widget.icon)));
};

export default Widget;