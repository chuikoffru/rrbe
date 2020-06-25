import React from "react";
import ExportTemplate from "components/top/ExportTemplate";
import UndoRedo from "components/top/UndoRedo";
import ImportTemplate from "./ImportTemplate";

const Top = (props) => {
  return (
    <div className="rrbe__right-top top d-print-none">
      <div className="top__left">
        <UndoRedo />
      </div>
      <div className="top__right">
        <ImportTemplate />
        <ExportTemplate {...props} />
      </div>
    </div>
  );
};

export default Top;
