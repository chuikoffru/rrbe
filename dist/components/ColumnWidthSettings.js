import React, { useCallback, useLayoutEffect } from "react";
import { Accordion, Card } from "react-bootstrap";
import useColumnsSettings from "../hooks/useColumnsSettings";
import RangeControl from "./painter/controls/RangeControl";

const ColumnWidthSettings = ({
  columns
}) => {
  const [widthColumns, setWidthColumns] = useColumnsSettings("widthColumns", [0]);
  const diff = columns - widthColumns.length;
  useLayoutEffect(() => {
    if (diff < 0) {
      // Если текущее количество колонок больше желаемого - убираем
      setWidthColumns([...widthColumns.slice(0, diff)]);
    } else if (diff > 0) {
      // Если текущее количество колонок меньше желаемого - добавляем
      setWidthColumns([...widthColumns, ...Array(diff).fill(0)]);
    }
  }, [diff, setWidthColumns, widthColumns]);
  const handleWidthColumn = useCallback((index, value) => {
    widthColumns[index] = +value;
    setWidthColumns(widthColumns);
  }, [setWidthColumns, widthColumns]);
  return /*#__PURE__*/React.createElement(Accordion, {
    className: "my-3"
  }, widthColumns.map((_, i) => /*#__PURE__*/React.createElement(Card, {
    key: i
  }, /*#__PURE__*/React.createElement(Accordion.Toggle, {
    as: Card.Header,
    eventKey: i
  }, `Настроить колонку ${i + 1}`), /*#__PURE__*/React.createElement(Accordion.Collapse, {
    eventKey: i
  }, /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(RangeControl, {
    name: `Ширина колонки ${i + 1} = ${widthColumns[i]}`,
    value: widthColumns[i],
    onChange: value => handleWidthColumn(i, value),
    options: {
      min: 0,
      max: 12
    }
  }))))));
};

export default ColumnWidthSettings;