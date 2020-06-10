import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeWidget } from "../../redux/sections/actions";

const TextSettings = (props) => {
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
          <Form.Label>Текст</Form.Label>
          <Form.Control
            name="text"
            defaultValue={settings.text}
            onInput={handleInput}
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
