import React, { useCallback, useState } from "react";
import { Form } from "react-bootstrap";
import { ChromePicker } from "react-color";

const ColorPicker = ({ property, settings, onChange }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const onChangeColor = useCallback(
    (color) => {
      console.log("property, color", property, color);
      onChange({ name: property, value: color });
      setShowColorPicker(false);
    },
    [onChange, property]
  );

  return (
    <Form.Group>
      <Form.Label>Цвет текста</Form.Label>
      <Form.Control
        type="text"
        onFocus={() => setShowColorPicker(true)}
        value={settings.styles.color || "#000000"}
        readOnly
      />
      {showColorPicker && (
        <ChromePicker
          color={settings.styles.color}
          onChangeComplete={(color) => onChangeColor(color)}
        />
      )}
    </Form.Group>
  );
};

export default ColorPicker;
