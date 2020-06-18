import React, { useCallback } from "react";
import { Form } from "react-bootstrap";
import useWidgetSettings from "../../hooks/useWidgetSettings";

export const defaultParams = {
  widgetName: "Image",
  props: {
    src: "./favicon.ico",
    alt: "Подпись к изображению",
  },
};

const ImageSettings = () => {
  const { settings, setSettings } = useWidgetSettings();

  const onChange = useCallback(
    (e) => {
      setSettings({ ...settings, [e.target.name]: e.target.value });
    },
    [setSettings, settings]
  );

  return (
    <Form>
      <Form.Group>
        <Form.Label>URL изображения</Form.Label>
        <Form.Control
          type="text"
          name="src"
          value={settings.src}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Подпись к изображению</Form.Label>
        <Form.Control
          name="alt"
          type="text"
          value={settings.alt}
          onChange={onChange}
        />
      </Form.Group>
    </Form>
  );
};

export default ImageSettings;
