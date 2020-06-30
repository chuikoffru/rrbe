import React, { useCallback, useState } from "react";
import { Form } from "react-bootstrap";
import { ChromePicker } from "react-color";

const ColorPicker = ({ name, value, onChange, options = {} }) => {
  const [color, setColor] = useState(value);

  const onChangeColor = ({ hex }) => {
    setColor(hex);
  };

  const onChangeComplete = useCallback(
    ({ hex }) => {
      onChange(hex);
    },
    [onChange]
  );

  return (
    <Form.Group>
      <Form.Label>{name}</Form.Label>
      {/* <Form.Control type="text" value={color} readOnly /> */}
      <ChromePicker
        {...options}
        color={color}
        onChange={onChangeColor}
        onChangeComplete={onChangeComplete}
        disableAlpha={true}
      />
    </Form.Group>
  );
};

export default ColorPicker;
