import React from "react";
import ExportTemplate from "./ExportTemplate";
import UndoRedo from "./UndoRedo";
import ImportTemplate from "./ImportTemplate";

const Bottom = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "bottom d-print-none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bottom__left"
  }, /*#__PURE__*/React.createElement(UndoRedo, null)), /*#__PURE__*/React.createElement("div", {
    className: "bottom__right"
  }, /*#__PURE__*/React.createElement(ImportTemplate, null), /*#__PURE__*/React.createElement(ExportTemplate, null)));
};

export default Bottom;