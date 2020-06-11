import React from "react";
import { Row } from "react-bootstrap";

import Widget from "./Widget";

import { ReactComponent as SharePost } from "../icons/share-post.svg";
import { ReactComponent as TextEditor } from "../icons/text-editor.svg";
import { ReactComponent as VideoClip } from "../icons/video-clip.svg";
import { ReactComponent as News } from "../icons/news.svg";

import "./scss/widgets.scss";

const Widgets = (props) => {
  const widgets = [
    { id: 1, name: "Text", type: "element", icon: <TextEditor /> },
    { id: 2, name: "Image", type: "element", icon: <SharePost /> },
    { id: 3, name: "Video", type: "element", icon: <VideoClip /> },
    { id: 4, name: "News", type: "component", icon: <News /> },
  ];

  return (
    <Row className="widgets">
      {widgets.map((widget, index) => (
        <Widget
          key={index}
          widget={widget}
          name={widget.name}
          type={widget.type}
        />
      ))}
    </Row>
  );
};

export default Widgets;
