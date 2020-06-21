import React, { useMemo } from "react";
import { Form } from "react-bootstrap";

import RangeInput from "../controls/RangeInput";
import ColorPicker from "../controls/ColorPicker";

import useWidgetSettings from "hooks/useWidgetSettings";

const Appearance = () => {
  console.log("Appearance init");

  const [fontSize, setFontSize] = useWidgetSettings("styles.fontSize", 1);
  const [color, setColor] = useWidgetSettings("styles.color", "#000000");

  //const isEqual = (prev, next) => prev !== next;

  const Color = ({ value }) =>
    useMemo(
      () => (
        <ColorPicker name="Цвет текста" value={value} onChange={setColor} />
      ),
      [value]
    );

  return (
    <Form>
      <RangeInput
        name="Размер текста"
        options={{ min: 0.2, max: 5, step: 0.1 }}
        value={fontSize}
        onChange={setFontSize}
      />
      {/* <FontSize value={fontSize} /> */}
      <Color value={color} />
    </Form>
  );
};

export default Appearance;
