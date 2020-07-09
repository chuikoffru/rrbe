import React, { useState, useCallback } from "react";
import { Form, FormControl, Button, InputGroup } from "react-bootstrap";
import useWidgetSettings from "../../hooks/useWidgetSettings";

const CustomTableSettings = () => {
  // Список колонок
  const [columns, setColumns] = useWidgetSettings("columns", []);
  const [rows, setRows] = useWidgetSettings("rows", []); // Временное название новой колонки

  const [columnName, setColumnName] = useState(""); // Добавляем новую колонку

  const addColumn = useCallback(() => {
    setColumns([...columns, columnName]);
    setColumnName("");
  }, [columnName, columns, setColumns]); // Добавляем новую запись

  const addRow = useCallback(e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let newRow = {};
    formData.forEach((value, key) => {
      newRow[key] = value;
    });
    setRows([...rows, newRow]);
    e.target.reset();
  }, [rows, setRows]); // Удаляем колонку

  const removeColumn = useCallback(key => {
    setColumns(columns.filter((_, index) => index !== key));
  }, [columns, setColumns]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Form.Group, null, /*#__PURE__*/React.createElement(Form.Label, null, "\u041A\u043E\u043B\u043E\u043D\u043A\u0438"), /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(FormControl, {
    placeholder: "\u0418\u043C\u044F \u043A\u043E\u043B\u043E\u043D\u043A\u0438",
    value: columnName,
    onKeyPress: e => e.key === "Enter" && addColumn(),
    onChange: e => setColumnName(e.target.value)
  }), /*#__PURE__*/React.createElement(InputGroup.Append, null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: addColumn
  }, "+")))), /*#__PURE__*/React.createElement(Form, {
    onSubmit: addRow,
    className: "mb-3"
  }, columns.map((item, key) => /*#__PURE__*/React.createElement(Form.Group, {
    key: key
  }, /*#__PURE__*/React.createElement(Form.Label, null, item), /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(FormControl, {
    name: item
  }), /*#__PURE__*/React.createElement(InputGroup.Append, null, /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    onClick: () => removeColumn(key)
  }, "-"))))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "success",
    type: "submit"
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C")));
};

export default CustomTableSettings;