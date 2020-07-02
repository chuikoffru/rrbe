import React, { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Preview from "components/Preview";
import Widgets from "components/Widgets";
import Settings from "components/Settings";

import "./app.scss";
import "scss/print.scss";

function App() {
  // Назначаем глобальные события на окна
  useEffect(() => {
    // Нажатия клавиш
    const keydown = document.addEventListener("keydown", (e) => {
      // CMD+P
      if (e.metaKey && e.keyCode === 80) {
        console.log("Печать");
        //TODO: Убирать все hover при печати
      }
    });
    return () => {
      document.removeEventListener("keydown", keydown);
    };
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="rrbe">
        <div className="rrbe__left d-print-none">
          <aside className="rrbe__left-container">
            <h4>Виджеты</h4>
            <Widgets />
            <h4>Настройки</h4>
            <Settings />
          </aside>
        </div>
        <div className="rrbe__right">
          <Preview />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
