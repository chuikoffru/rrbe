import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { Modal, Button, FormControl, Spinner } from "react-bootstrap";
import { importStructure } from "redux/sections/actions";

const ImportTemplate = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = useCallback((e) => setName(e.target.value), []);

  const loadTemplate = useCallback(async () => {
    setLoading(true);
    const req = await axios(
      "https://regagro.herokuapp.com/templates?_limit=1&name=" + name
    );
    setLoading(false);
    console.log("req", req.data[0]);
    dispatch(importStructure(req.data[0].store));
    setShow(false);
  }, [dispatch, name]);

  return (
    <>
      <Button
        variant="primary"
        className="mr-2"
        size="sm"
        onClick={() => setShow(true)}
      >
        Импорт
      </Button>
      <Modal size="lg" show={show} onHide={() => setShow(false)}>
        <Modal.Body>
          <FormControl
            value={name}
            onChange={handleChange}
            placeholder="Название шаблона"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Закрыть
          </Button>
          <Button variant="primary" disabled={!name} onClick={loadTemplate}>
            {loading ? (
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              "Импорт"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ImportTemplate;
