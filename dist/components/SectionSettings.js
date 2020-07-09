import React from "react";
import { useSelector } from "react-redux";
import useColumnsSettings from "../hooks/useColumnsSettings";
import { sectionTypesList, sectionTypes } from "../helpers/sectionTypes";
import { isNumber } from "../helpers/number";
import SelectControl from "./painter/controls/SelectControl";
import SectionPainter from "./painter/SectionPainter";
import ColumnSettings from "./ColumnSettings";

const SectionSettings = () => {
  // Получаем index выбранной секции
  const selectedSectionIndex = useSelector(state => state.sections.present.selectedSection); // Получаем данные выбранной секции

  const [sectionType, setSectionType] = useColumnsSettings("type", sectionTypes.PAGE_BODY);
  const [breakAfter, setBreakAfter] = useColumnsSettings("styles.breakAfter", "auto");
  if (!isNumber(selectedSectionIndex)) return /*#__PURE__*/React.createElement("p", null, "\u0412\u044B\u0431\u0440\u0438\u0442\u0435 \u0441\u0435\u043A\u0446\u0438\u044E");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ColumnSettings, null), /*#__PURE__*/React.createElement(SelectControl, {
    name: "\u0422\u0438\u043F \u0441\u0435\u043A\u0446\u0438\u0438 \u043F\u0440\u0438 \u043F\u0435\u0447\u0430\u0442\u0438",
    value: sectionType,
    onChange: setSectionType,
    list: sectionTypesList
  }), /*#__PURE__*/React.createElement(SelectControl, {
    name: "\u0420\u0430\u0437\u0440\u044B\u0432 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u0440\u0438 \u043F\u0435\u0447\u0430\u0442\u0438",
    value: breakAfter,
    onChange: setBreakAfter,
    list: [{
      name: "Автоматически",
      value: "auto"
    }, {
      name: "Разорвать страницу",
      value: "page"
    }, {
      name: "Не разрывать страницу",
      value: "avoid"
    }]
  }), /*#__PURE__*/React.createElement(SectionPainter, null));
};

export default /*#__PURE__*/React.memo(SectionSettings);