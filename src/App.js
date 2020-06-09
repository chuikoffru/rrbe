import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import Preview from "./components/Preview";
import Widgets from "./components/Widgets";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Виджеты</h2>
          <Widgets />
          <h2>Настройки</h2>
        </Col>
        <Col>
          <h2>Предпросмотр</h2>
          <Preview />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
