import React from "react";
import { Form } from "react-bootstrap";

import useColumnsSettings from "../hooks/useColumnsSettings";
import SelectControl from "./painter/controls/SelectControl";
import { getListColumns, sectionTypesList, sectionTypes } from "../helpers/sectionTypes";

const SectionSettings = () => {
  // Получаем данные выбранной секции
  const [columns, setColumns] = useColumnsSettings("columns", 1);
  const [sectionType, setSectionType] = useColumnsSettings("type", sectionTypes.PAGE_BODY);

  return (
    <Form>
      <SelectControl
        name="Количество колонок"
        value={columns}
        onChange={setColumns}
        list={getListColumns()}
      />
      <SelectControl
        name="Тип секции при печати"
        value={sectionType}
        onChange={setSectionType}
        list={sectionTypesList}
      />
    </Form>
  );
};

export default SectionSettings;
