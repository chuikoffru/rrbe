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

  return (
    <Form>
      <SelectControl
        list={["left", "center", "right", "justify"]}
        name="Расположение текста"
        value={textAlign}
        onChange={setTextAlign}
      />
    </Form>
  );
};

export default Alignments;
