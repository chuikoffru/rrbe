import React, { useCallback } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeWidget, selectWidget } from "../store/sections/actions";

const DeleteWidget = () => {
  const dispatch = useDispatch();
  const handleRemove = useCallback(() => {
    // Удаляем текущий выбранный виджет
    dispatch(removeWidget()); // Сбрасываем значение выбранных виджетов

    dispatch(selectWidget(null, null, null, null));
  }, [dispatch]);
  return /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    onClick: handleRemove
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0438\u0434\u0436\u0435\u0442");
};

export default DeleteWidget;