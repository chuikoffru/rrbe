import React, { useCallback } from "react";
import { Form } from "react-bootstrap";

const RangeInput = ({ name, value, onChange, options = {} }) => {
  console.log("Range init");

  const handleChange = useCallback(
    (e) => {
      onChange(e.target.value + "rem");
    },
    [onChange]
  );

  return (
    <Form.Group>
      <Form.Label>{name}</Form.Label>
      <Form.Control
        {...options}
        type="range"
        value={parseFloat(value)}
        onChange={handleChange}
      />
    </Form.Group>
  );
};

export default RangeInput;
