import React from "react";
import { Form } from "react-bootstrap";
import useWidgetSettings from "hooks/useWidgetSettings";
import InputControl from "components/painter/controls/InputControl";
import RangeControl from "components/painter/controls/RangeControl";

const ImageSettings = () => {
  const [url, setUrl] = useWidgetSettings(
    "src",
    "https://picsum.photos/seed/picsum/300/200"
  );
  const [alt, setAlt] = useWidgetSettings("alt", "");
  const [width, setWidth] = useWidgetSettings("width", 10);

  return (
    <Form>
      <InputControl name="URL изображения" value={url} onChange={setUrl} />
      <InputControl
        name="Подпись к изображению"
        value={alt}
        onChange={setAlt}
      />
      <RangeControl
        name="Ширина изображения"
        value={width}
        onChange={setWidth}
        options={{
          min: 10,
          max: 2000,
          step: 1,
          appendix: "px",
        }}
      />
    </Form>
  );
};

export default ImageSettings;
