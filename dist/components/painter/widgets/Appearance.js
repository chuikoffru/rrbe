import React from "react";
import { Form } from "react-bootstrap";
import RangeControl from "../controls/RangeControl";
import ColorPicker from "../controls/ColorPicker";
import useWidgetSettings from "../../../hooks/useWidgetSettings";

const Appearance = () => {
  const [fontSize, setFontSize] = useWidgetSettings("styles.fontSize", 1);
  const [color, setColor] = useWidgetSettings("styles.color", "#000000");
  const [bgColor, setBgColor] = useWidgetSettings("styles.backgroundColor", "#ffffff");
  return /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(RangeControl, {
    name: "\u0420\u0430\u0437\u043C\u0435\u0440 \u0442\u0435\u043A\u0441\u0442\u0430",
    options: {
      min: 0.2,
      max: 5,
      step: 0.1,
      appendix: "rem"
    },
    value: fontSize,
    onChange: setFontSize
  }), /*#__PURE__*/React.createElement(ColorPicker, {
    name: "\u0426\u0432\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430",
    value: color,
    onChange: setColor
  }), /*#__PURE__*/React.createElement(ColorPicker, {
    name: "\u0426\u0432\u0435\u0442 \u0444\u043E\u043D\u0430",
    value: bgColor,
    onChange: setBgColor
  }));
};

export default Appearance;