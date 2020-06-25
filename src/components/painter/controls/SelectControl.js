import React, { useCallback } from "react";
import { Form } from "react-bootstrap";

const SelectControl = ({ name, value, list, onChange, options = {} }) => {
  console.log("Select init");

  const handleChange = useCallback(
    (e) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <Form.Group>
      <Form.Label>{name}</Form.Label>
      <Form.Control
        {...options}
        as="select"
        value={value}
        onChange={handleChange}
      >
        {typeof list === "object"
          ? Object.entries(list).map(([key, value]) => (
              <option value={value.value} key={key}>
                {value.name}
              </option>
            ))
          : list.map((value, key) => <option key={key}>{value}</option>)}
      </Form.Control>
    </Form.Group>
  );
};

export default SelectControl;
