import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeWidget } from "../../redux/sections/actions";

const ImageSettings = (props) => {
  console.log("props", props);
  const dispatch = useDispatch();
  const [data, setData] = useState(props);

  const handleInput = (e) => {
    console.log("e", e);
    setData({ [e.target.name]: e.target.value });
  };

  const saveChanges = (e) => {
    dispatch(changeWidget({ ...props, ...data }));
  };

  return (
    <Col>
      <Row>
        <Form.Group controlId="imageUrl">
          <Form.Label>URL изображения</Form.Label>
          <Form.Control name="src" value={data.src} onChange={handleInput} />
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
