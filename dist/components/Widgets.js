import React from "react";
import { Row } from "react-bootstrap";
import Widget from "./Widget";
import { ItemTypes } from "../helpers/itemTypes";
import { ReactComponent as SharePostIcon } from "../icons/widgets/share-post.svg";
import { ReactComponent as TextEditorIcon } from "../icons/widgets/text-editor.svg";
/* import { ReactComponent as VideoClipIcon } from "icons/widgets/video-clip.svg";
import { ReactComponent as NewsIcon } from "icons/widgets/news.svg";
import { ReactComponent as LinkIcon } from "icons/widgets/hyperlink.svg"; */

import { ReactComponent as SectionIcon } from "../icons/widgets/columns.svg";
import { ReactComponent as DividerIcon } from "../icons/widgets/arrow.svg";
import { ReactComponent as TableIcon } from "../icons/widgets/scheme.svg";
import "../scss/widgets.scss";

const Widgets = props => {
  const widgets = [{
    id: 1,
    name: "Text",
    type: ItemTypes.ELEMENTS,
    icon: /*#__PURE__*/React.createElement(TextEditorIcon, null),
    params: {
      text: "<p>Текст</p>",
      styles: {},
      applyStylesToWidget: true
    }
  }, {
    id: 2,
    name: "Image",
    type: ItemTypes.ELEMENTS,
    icon: /*#__PURE__*/React.createElement(SharePostIcon, null),
    params: {
      src: "./favicon.ico",
      styles: {},
      applyStylesToWidget: true
    }
  },
  /* {
    id: 3,
    name: "Video",
    type: ItemTypes.ELEMENTS,
    icon: <VideoClipIcon />,
    params: {
      url: "https://www.youtube.com/embed/Ti2Q4sQkNdU",
      styles: {},
      applyStylesToWidget: true,
    },
  }, */

  /* {
    id: 4,
    name: "News",
    type: ItemTypes.COMPONENTS,
    icon: <NewsIcon />,
    params: {
      category: "",
      styles: {},
      applyStylesToWidget: true,
    },
  }, */
  {
    id: 5,
    name: "Section",
    type: ItemTypes.SECTIONS,
    icon: /*#__PURE__*/React.createElement(SectionIcon, null),
    params: {
      columns: 1,
      styles: {},
      applyStylesToWidget: true
    }
  },
  /* {
    id: 6,
    name: "Link",
    type: ItemTypes.ELEMENTS,
    icon: <LinkIcon />,
    params: {
      text: "Ссылка",
      target: "_self",
      url: "#",
      styles: {},
      applyStylesToWidget: true,
    },
  }, */
  {
    id: 7,
    name: "Divider",
    type: ItemTypes.ELEMENTS,
    icon: /*#__PURE__*/React.createElement(DividerIcon, null),
    params: {
      styles: {},
      applyStylesToWidget: true
    }
  }, {
    id: 8,
    name: "Table",
    type: ItemTypes.ELEMENTS,
    icon: /*#__PURE__*/React.createElement(TableIcon, null),
    params: {
      styles: {},
      applyStylesToWidget: true,
      dataFrom: "custom",
      api: "https://regagro.herokuapp.com/animals"
    }
  }];
  return /*#__PURE__*/React.createElement(Row, {
    className: "widgets"
  }, widgets.map((widget, index) => /*#__PURE__*/React.createElement(Widget, {
    key: index,
    widget: widget
  })));
};

export default Widgets;