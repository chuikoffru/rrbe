import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeWidget } from "../../redux/sections/actions";

export const defaultParams = {
  widgetName: "Image",
  props: {
    src: "./favicon.ico",
    alt: "Подпись к изображению",
  },
};

const ImageSettings = (props) => {
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
          <Form.Label>URL изображения</Form.Label>
          <Form.Control
            type="text"
            name="src"
            value={settings.src}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Подпись к изображению</Form.Label>
          <Form.Control
            name="alt"
            type="text"
            value={settings.alt}
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

export default ImageSettings;
