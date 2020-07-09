import React from "react";
import "./news.scss";

const News = props => {
  console.log("News init"); //const news = await axios.get(`/api/posts/${props.category}`).data;

  const news = [{
    image: "https://picsum.photos/seed/1/300/200",
    title: "Новость номер 1",
    text: "Текст новости почти без форматирования и тэгов! <b>Но они понадобяться.</b>"
  }, {
    image: "https://picsum.photos/seed/2/300/200",
    title: "Новость номер 2",
    text: "Текст новости почти без форматирования и тэгов! <b>Но они понадобяться.</b>"
  }, {
    image: "https://picsum.photos/seed/3/300/200",
    title: "Новость номер 3",
    text: "Текст новости почти без форматирования и тэгов! <b>Но они понадобяться.</b>"
  }];
  return news.map((item, index) => /*#__PURE__*/React.createElement("div", {
    className: "news",
    key: index
  }, /*#__PURE__*/React.createElement("div", {
    className: "news__image"
  }, /*#__PURE__*/React.createElement("img", {
    src: item.image,
    alt: item.title
  })), /*#__PURE__*/React.createElement("div", {
    className: "news__body"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "news__body-title"
  }, item.title), /*#__PURE__*/React.createElement("div", {
    className: "news__body-text"
  }, item.text))));
};

export default News;