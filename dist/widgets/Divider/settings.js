import React from "react";
import { Form } from "react-bootstrap";
import useWidgetSettings from "../../hooks/useWidgetSettings";
import RangeControl from "../../components/painter/controls/RangeControl";
import ColorPicker from "../../components/painter/controls/ColorPicker";
import SelectControl from "../../components/painter/controls/SelectControl";

const DividerSettings = () => {
  const [size, setSize] = useWidgetSettings("size", 2);
  const [color, setColor] = useWidgetSettings("color", "#000000");
  const [breakAfter, setBreakAfter] = useWidgetSettings("breakAfter", "auto");
  return /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(RangeControl, {
    name: "\u0422\u043E\u043B\u0449\u0438\u043D\u0430 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044F",
    value: size,
    onChange: setSize,
    options: {
      min: 1,
      max: 10,
      step: 1,
      appendix: "px"
    }
  }), /*#__PURE__*/React.createElement(ColorPicker, {
    name: "\u0426\u0432\u0435\u0442 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044F",
    value: color,
    onChange: setColor
  }), /*#__PURE__*/React.createElement(SelectControl, {
    name: "\u0420\u0430\u0437\u0440\u044B\u0432 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u0440\u0438 \u043F\u0435\u0447\u0430\u0442\u0438",
    value: breakAfter,
    onChange: setBreakAfter,
    list: [{
      name: "Автоматически",
      value: "auto"
    }, {
      name: "Разорвать страницу",
      value: "page"
    }, {
      name: "Не разрывать страницу",
      value: "avoid"
    }]
  }));
};

export default DividerSettings;