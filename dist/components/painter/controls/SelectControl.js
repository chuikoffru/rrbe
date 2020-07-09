function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useCallback } from "react";
import { Form } from "react-bootstrap";

const SelectControl = ({
  name,
  value,
  list,
  onChange,
  options = {}
}) => {
  const handleChange = useCallback(e => {
    onChange(e.target.value);
  }, [onChange]);

  const showList = () => {
    switch (typeof list[0]) {
      case "object":
        return Object.entries(list).map(([key, value]) => /*#__PURE__*/React.createElement("option", {
          value: value.value,
          key: key
        }, value.name));

      case "string":
        return list.map((value, key) => /*#__PURE__*/React.createElement("option", {
          key: key
        }, value));

      default:
        break;
    }
  };

  return /*#__PURE__*/React.createElement(Form.Group, null, /*#__PURE__*/React.createElement(Form.Label, null, name), /*#__PURE__*/React.createElement(Form.Control, _extends({}, options, {
    as: "select",
    size: "sm",
    value: value,
    onChange: handleChange
  }), showList()));
};

export default SelectControl;