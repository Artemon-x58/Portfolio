import { Container } from "../Cotainer/Cotainers.styled";
import { Section } from "../Section/Section";
import { TitleHero } from "./HeroSection.styled";

export const HeroSection = () => {
  return (
    <Section>
      <Container>
        <TitleHero>Hi, i&apos;m Artem Melnyk full stack developer</TitleHero>
      </Container>
    </Section>
  );
};
