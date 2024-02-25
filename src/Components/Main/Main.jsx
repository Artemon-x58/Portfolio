import { AboutMeSection } from "../AboutMeSection/AboutMeSection";
import { MainStyled } from "./Main.styled";
import { HeroSection } from "../HeroSection/HeroSection";
import { TechSkillsSection } from "../TechSkills/TechSkills";

export const Main = () => {
  return (
    <MainStyled>
      <HeroSection />
      <AboutMeSection />
      <TechSkillsSection />
    </MainStyled>
  );
};
