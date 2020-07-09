import beautify from "js-beautify/js/lib/beautify-html";
const arr = ["isActive", "canDrop", 'draggable="true"'];
export default (() => {
  var _document$querySelect;

  let html = ((_document$querySelect = document.querySelector(".rrbe__preview")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.innerHTML) || "";
  html = beautify.html_beautify(html);
  return arr.reduce((result, word) => result.replace(word, ""), html);
});