import React, { useCallback } from "react";
import { Form } from "react-bootstrap";
import useWidgetSettings from "../../hooks/useWidgetSettings";

const TextSettings = () => {
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
        <Form.Label>Текст</Form.Label>
        <Form.Control
          name="text"
          as="textarea"
          rows="3"
          value={settings.text}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Размер текста</Form.Label>
        <Form.Control
          type="range"
          name="style.fontSize"
          value={settings.style && settings.style.fontSize}
          onChange={onChange}
        />
      </Form.Group>
    </Form>
  );
};

export default TextSettings;
