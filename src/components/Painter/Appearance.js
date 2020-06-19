import React, { useCallback } from "react";
import { Form } from "react-bootstrap";

import useWidgetSettings from "hooks/useWidgetSettings";
import useSectionSettings from "hooks/useSectionSettings";
import useSettingsByType from "hooks/useSettingsByType";

import RangeInput from "./RangeInput";
import ColorPicker from "./ColorPicker";

import st from "helpers/styles";
import styles from "helpers/styles";

const Appearance = ({ type }) => {
  console.log("Appearance init");
  // Получаем настройки виджета и секции
  const widget = useWidgetSettings();
  const section = useSectionSettings();

  console.log("widget.settings", widget.settings);
  //console.log("section.settings", section.settings);

  const { settings, setSettings, updateSettings } = useSettingsByType(
    type,
    widget,
    section
  );

  // Изменяем настройки в зависимости от типа
  const onChange = useCallback(
    (e) => {
      // Получаем данные элемента формы
      const { name, value } = st(e.target);

      // Записываем настройки в локальное состояние
      setSettings({
        ...settings,
        styles: {
          ...styles,
          [name]: value,
        },
      });

      // В зависимости от типа элемента меняем настройки
      updateSettings();
    },
    [setSettings, settings, updateSettings]
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
      <ColorPicker
        name="Цвет текста"
        property="color"
        onChange={onChange}
        value={settings.styles.color}
      />
    </Form>
  );
};

export default Appearance;
