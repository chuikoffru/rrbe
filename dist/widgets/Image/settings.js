import React from "react";
import { Form } from "react-bootstrap";
import useWidgetSettings from "../../hooks/useWidgetSettings";
import InputControl from "../../components/painter/controls/InputControl";
import RangeControl from "../../components/painter/controls/RangeControl";

const ImageSettings = () => {
  const [url, setUrl] = useWidgetSettings("src", "https://picsum.photos/seed/picsum/300/200");
  const [alt, setAlt] = useWidgetSettings("alt", "");
  const [width, setWidth] = useWidgetSettings("width", 10);
  return /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(InputControl, {
    name: "URL \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
    value: url,
    onChange: setUrl
  }), /*#__PURE__*/React.createElement(InputControl, {
    name: "\u041F\u043E\u0434\u043F\u0438\u0441\u044C \u043A \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044E",
    value: alt,
    onChange: setAlt
  }), /*#__PURE__*/React.createElement(RangeControl, {
    name: "\u0428\u0438\u0440\u0438\u043D\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
    value: width,
    onChange: setWidth,
    options: {
      min: 10,
      max: 2000,
      step: 1,
      appendix: "px"
    }
  }));
};

export default ImageSettings;