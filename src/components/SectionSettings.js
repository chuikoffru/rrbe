import React, { useCallback, useMemo, useLayoutEffect } from "react";
import { Form, Accordion, Card } from "react-bootstrap";

import SelectControl from "./painter/controls/SelectControl";
import useColumnsSettings from "hooks/useColumnsSettings";
import { sectionTypesList, sectionTypes } from "helpers/sectionTypes";
import RangeControl from "./painter/controls/RangeControl";
import usePrevious from "../hooks/usePrevious";

const SectionSettings = () => {
  // Получаем данные выбранной секции
  const [columns, setColumns] = useColumnsSettings("columns", 1);
  const [sectionType, setSectionType] = useColumnsSettings("type", sectionTypes.PAGE_BODY);
  const [breakAfter, setBreakAfter] = useColumnsSettings("styles.breakAfter", "auto");
  // Создаем массив из количества колонок
  const count = usePrevious(columns) || 1;
  const columnCount = useMemo(() => Array(+count).fill(0), [count]);
  const [widthColumns, setWidthColumns] = useColumnsSettings("widthColumns", columnCount);

  // Управляем количеством колонок
  useLayoutEffect(() => {
    // Получаем текущее значение колонок
    const currentCount = +columns;
    // Получаем желаемое значение колонок
    const wishCount = +count;
    // Получаем разницу текущего количества колонок и желаемого
    const diff = currentCount - wishCount;
    // Определяем действие над массивом
    if (diff < 0) {
      // Если текущее количество колонок больше желаемого - убираем
      setWidthColumns([...widthColumns.slice(0, diff)]);
    } else if (diff > 0) {
      // Если текущее количество колонок меньше желаемого - добавляем
      setWidthColumns([...widthColumns, 0]);
    } else {
      return;
    }
  }, [columns, count, setWidthColumns, widthColumns]);

  // Управляем шириной колонки по индексу
  const handleWidthColumn = useCallback(
    (index, value) => {
      widthColumns[index] = +value;
      setWidthColumns(widthColumns);
    },
    [setWidthColumns, widthColumns]
  );

  return (
    <Form>
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
      <RangeControl
        name={`Количество колонок - ${columns}`}
        value={columns}
        onChange={setColumns}
        options={{ min: 1, max: 12, appendix: "" }}
      />
      <Accordion className="my-3">
        {widthColumns.map((_, i) => (
          <Card key={i}>
            <Accordion.Toggle as={Card.Header} eventKey={i}>
              {`Настроить колонку ${i + 1}`}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={i}>
              <Card.Body>
                <RangeControl
                  name={`Ширина колонки ${i + 1} = ${widthColumns[i]}`}
                  value={widthColumns[i]}
                  onChange={(value) => handleWidthColumn(i, value)}
                  options={{ min: 0, max: 12, appendix: "" }}
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </Form>
  );
};

export default SectionSettings;
