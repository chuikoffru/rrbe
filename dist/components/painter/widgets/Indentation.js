import React from "react";
import useWidgetSettings from "../../../hooks/useWidgetSettings";
import IndentControl from "../controls/IndentControl";

const Indentation = () => {
  // Margins
  const [marginLeft, setMarginLeft] = useWidgetSettings("styles.marginLeft", 0);
  const [marginRight, setMarginRight] = useWidgetSettings("styles.marginRight", 0);
  const [marginTop, setMarginTop] = useWidgetSettings("styles.marginTop", 0);
  const [marginBottom, setMarginBottom] = useWidgetSettings("styles.marginBottom", 0); // Paddings

  const [paddingLeft, setPaddingLeft] = useWidgetSettings("styles.paddingLeft", 0);
  const [paddingRight, setPaddingRight] = useWidgetSettings("styles.paddingRight", 0);
  const [paddingTop, setPaddingTop] = useWidgetSettings("styles.paddingTop", 0);
  const [paddingBottom, setPaddingBottom] = useWidgetSettings("styles.paddingBottom", 0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IndentControl, {
    title: "\u0412\u043D\u0435\u0448\u043D\u0438\u0435 \u043E\u0442\u0441\u0442\u0443\u043F\u044B",
    list: [{
      name: "Вверху",
      value: marginTop,
      onChange: setMarginTop
    }, {
      name: "Справа",
      value: marginRight,
      onChange: setMarginRight
    }, {
      name: "Внизу",
      value: marginBottom,
      onChange: setMarginBottom
    }, {
      name: "Слева",
      value: marginLeft,
      onChange: setMarginLeft
    }]
  }), /*#__PURE__*/React.createElement(IndentControl, {
    title: "\u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u043E\u0442\u0441\u0442\u0443\u043F\u044B",
    list: [{
      name: "Вверху",
      value: paddingTop,
      onChange: setPaddingTop
    }, {
      name: "Справа",
      value: paddingRight,
      onChange: setPaddingRight
    }, {
      name: "Внизу",
      value: paddingBottom,
      onChange: setPaddingBottom
    }, {
      name: "Слева",
      value: paddingLeft,
      onChange: setPaddingLeft
    }]
  }));
};

export default Indentation;