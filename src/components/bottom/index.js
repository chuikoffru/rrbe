import React from "react";

import ExportTemplate from "./ExportTemplate";
import UndoRedo from "./UndoRedo";
import ImportTemplate from "./ImportTemplate";

const Bottom = () => {
  return (
    <div className="bottom d-print-none">
      <div className="bottom__left">
        <UndoRedo />
      </div>
      <div className="bottom__right">
        <ImportTemplate />
        <ExportTemplate />
      </div>
    </div>
  );
};

export default Bottom;
