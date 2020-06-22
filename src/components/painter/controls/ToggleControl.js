import React, { useCallback } from "react";
import { Form } from "react-bootstrap";

const ToggleControl = ({ name, value, onChange, options = {} }) => {
  console.log("toggle init", value);

  const handleChange = useCallback(
    (e) => {
      onChange(!value);
    },
    [onChange, value]
  );

  return (
    <Form.Group>
      <Form.Check
        type="checkbox"
        {...options}
        value={value}
        onChange={handleChange}
        label={name}
      />
    </Form.Group>
  );
};

export default ToggleControl;
