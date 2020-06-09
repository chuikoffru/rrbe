import React from "react";
import { useDispatch } from "react-redux";

import { Row, Col } from "react-bootstrap";

import { addText } from "../redux/actions";

import { ReactComponent as SharePost } from "../icons/share-post.svg";
import { ReactComponent as TextEditor } from "../icons/text-editor.svg";
import { ReactComponent as VideoClip } from "../icons/video-clip.svg";

const Widgets = (props) => {
  const dispatch = useDispatch();

  const addNewText = (e) => {
    dispatch(addText(0, 1));
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
