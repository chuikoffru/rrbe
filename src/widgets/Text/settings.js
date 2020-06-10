import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeWidget } from "../../redux/sections/actions";

const TextSettings = (props) => {
  const dispatch = useDispatch();

  // Получаем данные выбранного виджета
  const selectedWidget = useSelector((state) => state.sections.selectedWidget);

  // Получаем настройки виджета
  const { sectionIndex, columnIndex, rowIndex } = selectedWidget;
  const params = useSelector(
    (state) =>
      state.sections.sections[sectionIndex].columns[columnIndex][rowIndex].props
  );

  const [settings, setSettings] = useState(params);

  const handleInput = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
    dispatch(changeWidget(settings));
  };

  // Сохраняем изменение настроек
  const saveChanges = (e) => {
    dispatch(changeWidget(settings));
  };

  return (
    <Col>
      <Row>
        <Form.Group>
          <Form.Label>Текст</Form.Label>
          <Form.Control
            name="text"
            defaultValue={settings.text}
            onChange={handleInput}
          />
        </Form.Group>
      </Row>
      <Row>
        <Button type="button" onClick={saveChanges}>
          Сохранить
        </Button>
      </Row>
    </Col>
  );
};

export default TextSettings;
