import React from "react";
import { Row } from "react-bootstrap";

import Widget from "./Widget";
import { ItemTypes } from "../helpers/itemTypes";

import { ReactComponent as SharePost } from "../icons/share-post.svg";
import { ReactComponent as TextEditor } from "../icons/text-editor.svg";
import { ReactComponent as VideoClip } from "../icons/video-clip.svg";
import { ReactComponent as News } from "../icons/news.svg";

import "./scss/widgets.scss";

const Widgets = (props) => {
  const widgets = [
    {
      id: 1,
      name: "Text",
      type: ItemTypes.ELEMENTS,
      icon: <TextEditor />,
      params: {
        text: "Привет",
      },
    },
    {
      id: 2,
      name: "Image",
      type: ItemTypes.ELEMENTS,
      icon: <SharePost />,
      params: {
        src: "./favicon.ico",
      },
    },
    {
      id: 3,
      name: "Video",
      type: ItemTypes.ELEMENTS,
      icon: <VideoClip />,
      params: {
        url: "https://www.youtube.com/embed/Ti2Q4sQkNdU",
      },
    },
    {
      id: 4,
      name: "News",
      type: ItemTypes.COMPONENTS,
      icon: <News />,
      params: {},
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
