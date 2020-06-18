import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import loadable from "@loadable/component";
import { Tabs, Tab } from "react-bootstrap";

import loadWidget from "helpers/loadWidget";
import { isNumber } from "helpers/number";

import Painter from "./Painter";

const Settings = () => {
  const [showTab, setShowTab] = useState("widget");

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
          ? import("../components/SectionSettings")
          : new Promise(() => null)
      ),
    [selectedSectionIndex]
  );

  return (
    <Tabs variant="pills" activeKey={showTab} onSelect={(k) => setShowTab(k)}>
      <Tab eventKey="widget" title="Виджет">
        {widgetName ? (
          <>
            <WidgetSettings />
            <Painter type={showTab} />
          </>
        ) : (
          <p>Выберите виджет</p>
        )}
      </Tab>
      <Tab eventKey="section" title="Секция">
        {isNumber(selectedSectionIndex) ? (
          <>
            <SectionSettings />
            <Painter type={showTab} />
          </>
        ) : (
          <p>Выберите секцию</p>
        )}
      </Tab>
    </Tabs>
  );
};

export default Settings;
