import React from "react";
import { Form, Col } from "react-bootstrap";

const IndentControl = ({
  list,
  title
}) => {
  const handleChange = (e, onChange) => {
    const val = parseInt(e.target.value);
    onChange(val);
  };

  return /*#__PURE__*/React.createElement(Form.Row, null, /*#__PURE__*/React.createElement(Form.Label, {
    className: "w-100"
  }, title), list.map((item, index) => /*#__PURE__*/React.createElement(Form.Group, {
    key: index,
    as: Col
  }, /*#__PURE__*/React.createElement(Form.Text, {
    muted: true
  }, item.name), /*#__PURE__*/React.createElement(Form.Control, {
    type: "number",
    size: "sm",
    value: parseInt(item.value),
    onChange: e => handleChange(e, item.onChange)
  }))));
};

export default IndentControl;