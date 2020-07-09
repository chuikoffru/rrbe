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
  const sections = useSelector(state => state.sections.present.sections);
  const [show, setShow] = useState(false);
  const [showPrintPanel, setShowPrintPanel] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [wrap, setWrap] = useState(true);
  const [globalSettings] = useGlobalSettings();
  let html = htmlFilter();
  const [, setCopied] = useClipboard(html, {
    successDuration: 1000
  });

  if (wrap) {
    html = String(header(styleToCss(globalSettings), name, showPrintPanel) + html + footer);
  }

  const saveTemplate = useCallback(async () => {
    setLoading(true);
    await axios.post("https://regagro.herokuapp.com/templates", {
      name,
      store: sections,
      html
    });
    setLoading(false);
  }, [html, sections, name]);
  const handleChange = useCallback(e => setName(e.target.value), []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    className: "mr-2",
    size: "sm",
    onClick: () => setShow(true)
  }, /*#__PURE__*/React.createElement(ExportIcon, {
    title: "\u042D\u043A\u0441\u043F\u043E\u0440\u0442",
    width: "20",
    height: "20",
    fill: "#ffffff"
  })), /*#__PURE__*/React.createElement(Modal, {
    size: "lg",
    show: show,
    onHide: () => setShow(false)
  }, /*#__PURE__*/React.createElement(Modal.Body, null, /*#__PURE__*/React.createElement(Highlight, {
    language: "html"
  }, html)), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(Row, {
    className: "w-100"
  }, /*#__PURE__*/React.createElement(Col, {
    sm: 1
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setShow(false)
  }, "X")), /*#__PURE__*/React.createElement(Col, {
    sm: 3
  }, /*#__PURE__*/React.createElement(BootstrapSwitchButton, {
    checked: wrap,
    onlabel: "\u041F\u043E\u043B\u043D\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D",
    onstyle: "success",
    offlabel: "\u0422\u043E\u043B\u044C\u043A\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442",
    offstyle: "primary",
    onChange: checked => {
      setWrap(checked);
    }
  })), /*#__PURE__*/React.createElement(Col, {
    sm: 3
  }, /*#__PURE__*/React.createElement(BootstrapSwitchButton, {
    checked: showPrintPanel,
    onlabel: "\u041F\u0430\u043D\u0435\u043B\u044C \u043F\u0435\u0447\u0430\u0442\u0438",
    onstyle: "success",
    offlabel: "\u0411\u0435\u0437 \u043F\u0430\u043D\u0435\u043B\u0438",
    offstyle: "primary",
    onChange: checked => {
      setShowPrintPanel(checked);
    }
  })), /*#__PURE__*/React.createElement(Col, {
    sm: 1
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "info",
    onClick: () => setCopied(html)
  }, /*#__PURE__*/React.createElement(CopyIcon, {
    title: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 \u0431\u0443\u0444\u0435\u0440",
    width: "20",
    height: "20",
    fill: "#ffffff"
  }))), /*#__PURE__*/React.createElement(Col, {
    sm: 4
  }, /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(FormControl, {
    value: name,
    onChange: handleChange,
    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430"
  }), /*#__PURE__*/React.createElement(InputGroup.Append, null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    disabled: !name,
    onClick: saveTemplate
  }, loading ? /*#__PURE__*/React.createElement(Spinner, {
    as: "span",
    animation: "grow",
    size: "sm",
    role: "status",
    "aria-hidden": "true"
  }) : /*#__PURE__*/React.createElement(SaveIcon, {
    title: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
    width: "20",
    height: "20",
    fill: "#ffffff"
  })))))))));
};

export default Export;