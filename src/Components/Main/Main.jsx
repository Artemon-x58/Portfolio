import { AboutMeSection } from "../AboutMeSection/AboutMeSection";
import { MainStyled } from "./Main.styled";
import { HeroSection } from "../HeroSection/HeroSection";

export const Main = () => {
  return (
    <MainStyled>
      <HeroSection />
      <AboutMeSection />
    </MainStyled>
  );
};
