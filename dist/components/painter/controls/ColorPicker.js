function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { SketchPicker } from "react-color";

const ColorPicker = ({
  name,
  value,
  onChange,
  options = {}
}) => {
  const [show, setShow] = useState(false);
  return /*#__PURE__*/React.createElement(Form.Group, null, /*#__PURE__*/React.createElement(Form.Label, null, name), /*#__PURE__*/React.createElement(Form.Control, {
    size: "sm",
    value: value,
    onClick: () => setShow(!show),
    readOnly: true
  }), show && /*#__PURE__*/React.createElement(SketchPicker, _extends({}, options, {
    color: value,
    onChange: ({
      hex
    }) => onChange(hex),
    disableAlpha: true
  })));
};

export default ColorPicker;