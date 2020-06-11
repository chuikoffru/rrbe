import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Preview from "./components/Preview";
import Widgets from "./components/Widgets";
import Settings from "./components/Settings";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <Row>
          <Col>
            <h2>Виджеты</h2>
            <Widgets />
            <h2>Настройки</h2>
            <Settings />
          </Col>
          <Col>
            <h2>Предпросмотр</h2>
            <Preview />
          </Col>
        </Row>
      </Container>
    </DndProvider>
  );
}

export default App;
