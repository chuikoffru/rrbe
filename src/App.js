import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators } from "redux-undo";

import Preview from "./components/Preview";
import Widgets from "./components/Widgets";
import Settings from "./components/Settings";

function App() {
  const dispatch = useDispatch();
  const isUndoable = useSelector((state) => state.sections.past.length === 0);
  const isRedoble = useSelector((state) => state.sections.future.length === 0);

  const undo = () => {
    dispatch(ActionCreators.undo());
  };
  const redo = () => {
    dispatch(ActionCreators.redo());
  };

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
            <Button
              variant="dark"
              size="sm"
              className="mr-2"
              disabled={isUndoable}
              onClick={undo}
            >
              Отменить
            </Button>
            <Button
              variant="dark"
              size="sm"
              disabled={isRedoble}
              onClick={redo}
            >
              Вернуть
            </Button>
            <Preview />
          </Col>
        </Row>
      </Container>
    </DndProvider>
  );
}

export default App;
