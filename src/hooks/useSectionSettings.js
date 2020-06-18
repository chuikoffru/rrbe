import { useSelector } from "react-redux";

const useSectionSettings = () => {
  const sectionParams = useSelector(
    (state) =>
      state.sections.present.sections[state.sections.present.selectedSection]
  );

  return sectionParams;
};

export default useSectionSettings;
