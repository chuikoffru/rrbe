import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { SketchPicker } from "react-color";

const ColorPicker = ({ name, value, onChange, options = {} }) => {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState(value);

  useEffect(() => {
    const bounce = setTimeout(() => {
      onChange(color);
    }, 500);
    return () => clearTimeout(bounce);
  }, [color, onChange]);

  return (
    <Form.Group>
      <Form.Label>{name}</Form.Label>
      <Form.Control value={value} onClick={() => setShow(!show)} readOnly />
      {show && (
        <SketchPicker
          {...options}
          color={color}
          onChange={({ hex }) => setColor(hex)}
          disableAlpha={true}
        />
      )}
    </Form.Group>
  );
};

export default ColorPicker;
