import { useSelector, useDispatch } from "react-redux";
import { changeWidget } from "../redux/sections/actions";

const useWidgetSettings = () => {
  const dispatch = useDispatch();
  // Получаем секции
  const sections = useSelector((state) => state.sections.present.sections);

  // Получаем данные выбранного виджета
  const { sectionIndex, columnIndex, rowIndex } = useSelector(
    (state) => state.sections.present.selectedWidget
  );

  // Получаем сами настройки
  const settings = sections[sectionIndex].columns[columnIndex][rowIndex].params;

  // Записываем новые настройки
  const setSettings = (params) => {
    dispatch(changeWidget(params));
  };

  return { settings, setSettings };
};

export default useWidgetSettings;
