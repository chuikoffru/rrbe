import React from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import ColorPicker from "../painter/controls/ColorPicker";

const Background = () => {
  const [bg, setBg] = useGlobalSettings("backgroundColor", "#ffffff");
  return /*#__PURE__*/React.createElement(ColorPicker, {
    name: "\u0426\u0432\u0435\u0442 \u0444\u043E\u043D\u0430",
    value: bg,
    onChange: setBg
  });
};

export default Background;