import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Fonts from "./Fonts";
import Background from "./Background";
import FontSize from "./FontSize";

const GlobalSettings = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button variant="success" size="sm" onClick={() => setShow(true)}>
        Глобальные настройки
      </Button>
      <Modal size="lg" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Глобальные настройки</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Fonts />
          <FontSize />
          <Background />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GlobalSettings;
