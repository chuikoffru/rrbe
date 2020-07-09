function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useCallback } from "react";
import { Form } from "react-bootstrap";

const InputControl = ({
  name,
  value,
  onChange,
  options = {}
}) => {
  const handleChange = useCallback(e => {
    onChange(e.target.value);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(Form.Group, null, /*#__PURE__*/React.createElement(Form.Label, null, name), /*#__PURE__*/React.createElement(Form.Control, _extends({
    size: "sm"
  }, options, {
    value: value,
    onChange: handleChange
  })));
};

export default InputControl;