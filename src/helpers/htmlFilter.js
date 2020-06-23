const arr = [" isActive", " canDrop"];

export default (html) => {
  let regex = new RegExp("\\b" + arr.join("|") + "\\b", "gi");
  return html.replace(regex, "");
};
