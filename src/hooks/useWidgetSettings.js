import { useSelector, useDispatch } from "react-redux";
import { changeWidget } from "../redux/sections/actions";

const useWidgetSettings = () => {
  const dispatch = useDispatch();
  // Получаем секции
  const sections = useSelector(({ sections }) => sections.present.sections);

  // Получаем позицию выбранного виджета в массиве
  const { sectionIndex, columnIndex, rowIndex } = useSelector(
    ({ sections }) => sections.present.selectedWidget
  );

  // Получаем данные виджета
  const widget = sections[sectionIndex].columns[columnIndex][rowIndex];

  // Получаем сами настройки если виджет выбран
  const settings = widget ? widget.params : {};

  // Записываем новые настройки
  const setSettings = (params) => {
    dispatch(changeWidget(params));
  };

  return { settings, setSettings };
};

export default useWidgetSettings;
