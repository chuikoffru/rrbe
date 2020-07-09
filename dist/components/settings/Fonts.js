import React from "react";
import SelectControl from "../painter/controls/SelectControl";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import fonts from "../../helpers/fonts";

const Fonts = () => {
  const [font, setFont] = useGlobalSettings("fontFamily", fonts[0]);
  return /*#__PURE__*/React.createElement(SelectControl, {
    name: "\u0428\u0440\u0438\u0444\u0442",
    value: font,
    onChange: setFont,
    list: fonts
  });
};

export default Fonts;