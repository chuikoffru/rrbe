import React, { useCallback } from "react";
import { Form } from "react-bootstrap";
import useWidgetSettings from "hooks/useWidgetSettings";

const RangeInput = ({ name, property, options = {} }) => {
  console.log("Range init");
  // Получаем настройки конкретного свойства
  const [range, setRange] = useWidgetSettings(property, 1);
  // Изменяем значение этого свойства
  const onChange = useCallback((e) => setRange(e.target.value + "rem"), [
    setRange,
  ]);
  return (
    <Form.Group>
      <Form.Label>{name}</Form.Label>
      <Form.Control
        {...options}
        type="range"
        value={parseFloat(range)}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default RangeInput;
