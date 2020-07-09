import React, { useCallback } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeSection, selectSection, selectWidget } from "../store/sections/actions";

const DeleteSection = () => {
  const dispatch = useDispatch();
  const handleRemove = useCallback(() => {
    // Удаляем текущую выбранную секцию
    dispatch(removeSection()); // Сбрасываем значение выбранной секции

    dispatch(selectSection(null)); // Сбрасываем значение выбранного виджета

    dispatch(selectWidget(null, null, null, null));
  }, [dispatch]);
  return /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    onClick: handleRemove
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0435\u043A\u0446\u0438\u044E");
};

export default DeleteSection;