import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Modal, Button, FormControl, Spinner } from "react-bootstrap";
import { importStructure, selectSection } from "../../store/sections/actions";
import { ReactComponent as ImportIcon } from "../../icons/import.svg";

const ImportTemplate = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = useCallback((e) => setName(e.target.value), []);
  const loadTemplate = useCallback(async () => {
    // Включаем спиннер
    setLoading(true); // Загружаем данные

    const req = await axios("https://regagro.herokuapp.com/templates?_limit=1&name=" + name); // Выключаем спиннер

    setLoading(false); //console.log("req", req.data[0]);
    // Записываем данные в стор

    dispatch(importStructure(req.data[0].store)); // Делаем первую секцию активной

    dispatch(selectSection(0)); // Скрываем модальное окно

    setShow(false);
  }, [dispatch, name]);
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(
      Button,
      {
        variant: "primary",
        className: "mr-2",
        size: "sm",
        onClick: () => setShow(true),
      },
      /*#__PURE__*/ React.createElement(ImportIcon, {
        title: "\u0418\u043C\u043F\u043E\u0440\u0442",
        width: "20",
        height: "20",
        fill: "#ffffff",
      })
    ),
    /*#__PURE__*/ React.createElement(
      Modal,
      {
        size: "lg",
        show: show,
        onHide: () => setShow(false),
      },
      /*#__PURE__*/ React.createElement(
        Modal.Body,
        null,
        /*#__PURE__*/ React.createElement(FormControl, {
          value: name,
          onChange: handleChange,
          placeholder:
            "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430",
        })
      ),
      /*#__PURE__*/ React.createElement(
        Modal.Footer,
        null,
        /*#__PURE__*/ React.createElement(
          Button,
          {
            variant: "secondary",
            onClick: () => setShow(false),
          },
          "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
        ),
        /*#__PURE__*/ React.createElement(
          Button,
          {
            variant: "primary",
            disabled: !name,
            onClick: loadTemplate,
          },
          loading
            ? /*#__PURE__*/ React.createElement(Spinner, {
                as: "span",
                animation: "grow",
                size: "sm",
                role: "status",
                "aria-hidden": "true",
              })
            : "Импорт"
        )
      )
    )
  );
};

export default ImportTemplate;
