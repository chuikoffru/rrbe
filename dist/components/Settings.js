import React from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { ItemTypes } from "../helpers/itemTypes";
import GlobalSettings from "./settings/GlobalSettings";
import SectionSettings from "./SectionSettings";
import WidgetSettings from "./WidgetSettings";
import "../scss/settings.scss";
import { useSelector, useDispatch } from "react-redux";
import { switchSettingsTab } from "../store/app/actions";

const Settings = () => {
  const dispatch = useDispatch();
  const settingsTab = useSelector((state) => state.app.settingsTab);

  const renderSettings = () => {
    switch (settingsTab) {
      case ItemTypes.SECTIONS:
        return /*#__PURE__*/ React.createElement(SectionSettings, null);

      case ItemTypes.ELEMENTS:
        return /*#__PURE__*/ React.createElement(WidgetSettings, null);

      case ItemTypes.GLOBAL:
        return /*#__PURE__*/ React.createElement(GlobalSettings, null);

      default:
        break;
    }
  };

  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "settings",
    },
    /*#__PURE__*/ React.createElement(
      ToggleButtonGroup,
      {
        name: "settings",
        value: settingsTab,
        onChange: (value) => dispatch(switchSettingsTab(value)),
      },
      /*#__PURE__*/ React.createElement(
        ToggleButton,
        {
          value: ItemTypes.SECTIONS,
        },
        "\u0421\u0435\u043A\u0446\u0438\u044F"
      ),
      /*#__PURE__*/ React.createElement(
        ToggleButton,
        {
          value: ItemTypes.ELEMENTS,
        },
        "\u0412\u0438\u0434\u0436\u0435\u0442"
      ),
      /*#__PURE__*/ React.createElement(
        ToggleButton,
        {
          value: ItemTypes.GLOBAL,
        },
        "\u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435"
      )
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "settings__container",
      },
      renderSettings()
    )
  );
};

export default Settings;
