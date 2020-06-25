import React, { useState, useCallback } from "react";
import { Form, FormControl, Button, InputGroup } from "react-bootstrap";

import useWidgetSettings from "hooks/useWidgetSettings";

const CustomTableSettings = () => {
  // Список колонок
  const [columns, setColumns] = useWidgetSettings("columns", []);
  const [rows, setRows] = useWidgetSettings("rows", []);

  // Временное название новой колонки
  const [columnName, setColumnName] = useState("");

  // Добавляем новую колонку
  const addColumn = useCallback(() => {
    setColumns([...columns, columnName]);
    setColumnName("");
  }, [columnName, columns, setColumns]);

  // Добавляем новую запись
  const addRow = useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      let newRow = {};
      formData.forEach((value, key) => {
        newRow[key] = value;
      });
      setRows([...rows, newRow]);
      e.target.reset();
    },
    [rows, setRows]
  );

  // Удаляем колонку
  const removeColumn = useCallback(
    (key) => {
      setColumns(columns.filter((_, index) => index !== key));
    },
    [columns, setColumns]
  );

  return (
    <>
      <Form.Group>
        <Form.Label>Колонки</Form.Label>
        <InputGroup>
          <FormControl
            placeholder="Имя колонки"
            value={columnName}
            onKeyPress={(e) => e.key === "Enter" && addColumn()}
            onChange={(e) => setColumnName(e.target.value)}
          />
          <InputGroup.Append>
            <Button variant="primary" onClick={addColumn}>
              +
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
      <Form onSubmit={addRow} className="mb-3">
        {columns.map((item, key) => (
          <Form.Group key={key}>
            <Form.Label>{item}</Form.Label>
            <InputGroup>
              <FormControl name={item} />
              <InputGroup.Append>
                <Button variant="danger" onClick={() => removeColumn(key)}>
                  -
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        ))}
        <Button size="sm" variant="success" type="submit">
          Добавить запись
        </Button>
      </Form>
    </>
  );
};

export default CustomTableSettings;
