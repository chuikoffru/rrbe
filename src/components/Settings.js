import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import loadable from "@loadable/component";
import { Tabs, Tab } from "react-bootstrap";

import loadWidget from "helpers/loadWidget";
import { isNumber } from "helpers/number";
import { ItemTypes } from "helpers/itemTypes";
import Painter from "./Painter";
import DeleteWidget from "./DeleteWidget";

const Settings = () => {
  console.log("Settings init");
  const [showTab, setShowTab] = useState(ItemTypes.ELEMENTS);
  const { widgetName } = useSelector(
    (state) => state.sections.present.selectedWidget
  );

  const selectedSectionIndex = useSelector(
    (state) => state.sections.present.selectedSection
  );

  // Загрузаем страницу настроек виджета
  const WidgetSettings = useMemo(
    () =>
      loadable(() =>
        widgetName ? loadWidget(widgetName, true) : new Promise(() => null)
      ),
    [widgetName]
  );

  const SectionSettings = useMemo(
    () =>
      loadable(() =>
        isNumber(selectedSectionIndex)
          ? import("components/SectionSettings")
          : new Promise(() => null)
      ),
    [selectedSectionIndex]
  );

  // Устанавливаем таб активным в зависимости от выбранных элементов
  const activeTab = useCallback(() => {
    if (isNumber(selectedSectionIndex) && !widgetName) {
      // Если выбрана секция, но нет виджета
      return ItemTypes.SECTIONS;
    } else if (widgetName && !isNumber(selectedSectionIndex)) {
      // Если выбран виджет, но не секция
      return ItemTypes.SECTIONS;
    } else {
      // В остальных случаях возвращаем то что выбрал пользователь
      return showTab;
    }
  }, [selectedSectionIndex, showTab, widgetName]);

  useEffect(() => {
    setShowTab(activeTab());
  }, [activeTab]);

  return (
    <Tabs variant="pills" activeKey={showTab} onSelect={(k) => setShowTab(k)}>
      {widgetName && (
        <Tab eventKey={ItemTypes.ELEMENTS} title="Виджет">
          <WidgetSettings />
          <DeleteWidget />
          {showTab === ItemTypes.ELEMENTS && <Painter type={showTab} />}
        </Tab>
      )}
      {isNumber(selectedSectionIndex) && (
        <Tab eventKey={ItemTypes.SECTIONS} title="Секция">
          <SectionSettings />
          {showTab === ItemTypes.SECTIONS && <Painter type={showTab} />}
        </Tab>
      )}
    </Tabs>
  );
};

export default Settings;
