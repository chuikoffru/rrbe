import React, { useCallback } from "react";
import InputControl from "components/painter/controls/InputControl";
import useWidgetSettings from "hooks/useWidgetSettings";
import mutate from "dot-prop-immutable";

const RenderTableSettings = () => {
  const [columns] = useWidgetSettings("columns", []);
  const [rows, setRows] = useWidgetSettings("rows", []);
  const [variable, setVariable] = useWidgetSettings("variable", "");

  const handleChange = useCallback(
    (name, value) => {
      const row = mutate.set(rows, `0`, { ...rows[0], [name]: value });
      setRows(row);
    },
    [rows, setRows]
  );

  return (
    <>
      <InputControl
        name="Переменная цикла"
        value={variable}
        onChange={setVariable}
      />
      {columns.map((name, key) => (
        <InputControl
          key={key}
          name={name}
          value={rows.length > 0 ? rows[0][name] : ""}
          onChange={(value) => handleChange(name, value)}
        />
      ))}
    </>
  );
};

export default RenderTableSettings;
