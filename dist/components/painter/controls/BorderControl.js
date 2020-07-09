import React from "react";
import { Col, Form } from "react-bootstrap"; // Не готов к использованию

const BorderControl = ({
  name,
  value,
  onChange,
  options = {}
}) => {
  return /*#__PURE__*/React.createElement(Form.Row, null, /*#__PURE__*/React.createElement(Form.Label, {
    className: "w-100"
  }, name), /*#__PURE__*/React.createElement(Form.Group, {
    as: Col
  }, /*#__PURE__*/React.createElement(Form.Control, {
    type: "number",
    size: "sm",
    value: parseInt(value),
    onChange: onChange
  })));
};

export default BorderControl;