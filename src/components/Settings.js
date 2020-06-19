import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import loadable from "@loadable/component";
import { Tabs, Tab } from "react-bootstrap";

import loadWidget from "helpers/loadWidget";
import { isNumber } from "helpers/number";
import { ItemTypes } from "helpers/itemTypes";
import SectionPainter from "./SectionPainter";
import WidgetPainter from "./WidgetPainter";

const Settings = () => {
  console.log("Settings init");
  const [showTab, setShowTab] = useState(ItemTypes.ELEMENTS);
  const widgetName = useSelector(
    (state) => state.sections.present.selectedWidget.widgetName
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

  return (
    <Tabs variant="pills" activeKey={showTab} onSelect={(k) => setShowTab(k)}>
      <Tab eventKey={ItemTypes.ELEMENTS} title="Виджет">
        {widgetName ? (
          <>
            <WidgetSettings />
            <WidgetPainter />
          </>
        ) : (
          <p>Выберите виджет</p>
        )}
      </Tab>
      <Tab eventKey={ItemTypes.SECTIONS} title="Секция">
        {isNumber(selectedSectionIndex) ? (
          <>
            <SectionSettings />
            <SectionPainter />
          </>
        ) : (
          <p>Выберите секцию</p>
        )}
      </Tab>
    </Tabs>
  );
};

export default Settings;
