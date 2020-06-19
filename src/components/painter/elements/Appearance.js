import React from "react";
import { Form } from "react-bootstrap";

import RangeInput from "../controls/RangeInput";
import ColorPicker from "../controls/ColorPicker";

const Appearance = () => {
  console.log("Appearance init");

  return (
    <Form>
      <RangeInput
        name="Размер текста"
        property="styles.fontSize"
        options={{ min: 0.2, max: 5, step: 0.1 }}
      />
      <ColorPicker name="Цвет текста" property="styles.color" />
    </Form>
  );
};

export default Appearance;
