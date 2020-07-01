import React, { useCallback, useMemo } from "react";
import { Form } from "react-bootstrap";

import SelectControl from "./painter/controls/SelectControl";
import useColumnsSettings from "hooks/useColumnsSettings";
import { getListColumns, sectionTypesList, sectionTypes } from "helpers/sectionTypes";
import RangeControl from "./painter/controls/RangeControl";

const SectionSettings = () => {
  // Получаем данные выбранной секции
  const [columns, setColumns] = useColumnsSettings("columns", 1);
  const [sectionType, setSectionType] = useColumnsSettings("type", sectionTypes.PAGE_BODY);
  const [breakAfter, setBreakAfter] = useColumnsSettings("styles.breakAfter", "auto");
  // Создаем массив из количества колонок
  const columnCount = useMemo(() => Array(+columns).fill(0), [columns]);
  const [widthColumns, setWidthColumns] = useColumnsSettings("widthColumns", columnCount);

  // Управляем количеством колонок
  const handleCountColumns = useCallback(
    (count) => {
      // Указываем новое количество колонок
      setColumns(+count);
      // Получаем текущее значение колонок
      const currentCount = +columns;
      // Получаем желаемое значение колонок
      const wishCount = +count;
      // Получаем разницу текущего количества колонок и желаемого
      const diff = wishCount - currentCount;
      // Определяем действие над массивом
      if (currentCount > wishCount) {
        // Если текущее количество колонок больше желаемого - убираем
        setWidthColumns([...widthColumns.splice(0, diff)]);
      } else {
        // Если текущее количество колонок меньше желаемого - добавляем
        setWidthColumns([...widthColumns, ...Array(diff).fill(0)]);
      }
    },
    [columns, setColumns, setWidthColumns, widthColumns]
  );

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
        name="Количество колонок"
        value={columns}
        onChange={handleCountColumns}
        list={getListColumns()}
      />
      {widthColumns.map((_, i) => (
        <RangeControl
          key={i}
          name={`Ширина колонки ${i + 1}`}
          value={widthColumns[i]}
          onChange={(value) => handleWidthColumn(i, value)}
          options={{ min: 1, max: 12, step: 1, appendix: "" }}
        />
      ))}
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
