import React from "react";
import { Form } from "react-bootstrap";
import useWidgetSettings from "../../hooks/useWidgetSettings";
import InputControl from "../../components/painter/controls/InputControl";
import SelectControl from "../../components/painter/controls/SelectControl";
import ToggleControl from "../../components/painter/controls/ToggleControl";

const LinkSettings = () => {
  const [url, setUrl] = useWidgetSettings("url", "#");
  const [target, setTarget] = useWidgetSettings("target", "_self");
  const [text, setText] = useWidgetSettings("text", "Ссылка");
  const [isButton, setIsButton] = useWidgetSettings("isButton", false);
  return /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(InputControl, {
    name: "\u0422\u0435\u043A\u0441\u0442 \u0441\u0441\u044B\u043B\u043A\u0438",
    value: text,
    onChange: setText
  }), /*#__PURE__*/React.createElement(InputControl, {
    name: "URL",
    value: url,
    onChange: setUrl
  }), /*#__PURE__*/React.createElement(SelectControl, {
    list: ["_self", "_blank"],
    name: "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
    value: target,
    onChange: setTarget
  }), /*#__PURE__*/React.createElement(ToggleControl, {
    name: "\u041A\u043D\u043E\u043F\u043A\u0430",
    value: isButton,
    onChange: setIsButton
  }));
};

export default LinkSettings;