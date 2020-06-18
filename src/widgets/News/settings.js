import React, { useCallback } from "react";
import { Form } from "react-bootstrap";
import useWidgetSettings from "../../hooks/useWidgetSettings";

export const defaultParams = {
  widgetName: "News",
  props: {
    category: "",
  },
};

const NewsSettings = () => {
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
        <Form.Label>Категории новостей</Form.Label>
        <Form.Control
          as="select"
          name="category"
          value={settings.category}
          onChange={onChange}
        >
          <option>Политика</option>
          <option>Религия</option>
          <option>Экономика</option>
          <option>Общество</option>
          <option>Право</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default NewsSettings;
