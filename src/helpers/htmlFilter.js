const arr = [" isActive", " canDrop", 'contenteditable="true"'];

export default (html) => {
  return arr.reduce((result, word) => result.replace(word, ""), html);
};
