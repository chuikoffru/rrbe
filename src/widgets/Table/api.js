import React from "react";
import InputControl from "components/painter/controls/InputControl";
import useWidgetSettings from "hooks/useWidgetSettings";

const ApiTableSettings = (props) => {
  const [api, setApi] = useWidgetSettings(
    "api",
    "https://regagro.herokuapp.com/animals"
  );
  return <InputControl name="URL-адрес данных" value={api} onChange={setApi} />;
};

export default ApiTableSettings;
