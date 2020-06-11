import React from "react";
import { Row } from "react-bootstrap";

import Widget from "./Widget";

import { ReactComponent as SharePost } from "../icons/share-post.svg";
import { ReactComponent as TextEditor } from "../icons/text-editor.svg";
import { ReactComponent as VideoClip } from "../icons/video-clip.svg";

import "./scss/widgets.scss";

const Widgets = (props) => {
  const widgets = [
    { id: 1, name: "Text", icon: <TextEditor /> },
    { id: 2, name: "Image", icon: <SharePost /> },
    { id: 3, name: "Video", icon: <VideoClip /> },
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
