import React from "react";
import { Form } from "react-bootstrap";
import SelectControl from "../controls/SelectControl";
import useWidgetSettings from "../../../hooks/useWidgetSettings";

const Alignments = () => {
  const [textAlign, setTextAlign] = useWidgetSettings("styles.textAlign", "left");
  const [float, setFloat] = useWidgetSettings("styles.float", "inherit");
  return /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(SelectControl, {
    list: [{
      name: "По-умолчанию",
      value: "none"
    }, {
      name: "Слева",
      value: "left"
    }, {
      name: "Справа",
      value: "right"
    }],
    name: "\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0432\u0438\u0434\u0436\u0435\u0442\u0430 (float)",
    value: float,
    onChange: setFloat
  }), /*#__PURE__*/React.createElement(SelectControl, {
    list: [{
      name: "По левому краю",
      value: "left"
    }, {
      name: "По центру",
      value: "center"
    }, {
      name: "По правому краю",
      value: "right"
    }, {
      name: "По ширине",
      value: "justify"
    }],
    name: "\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430 (text-align)",
    value: textAlign,
    onChange: setTextAlign
  }));
};

export default Alignments;