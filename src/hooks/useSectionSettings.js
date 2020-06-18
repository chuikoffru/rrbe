import { useSelector, useDispatch } from "react-redux";
import { changeSection } from "../redux/sections/actions";

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
    //const countColumns = +params.columns;
    dispatch(changeSection(params));
  };

  return { settings: section.params, setSettings };
};

export default useSectionSettings;
