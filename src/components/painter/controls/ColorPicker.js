import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { ChromePicker } from "react-color";
import useSectionSettings from "../../../hooks/useSectionSettings";

const ColorPicker = ({ name, property, defaultValue, options = {} }) => {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState(defaultValue);
  const [bg, setBg] = useSectionSettings(property, defaultValue);

  useEffect(() => {
    const bounce = setTimeout(() => {
      setBg(color);
    }, 500);
    return () => clearTimeout(bounce);
  }, [color, setBg]);

  return (
    <Form.Group>
      <Form.Label>{name}</Form.Label>
      <Form.Control value={bg} onClick={() => setShow(!show)} readOnly />
      {show && (
        <ChromePicker
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
