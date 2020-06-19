import React, { useCallback, useState } from "react";
import { Form } from "react-bootstrap";
import { ChromePicker } from "react-color";

import useWidgetSettings from "hooks/useWidgetSettings";

const ColorPicker = ({ name, property, options = {} }) => {
  console.log("color init");
  // Получаем настройки конкретного свойства
  const [color, setColor] = useWidgetSettings(property, "#000000");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const onChangeColor = useCallback(
    (color) => {
      console.log("color.hex", color.hex);
      setColor(color.hex);
      setShowColorPicker(false);
    },
    [setColor]
  );

  return (
    <Form.Group>
      <Form.Label>{name}</Form.Label>
      <Form.Control
        type="text"
        onFocus={() => setShowColorPicker(true)}
        value={color}
        readOnly
      />
      {showColorPicker && (
        <ChromePicker
          {...options}
          color={color}
          onChangeComplete={onChangeColor}
        />
      )}
    </Form.Group>
  );
};

export default ColorPicker;
