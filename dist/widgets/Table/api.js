import React from "react";
import InputControl from "../../components/painter/controls/InputControl";
import useWidgetSettings from "../../hooks/useWidgetSettings";

const ApiTableSettings = () => {
  const [api, setApi] = useWidgetSettings("api", "https://regagro.herokuapp.com/animals");
  return /*#__PURE__*/React.createElement(InputControl, {
    name: "URL-\u0430\u0434\u0440\u0435\u0441 \u0434\u0430\u043D\u043D\u044B\u0445",
    value: api,
    onChange: setApi
  });
};

export default ApiTableSettings;