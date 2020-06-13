import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators } from "redux-undo";
import { Button } from "react-bootstrap";

const UndoRedo = (props) => {
  const dispatch = useDispatch();
  const isUndoable = useSelector((state) => state.sections.past.length === 0);
  const isRedoble = useSelector((state) => state.sections.future.length === 0);

  const undo = () => {
    dispatch(ActionCreators.undo());
  };
  const redo = () => {
    dispatch(ActionCreators.redo());
  };

  return (
    <>
      <Button
        variant="dark"
        size="sm"
        className="mr-2"
        disabled={isUndoable}
        onClick={undo}
      >
        Отменить
      </Button>
      <Button variant="dark" size="sm" disabled={isRedoble} onClick={redo}>
        Вернуть
      </Button>
    </>
  );
};

export default UndoRedo;
