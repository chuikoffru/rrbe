import React from "react";
import InputControl from "components/painter/controls/InputControl";
import useWidgetSettings from "hooks/useWidgetSettings";

const RenderTableSettings = () => {
  const [variable, setVariable] = useWidgetSettings(
    "variable",
    "{{ animals }}"
  );
  //const [columns] = useWidgetSettings("columns", []);

  return (
    <InputControl
      name="Переменная цикла"
      value={variable}
      onChange={setVariable}
    />
  );
};

export default RenderTableSettings;
