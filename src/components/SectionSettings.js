import React, { useCallback } from "react";
import { Form } from "react-bootstrap";
import useSectionSettings from "../hooks/useSectionSettings";

const SectionSettings = () => {
  // Получаем данные выбранной секции
  const { settings, setSettings } = useSectionSettings();

  const onChange = useCallback(
    (e) => {
      setSettings({ ...settings, [e.target.name]: e.target.value });
    },
    [setSettings, settings]
  );
  return (
    <Form>
      <Form.Group>
        <Form.Label>Количество колонок</Form.Label>
        <Form.Control
          as="select"
          name="columns"
          value={settings.columns}
          onChange={onChange}
        >
          {Array(11)
            .fill([])
            .map((v, i) => (
              <option key={i}>{i + 1}</option>
            ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default SectionSettings;
