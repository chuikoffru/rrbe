import React from "react";
import { Form } from "react-bootstrap";
import useSectionSettings from "hooks/useSectionSettings";
import ColorPicker from "../controls/ColorPicker";

const Appearance = () => {
  console.info("Section Appearance init");

  const [bgColor, setBgColor] = useSectionSettings(
    "styles.backgroundColor",
    "#ffffff"
  );

  return (
    <Form>
      <ColorPicker name="Цвет фона" value={bgColor} onChange={setBgColor} />
    </Form>
  );
};

export default Appearance;
