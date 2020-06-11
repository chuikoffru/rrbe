import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeWidget } from "../../redux/sections/actions";

export const defaultParams = {
  widgetName: "News",
  props: {
    category: "",
  },
};

const NewsSettings = (props) => {
  const dispatch = useDispatch();
  const [settings, setSettings] = useState(props);

  const handleInput = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  // Сохраняем изменение настроек
  const saveChanges = (e) => {
    dispatch(changeWidget(settings));
  };

  return (
    <Col>
      <Row>
        <Form.Group>
          <Form.Label>Категории новостей</Form.Label>
          <Form.Control
            as="select"
            name="category"
            value={settings.category}
            onChange={handleInput}
          >
            <option>Политика</option>
            <option>Религия</option>
            <option>Экономика</option>
            <option>Общество</option>
            <option>Право</option>
          </Form.Control>
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

export default NewsSettings;
