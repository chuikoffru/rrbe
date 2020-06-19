import React, { useCallback, useState } from "react";
import { Form } from "react-bootstrap";

import useWidgetSettings from "hooks/useWidgetSettings";
import useSectionSettings from "hooks/useSectionSettings";

import { ItemTypes } from "helpers/itemTypes";
import st from "helpers/styles";
import RangeInput from "./RangeInput";

const Appearance = ({ type }) => {
  console.log("Appearance init");
  // Получаем настройки виджета и секции
  const widget = useWidgetSettings();
  const section = useSectionSettings();

  // Задаем пустой блок хранения настроек в зависимости от текущего типа элемента
  let block = {};
  // Заполняем блок настроек в зависимости от типа выбранного элемента
  switch (type) {
    case ItemTypes.ELEMENTS:
      block = widget.settings;
      break;
    case ItemTypes.SECTIONS:
      block = section.settings;
      break;
    default:
      break;
  }

  // Создаем состояние из блока настроек
  const [settings, setSettings] = useState(block);

  // Изменяем настройки в зависимости от типа
  const onChange = useCallback(
    (e) => {
      // Получаем данные элемента формы
      const { name, value } = st(e.target);

      // Записываем настройки в локальное состояние
      setSettings({
        ...settings,
        ...settings.styles,
        styles: { [name]: value },
      });

      // В зависимости от типа элемента меняем настройки
      switch (type) {
        case ItemTypes.ELEMENTS:
          widget.setSettings(settings);
          break;
        case ItemTypes.SECTIONS:
          section.setSettings(settings);
          break;
        default:
          break;
      }
    },
    [section, settings, type, widget]
  );

  return (
    <Form>
      <RangeInput
        name="Размер текста"
        property="fontSize"
        onChange={onChange}
        value={settings.styles.fontSize}
        options={{ min: 0.2, max: 5, step: 0.1 }}
      />
    </Form>
  );
};

export default Appearance;
