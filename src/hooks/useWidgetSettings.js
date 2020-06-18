import { useSelector } from "react-redux";

const useWidgetSettings = (props) => {
  // Получаем секции
  const sections = useSelector((state) => state.sections.present.sections);

  // Получаем данные выбранного виджета
  const { sectionIndex, columnIndex, rowIndex } = useSelector(
    (state) => state.sections.present.selectedWidget
  );

  // Получаем сами настройки
  const settings = sections[sectionIndex].columns[columnIndex][rowIndex].params;

  return settings;
};

export default useWidgetSettings;
