import React from "react";
import { Form } from "react-bootstrap";
import useSectionSettings from "../hooks/useSectionSettings";

const SectionSettings = (props) => {
  // Получаем данные выбранной секции
  const params = useSectionSettings();
  // if (sectionIndex) return <p>Выберите секцию для настройки</p>;

  console.log("params", params);
  return (
    <Form>
      <Form.Group>
        <Form.Label>Количество колонок</Form.Label>
        <Form.Control as="select" value={props.columns}>
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
