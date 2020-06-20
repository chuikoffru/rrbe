import React, { useMemo } from "react";
import { Form } from "react-bootstrap";

import RangeInput from "../controls/RangeInput";
//import ColorPicker from "../controls/ColorPicker";

import useWidgetSettings from "hooks/useWidgetSettings";

const Appearance = () => {
  console.log("Appearance init");

  const [fontSize, setFontSize] = useWidgetSettings("styles.fontSize", 1);

  const FontSize = useMemo(
    () => (
      <RangeInput
        name="Размер текста"
        options={{ min: 0.2, max: 5, step: 0.1 }}
        value={fontSize}
        onChange={setFontSize}
      />
    ),
    [fontSize, setFontSize]
  );

  return (
    <Form>
      <FontSize />
      {/* <ColorPicker name="Цвет текста" property="styles.color" /> */}
    </Form>
  );
};

export default Appearance;
