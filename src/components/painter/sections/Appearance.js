import React, { useCallback } from "react";
import { Form } from "react-bootstrap";
import mutate from "dot-prop-immutable";

import RangeControl from "../controls/RangeControl";
import ColorPicker from "../controls/ColorPicker";

import st from "helpers/styles";

const Appearance = ({ settings, setSettings }) => {
  console.log("Appearance init", settings);

  // Изменяем настройки в зависимости от типа
  const onChange = useCallback(
    (e) => {
      // Получаем данные элемента формы
      const { name, value } = st(e.target);
      // Добавляем или изменяем настройку
      const newSettings = mutate.set(settings, `styles.${name}`, value);
      // Записываем настройки в локальное состояние
      setSettings(newSettings);
    },
    [setSettings, settings]
  );

  return (
    <Form>
      <RangeControl
        name="Размер текста"
        property="fontSize"
        onChange={onChange}
        value={settings.styles && settings.styles.fontSize}
        options={{ min: 0.2, max: 5, step: 0.1 }}
      />
      <ColorPicker
        name="Цвет текста"
        property="color"
        onChange={onChange}
        value={settings.styles && settings.styles.color}
      />
    </Form>
  );
};

export default Appearance;
