import React from "react";
import ExportTemplate from "components/top/ExportTemplate";
import UndoRedo from "components/top/UndoRedo";
import ImportTemplate from "./ImportTemplate";

const Top = ({ html }) => {
  return (
    <div className="rrbe__right-top top">
      <div className="top__left">
        <UndoRedo />
      </div>
      <div className="top__right">
        <ImportTemplate />
        <ExportTemplate html={html} />
      </div>
    </div>
  );
};

export default Top;
