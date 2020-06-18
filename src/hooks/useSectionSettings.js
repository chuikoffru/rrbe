import { useSelector, useDispatch } from "react-redux";
import {
  changeSection,
  addColumns,
  removeColumns,
} from "../redux/sections/actions";

const useSectionSettings = () => {
  const dispatch = useDispatch();
  // Получаем данные о секции
  const section = useSelector(
    (state) =>
      state.sections.present.sections[state.sections.present.selectedSection]
  );

  // Записываем новые настройки
  const setSettings = (params) => {
    //console.log("params", params);
    const currentCountColumns = section.columns.length;
    const newCountColumns = +params.columns;

    dispatch(changeSection(params));

    // Считаем разницу между текущим количеством колонок и новым
    const diff = newCountColumns - currentCountColumns;

    if (currentCountColumns > newCountColumns) {
      // Если текущее количество больше нового, то удаляем лишние колонки
      dispatch(removeColumns(diff));
    } else {
      // Если текущее количество меньше, то добавляем
      dispatch(addColumns(diff));
    }
  };

  return { settings: section.params, setSettings };
};

export default useSectionSettings;
