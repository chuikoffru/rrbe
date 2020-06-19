import { useState, useCallback } from "react";

import { ItemTypes } from "helpers/itemTypes";

const useSettingsByType = (type, widget, section) => {
  let block = {};

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

  const [settings, setSettings] = useState(block);

  const updateSettings = useCallback(() => {
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
  }, [section, settings, type, widget]);

  return { settings, setSettings, updateSettings };
};

export default useSettingsByType;
