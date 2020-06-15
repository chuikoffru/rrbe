import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Preview from "./components/Preview";
import Widgets from "./components/Widgets";
import Settings from "./components/Settings";
import UndoRedo from "./components/UndoRedo";

import "./app.scss";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="rrbe">
        <div className="rrbe__left">
          <UndoRedo />
          <h2>Виджеты</h2>
          <Widgets />
          <h2>Настройки</h2>
          <Settings />
        </div>
        <div className="rrbe__right">
          <Preview />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
