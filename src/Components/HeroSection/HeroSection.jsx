import { Container } from "../Cotainer/Cotainers.styled";
import { Section } from "../Section/Section";
import { TitleHero, WrapperHero } from "./HeroSection.styled";

export const HeroSection = () => {
  return (
    <Section>
      <Container>
        <WrapperHero>
          <TitleHero>
            Hi, i&apos;m
            <br /> Artem Melnyk <br /> full stack developer
          </TitleHero>
        </WrapperHero>
      </Container>
    </Section>
  );
};
