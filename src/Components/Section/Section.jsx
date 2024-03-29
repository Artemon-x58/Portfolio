import { SectionStyled } from "./Section.styled";
import PropTypes from "prop-types";

export const Section = ({ children }) => {
  return <SectionStyled>{children}</SectionStyled>;
};

Section.propTypes = {
  children: PropTypes.node, // Определение пропса children как любого узла (например, текст, компоненты, массив компонентов)
};
