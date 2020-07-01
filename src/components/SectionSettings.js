import React from "react";
import { Form } from "react-bootstrap";

import useColumnsSettings from "../hooks/useColumnsSettings";
import SelectControl from "./painter/controls/SelectControl";
import { getListColumns, sectionTypesList, sectionTypes } from "../helpers/sectionTypes";

const SectionSettings = () => {
  // Получаем данные выбранной секции
  const [columns, setColumns] = useColumnsSettings("columns", 1);
  const [sectionType, setSectionType] = useColumnsSettings("type", sectionTypes.PAGE_BODY);
  const [breakAfter, setBreakAfter] = useColumnsSettings("styles.breakAfter", "auto");

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
      <SelectControl
        name="Разрыв страницы при печати"
        value={breakAfter}
        onChange={setBreakAfter}
        list={[
          { name: "Автоматически", value: "auto" },
          { name: "Разорвать страницу", value: "page" },
          { name: "Не разрывать страницу", value: "avoid" },
        ]}
      />
    </Form>
  );
};

export default SectionSettings;
