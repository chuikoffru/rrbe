import React from "react";
import { Row } from "react-bootstrap";

import Widget from "./Widget";
import { ItemTypes } from "../helpers/itemTypes";

import { ReactComponent as SharePostIcon } from "../icons/share-post.svg";
import { ReactComponent as TextEditorIcon } from "../icons/text-editor.svg";
import { ReactComponent as VideoClipIcon } from "../icons/video-clip.svg";
import { ReactComponent as NewsIcon } from "../icons/news.svg";
import { ReactComponent as SectionIcon } from "../icons/columns.svg";

import "./scss/widgets.scss";

const Widgets = (props) => {
  const widgets = [
    {
      id: 1,
      name: "Text",
      type: ItemTypes.ELEMENTS,
      icon: <TextEditorIcon />,
      params: {
        text: "Привет",
      },
    },
    {
      id: 2,
      name: "Image",
      type: ItemTypes.ELEMENTS,
      icon: <SharePostIcon />,
      params: {
        src: "./favicon.ico",
      },
    },
    {
      id: 3,
      name: "Video",
      type: ItemTypes.ELEMENTS,
      icon: <VideoClipIcon />,
      params: {
        url: "https://www.youtube.com/embed/Ti2Q4sQkNdU",
      },
    },
    {
      id: 4,
      name: "News",
      type: ItemTypes.COMPONENTS,
      icon: <NewsIcon />,
      params: {},
    },
    {
      id: 5,
      name: "Section",
      type: ItemTypes.COMPONENTS,
      icon: <SectionIcon />,
      params: {
        columns: 2,
        styles: {},
      },
    },
  ];

  return (
    <Row className="widgets">
      {widgets.map((widget, index) => (
        <Widget key={index} widget={widget} />
      ))}
    </Row>
  );
};

export default Widgets;
