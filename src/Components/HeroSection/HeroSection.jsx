import { Container } from "../Cotainer/Cotainers.styled";
import { Section } from "../Section/Section";
import { HeroImg, TitleHero, WrapperHero } from "./HeroSection.styled";

export const HeroSection = () => {
  return (
    <Section>
      <HeroImg>
        <Container>
          <WrapperHero>
            <TitleHero>
              Hi, i&apos;m
              <br /> Artem Melnyk <br /> full stack developer
            </TitleHero>
          </WrapperHero>
        </Container>
      </HeroImg>
    </Section>
  );
};
