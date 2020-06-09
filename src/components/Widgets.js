import React from "react";
import { useDispatch } from "react-redux";

import { Row, Col } from "react-bootstrap";

import { addWidget } from "../redux/sections/actions";

import { ReactComponent as SharePost } from "../icons/share-post.svg";
import { ReactComponent as TextEditor } from "../icons/text-editor.svg";
import { ReactComponent as VideoClip } from "../icons/video-clip.svg";

const Widgets = (props) => {
  const dispatch = useDispatch();

  const addNewText = (e) => {
    const data = {
      widgetName: "Text",
      props: {
        text: "Динамически добавили текст",
      },
    };
    dispatch(addWidget(0, 1, data));
  };

  return (
    <>
      <Row>
        <Col>
          <SharePost width="60" height="60" />
        </Col>
        <Col>
          <TextEditor width="60" height="60" onClick={addNewText} />
        </Col>
        <Col>
          <VideoClip width="60" height="60" />
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </>
  );
};

export default Widgets;
