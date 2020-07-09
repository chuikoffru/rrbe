import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators } from "redux-undo";
import { Button } from "react-bootstrap";
import { ReactComponent as UndoIcon } from "../../icons/undo.svg";
import { ReactComponent as SendIcon } from "../../icons/send.svg";

const UndoRedo = props => {
  const dispatch = useDispatch();
  const isUndoable = useSelector(state => state.sections.past.length === 0);
  const isRedoble = useSelector(state => state.sections.future.length === 0);

  const undo = () => {
    dispatch(ActionCreators.undo());
  };

  const redo = () => {
    dispatch(ActionCreators.redo());
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    size: "sm",
    className: "mr-2",
    disabled: isUndoable,
    onClick: undo
  }, /*#__PURE__*/React.createElement(UndoIcon, {
    title: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
    width: "20",
    height: "20"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    size: "sm",
    className: "mr-2",
    disabled: isRedoble,
    onClick: redo
  }, /*#__PURE__*/React.createElement(SendIcon, {
    title: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C",
    width: "20",
    height: "20"
  })));
};

export default UndoRedo;