import React, { useCallback, useState } from "react";
import { Form } from "react-bootstrap";
import { ChromePicker } from "react-color";

const ColorPicker = ({ name, value, onChange, options = {} }) => {
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState("#000000");
  console.log("color init", visible);

  const onChangeColor = useCallback(({ hex }) => {
    console.log("color.hex", hex);
    setColor(hex);
    //onChange(color.hex);
    //setVisible(false);
  }, []);

  return (
    <Form.Group>
      <Form.Label>{name}</Form.Label>
      <Form.Control
        type="text"
        onFocus={() => setVisible(true)}
        value={color}
        readOnly
      />
      <ChromePicker
        {...options}
        color={color}
        onChangeComplete={onChangeColor}
      />
    </Form.Group>
  );
};

export default ColorPicker;
