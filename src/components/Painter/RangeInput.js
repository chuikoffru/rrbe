import React from "react";
import { Form } from "react-bootstrap";

const RangeInput = ({ name, property, value, onChange, options }) => {
  return (
    <Form.Group>
      <Form.Label>{name}</Form.Label>
      <Form.Control
        {...options}
        type="range"
        name={property}
        value={parseFloat(value || 1)}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default RangeInput;
