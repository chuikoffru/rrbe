import React from "react";
import { Form } from "react-bootstrap";

const RangeInput = ({ name, property, value = 1.0, onChange, options }) => {
  console.log("Range init");
  /* const [input, setInput] = useState(value);
  const onChangeInput =  useCallback(
    () => {
      
    },
    [],
  ); */
  return (
    <Form.Group>
      <Form.Label>{name}</Form.Label>
      <Form.Control
        {...options}
        type="range"
        name={property}
        value={parseFloat(value)}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default RangeInput;
