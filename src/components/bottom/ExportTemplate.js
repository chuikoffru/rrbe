import React, { useState, useCallback } from "react";
import { Modal, Button, InputGroup, FormControl, Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import Highlight from "react-highlight";
import styleToCss from "style-object-to-css-string";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import useClipboard from "react-use-clipboard";
import { useSelector } from "react-redux";

import { ReactComponent as ExportIcon } from "../../icons/export.svg";
import { ReactComponent as SaveIcon } from "../../icons/save.svg";
import { ReactComponent as CopyIcon } from "../../icons/sheet.svg";

import useGlobalSettings from "../../hooks/useGlobalSettings";
import htmlFilter from "../../helpers/htmlFilter";

import { header } from "./template/header";
import footer from "./template/footer";

import "highlight.js/scss/monokai.scss";

const Export = () => {
  const sections = useSelector((state) => state.sections.present.sections);
  const [show, setShow] = useState(false);
  const [showPrintPanel, setShowPrintPanel] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [wrap, setWrap] = useState(true);
  const [globalSettings] = useGlobalSettings();

  let html = htmlFilter();

  const [, setCopied] = useClipboard(html, {
    successDuration: 1000,
  });

  if (wrap) {
    html = String(header(styleToCss(globalSettings), name, showPrintPanel) + html + footer);
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
        <ExportIcon title="Экспорт" width="20" height="20" fill="#ffffff" />
      </Button>
      <Modal size="lg" show={show} onHide={() => setShow(false)}>
        <Modal.Body>
          <Highlight language="html">{html}</Highlight>
        </Modal.Body>
        <Modal.Footer>
          <Row className="w-100">
            <Col sm={1}>
              <Button variant="secondary" onClick={() => setShow(false)}>
                X
              </Button>
            </Col>
            <Col sm={3}>
              <BootstrapSwitchButton
                checked={wrap}
                onlabel="Полный шаблон"
                onstyle="success"
                offlabel="Только контент"
                offstyle="primary"
                onChange={(checked) => {
                  setWrap(checked);
                }}
              />
            </Col>
            <Col sm={3}>
              <BootstrapSwitchButton
                checked={showPrintPanel}
                onlabel="Панель печати"
                onstyle="success"
                offlabel="Без панели"
                offstyle="primary"
                onChange={(checked) => {
                  setShowPrintPanel(checked);
                }}
              />
            </Col>
            <Col sm={1}>
              <Button variant="info" onClick={() => setCopied(html)}>
                <CopyIcon title="Копировать в буфер" width="20" height="20" fill="#ffffff" />
              </Button>
            </Col>
            <Col sm={4}>
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
                      <SaveIcon title="Сохранить" width="20" height="20" fill="#ffffff" />
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
