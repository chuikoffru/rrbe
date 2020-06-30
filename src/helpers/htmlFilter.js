const arr = ["isActive", "canDrop", 'draggable="true"'];

export default (html) => {
  return arr.reduce((result, word) => result.replace(word, ""), html);
};
