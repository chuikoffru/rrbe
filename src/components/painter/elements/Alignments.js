import React from "react";
import { Form } from "react-bootstrap";
import SelectControl from "../controls/SelectControl";
import useWidgetSettings from "hooks/useWidgetSettings";

const Alignments = () => {
  console.log("Alignments init");
  const [textAlign, setTextAlign] = useWidgetSettings(
    "styles.textAlign",
    "left"
  );

  const [float, setFloat] = useWidgetSettings("styles.float", "inherit");

  return (
    <Form>
      <SelectControl
        list={["none", "left", "right"]}
        name="Положение виджета (float)"
        value={float}
        onChange={setFloat}
      />
      <SelectControl
        list={["left", "center", "right", "justify"]}
        name="Расположение текста (text-align)"
        value={textAlign}
        onChange={setTextAlign}
      />
    </Form>
  );
};

export default Alignments;
