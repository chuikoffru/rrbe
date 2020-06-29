import React, { useState, useCallback } from "react";
import axios from "axios";
import Highlight from "react-highlight";
import beautify from "js-beautify/js/lib/beautify-html";

import BootstrapSwitchButton from "bootstrap-switch-button-react";

import { Modal, Button, InputGroup, FormControl, Row, Col, Spinner } from "react-bootstrap";

import htmlFilter from "helpers/htmlFilter";

import header from "./template/header";
import footer from "./template/footer";

import "highlight.js/scss/monokai.scss";

const Export = ({ html, sections }) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [wrap, setWrap] = useState(true);

  if (wrap) {
    html = String(header + html + footer);
    html = htmlFilter(html);
    html = beautify.html_beautify(html);
  } else if (html) {
    html = beautify.html_beautify(htmlFilter(html));
  }

  const saveTemplate = useCallback(async () => {
    setLoading(true);
    await axios.post("https://regagro.herokuapp.com/templates", {
      name,
      store: sections,
      html,
    });
    setLoading(false);
  }, [html, sections, name]);

  const handleChange = useCallback((e) => setName(e.target.value), []);

  return (
    <>
      <Button variant="primary" className="mr-2" size="sm" onClick={() => setShow(true)}>
        Экспорт
      </Button>
      <Modal size="lg" show={show} onHide={() => setShow(false)}>
        <Modal.Body>
          <Highlight language="html">{html}</Highlight>
        </Modal.Body>
        <Modal.Footer>
          <Row className="w-100">
            <Col sm={2}>
              <Button variant="secondary" onClick={() => setShow(false)}>
                Закрыть
              </Button>
            </Col>
            <Col sm={4}>
              <BootstrapSwitchButton
                checked={wrap}
                onlabel="Полный шаблон"
                onstyle="primary"
                offlabel="Только контент"
                offstyle="success"
                onChange={(checked) => {
                  setWrap(checked);
                }}
              />
            </Col>
            <Col sm={6}>
              <InputGroup>
                <FormControl value={name} onChange={handleChange} placeholder="Название шаблона" />
                <InputGroup.Append>
                  <Button variant="primary" disabled={!name} onClick={saveTemplate}>
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
