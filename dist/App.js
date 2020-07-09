import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { toggleWidgets } from "./store/app/actions";
import Preview from "./components/Preview";
import Widgets from "./components/Widgets";
import Settings from "./components/Settings";
import Bottom from "./components/bottom";
import Resizer from "./components/Resizer";
import { ReactComponent as WidgetsIcon } from "./icons/menu.svg";
import { ReactComponent as MenuIcon } from "./icons/open-menu.svg";
import "./app.scss";
import "./scss/print.scss";

function App() {
  const dispatch = useDispatch();
  const showWidgets = useSelector(state => state.app.showWidgets);
  const [width, setWidth] = useState(400);
  return /*#__PURE__*/React.createElement(DndProvider, {
    backend: HTML5Backend
  }, /*#__PURE__*/React.createElement("div", {
    className: "rrbe"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rrbe__left d-print-none",
    style: {
      maxWidth: width
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rrbe__left-top left-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "left-top__burger"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link"
  }, /*#__PURE__*/React.createElement(MenuIcon, {
    width: "20",
    height: "20",
    fill: "#ffffff"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "left-top__title"
  }, /*#__PURE__*/React.createElement("h4", null, "RRBE Editor")), /*#__PURE__*/React.createElement("div", {
    className: "left-top__widgets"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => dispatch(toggleWidgets(!showWidgets))
  }, /*#__PURE__*/React.createElement(WidgetsIcon, {
    width: "20",
    height: "20",
    fill: "#ffffff"
  })))), /*#__PURE__*/React.createElement("aside", {
    className: "rrbe__left-container"
  }, showWidgets ? /*#__PURE__*/React.createElement(Widgets, null) : /*#__PURE__*/React.createElement(Settings, null)), /*#__PURE__*/React.createElement("div", {
    className: "rrbe__left-bottom"
  }, /*#__PURE__*/React.createElement(Bottom, null))), /*#__PURE__*/React.createElement(Resizer, {
    setWidth: setWidth
  }), /*#__PURE__*/React.createElement("div", {
    className: "rrbe__right"
  }, /*#__PURE__*/React.createElement(Preview, null))));
}

export default App;