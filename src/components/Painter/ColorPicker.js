import React, { useCallback, useState } from "react";
import { Form } from "react-bootstrap";
import { ChromePicker } from "react-color";

const ColorPicker = ({
  name,
  property,
  value = "#000000",
  onChange,
  options,
}) => {
  console.log("color init");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const onChangeColor = useCallback(
    (color) => {
      onChange({ target: { name: property, value: color.hex } });
      setShowColorPicker(false);
    },
    [onChange, property]
  );

  return (
    <Form.Group>
      <Form.Label>{name}</Form.Label>
      <Form.Control
        type="text"
        onFocus={() => setShowColorPicker(true)}
        value={value}
        readOnly
      />
      {showColorPicker && (
        <ChromePicker
          {...options}
          color={value}
          onChangeComplete={onChangeColor}
        />
      )}
    </Form.Group>
  );
};

export default ColorPicker;
