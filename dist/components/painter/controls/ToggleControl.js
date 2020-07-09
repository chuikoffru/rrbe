import React, { useCallback } from "react";
import { Form } from "react-bootstrap";

const ToggleControl = ({
  name,
  value,
  onChange,
  options = {}
}) => {
  const handleChange = useCallback(e => {
    onChange(!value);
  }, [onChange, value]);
  return /*#__PURE__*/React.createElement(Form.Group, null, /*#__PURE__*/React.createElement(Form.Check, options, /*#__PURE__*/React.createElement(Form.Check.Label, null, /*#__PURE__*/React.createElement(Form.Check.Input, {
    type: "checkbox",
    value: value,
    onChange: handleChange
  }), " ", name)));
};

export default ToggleControl;