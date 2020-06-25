import React, { useState, useCallback } from "react";
import { Form, FormControl, Button, InputGroup } from "react-bootstrap";

import useWidgetSettings from "hooks/useWidgetSettings";

const CustomTableSettings = (props) => {
  // Список колонок
  const [columns, setColumns] = useWidgetSettings("columns", []);
  //const [rows, setRows] = useWidgetSettings("rows", []);

  // Временное название новой колонки
  const [columnName, setColumnName] = useState("");

  // Добавляем новую колонку
  const addColumn = useCallback(() => {
    setColumns([...columns, columnName]);
  }, [columnName, columns, setColumns]);

  return (
    <>
      <Form.Group>
        <Form.Label>Колонки</Form.Label>
        <InputGroup>
          <FormControl
            placeholder="Имя колонки"
            value={columnName}
            onChange={(e) => setColumnName(e.target.value)}
          />
          <InputGroup.Append>
            <Button variant="primary" onClick={addColumn}>
              +
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
      {columns && (
        <table className="preview_table">
          <thead>
            {columns.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </thead>
        </table>
      )}
    </>
  );
};

export default CustomTableSettings;
