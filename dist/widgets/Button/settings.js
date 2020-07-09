import React, { useCallback } from "react";
import { Form } from "react-bootstrap";
import useWidgetSettings from "../../hooks/useWidgetSettings";
export const defaultParams = {
  widgetName: "Image",
  props: {
    title: "Кнопка"
  }
};

const ButtonSettings = () => {
  const {
    settings,
    setSettings
  } = useWidgetSettings();
  const onChange = useCallback(e => {
    setSettings({ ...settings,
      [e.target.name]: e.target.value
    });
  }, [setSettings, settings]);
  return /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(Form.Group, null, /*#__PURE__*/React.createElement(Form.Label, null, "\u041D\u0430\u0434\u043F\u0438\u0441\u044C \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0435"), /*#__PURE__*/React.createElement(Form.Control, {
    name: "alt",
    type: "text",
    value: settings.title,
    onChange: onChange
  })));
};

export default ButtonSettings;