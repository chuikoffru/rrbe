import React from "react";
import loadable from "@loadable/component";
import { Card, Accordion } from "react-bootstrap";

const WidgetPainter = () => {
  const categories = [{
    name: "Оформление",
    cmp: loadable(() => import(`./widgets/Appearance`))
  }, {
    name: "Позиционирование",
    cmp: loadable(() => import(`./widgets/Alignments`))
  }, {
    name: "Отступы",
    cmp: loadable(() => import(`./widgets/Indentation`))
  }];
  return /*#__PURE__*/React.createElement(Accordion, null, categories.map((category, index) => /*#__PURE__*/React.createElement(Card, {
    key: index
  }, /*#__PURE__*/React.createElement(Accordion.Toggle, {
    as: Card.Header,
    eventKey: index
  }, category.name), /*#__PURE__*/React.createElement(Accordion.Collapse, {
    eventKey: index
  }, /*#__PURE__*/React.createElement(Card.Body, null, category.cmp.render())))));
};

export default /*#__PURE__*/React.memo(WidgetPainter);