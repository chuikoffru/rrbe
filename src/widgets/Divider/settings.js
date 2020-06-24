import React from "react";
import { Form } from "react-bootstrap";
import useWidgetSettings from "hooks/useWidgetSettings";
import RangeControl from "../../components/painter/controls/RangeControl";
import ColorPicker from "../../components/painter/controls/ColorPicker";

const DividerSettings = () => {
  const [size, setSize] = useWidgetSettings("size", 2);
  const [color, setColor] = useWidgetSettings("color", "#000000");

  return (
    <Form>
      <RangeControl
        name="Толщина разделителя"
        value={size}
        onChange={setSize}
        options={{ min: 1, max: 10, step: 1 }}
      />
      <ColorPicker name="Цвет разделителя" value={color} onChange={setColor} />
    </Form>
  );
};

export default DividerSettings;
