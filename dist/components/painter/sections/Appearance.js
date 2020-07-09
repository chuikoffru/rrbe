import React from "react";
import { Form } from "react-bootstrap";
import useSectionSettings from "../../../hooks/useSectionSettings";
import ColorPicker from "../controls/ColorPicker";

const Appearance = () => {
  const [bgColor, setBgColor] = useSectionSettings("styles.backgroundColor", "#ffffff");
  return /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(ColorPicker, {
    name: "\u0426\u0432\u0435\u0442 \u0444\u043E\u043D\u0430",
    value: bgColor,
    onChange: setBgColor
  }));
};

export default Appearance;