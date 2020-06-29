export const sectionTypes = {
  PAGE_BODY: "page_print_body",
  PAGE_HEADER: "page_print_header",
  PAGE_FOOTER: "page_print_footer",
};

export const sectionTypesList = [
  { name: "Контент", value: sectionTypes.PAGE_BODY },
  { name: "Верхний колонтитул", value: sectionTypes.PAGE_HEADER },
  { name: "Нижний колонтитул", value: sectionTypes.PAGE_FOOTER },
];

export const getListColumns = (len = 12) => {
  let values = [];
  Array(len)
    .fill([])
    .map((_, i) =>
      values.push({
        name: i + 1,
        value: i + 1,
      })
    );
  return values;
};
