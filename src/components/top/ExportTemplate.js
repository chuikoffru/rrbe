import React, { useState, useCallback } from "react";
import AceEditor from "react-ace";
import beautify from "js-beautify/js/lib/beautify-html";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import {
  Modal,
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import htmlFilter from "helpers/htmlFilter";
import { useSelector } from "react-redux";
import axios from "axios";

const Export = ({ html }) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const markup = useSelector((state) => state.sections.present.sections);

  const result = html && beautify.html_beautify(htmlFilter(html));

  const saveTemplate = useCallback(async () => {
    setLoading(true);
    const req = await axios.post("https://regagro.herokuapp.com/templates", {
      name,
      store: markup,
      html: result,
    });
    setLoading(false);
    console.log("req", req);
  }, [markup, name, result]);

  const handleChange = useCallback((e) => setName(e.target.value), []);

  return (
    <>
      <Button variant="primary" size="sm" onClick={() => setShow(true)}>
        Экспорт
      </Button>
      <Modal size="lg" show={show} onHide={() => setShow(false)}>
        <Modal.Body>
          <AceEditor
            width="100%"
            setOptions={{
              useWorker: false,
              readOnly: true,
            }}
            mode="html"
            theme="monokai"
            name="export"
            value={result}
          />
        </Modal.Body>
        <Modal.Footer>
          <Row className="w-100">
            <Col sm={4}>
              <Button variant="secondary" onClick={() => setShow(false)}>
                Закрыть
              </Button>
            </Col>
            <Col sm={8}>
              <InputGroup>
                <FormControl
                  value={name}
                  onChange={handleChange}
                  placeholder="Название шаблона"
                />
                <InputGroup.Append>
                  <Button
                    variant="primary"
                    disabled={!name}
                    onClick={saveTemplate}
                  >
                    {loading ? (
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    ) : (
                      "Сохранить"
                    )}
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Export;
