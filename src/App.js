import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

import { toggleWidgets } from "redux/app/actions";

import Preview from "components/Preview";
import Widgets from "components/Widgets";
import Settings from "components/Settings";
import Bottom from "components/bottom";

import { ReactComponent as WidgetsIcon } from "icons/menu.svg";
import { ReactComponent as MenuIcon } from "icons/open-menu.svg";

import "./app.scss";
import "scss/print.scss";
import Resizer from "components/Resizer";

function App() {
  const dispatch = useDispatch();
  const showWidgets = useSelector((state) => state.app.showWidgets);
  const [width, setWidth] = useState(400);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="rrbe">
        <div className="rrbe__left d-print-none" style={{ maxWidth: width }}>
          <div className="rrbe__left-top left-top">
            <div className="left-top__burger">
              <Button variant="link">
                <MenuIcon width="20" height="20" fill="#ffffff" />
              </Button>
            </div>
            <div className="left-top__title">
              <h4>RRBE Editor</h4>
            </div>
            <div className="left-top__widgets">
              <Button variant="link" onClick={() => dispatch(toggleWidgets(!showWidgets))}>
                <WidgetsIcon width="20" height="20" fill="#ffffff" />
              </Button>
            </div>
          </div>
          <aside className="rrbe__left-container">{showWidgets ? <Widgets /> : <Settings />}</aside>
          <div className="rrbe__left-bottom">
            <Bottom />
          </div>
        </div>
        <Resizer setWidth={setWidth} />
        <div className="rrbe__right">
          <Preview />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
