import { Container } from "../Cotainer/Cotainers.styled";
import { Section } from "../Section/Section";
import {
  ItemLevelTechSkills,
  ItemNameTechSkills,
  ItemTechSkills,
  ListTechSkills,
  TitleTechSkills,
} from "./TechSkills.styled";

export const TechSkillsSection = () => {
  return (
    <Section>
      <Container>
        <TitleTechSkills>Tech skills</TitleTechSkills>
        <ListTechSkills>
          <ItemTechSkills>
            <ItemLevelTechSkills>
              <ItemNameTechSkills>HTML5</ItemNameTechSkills>
            </ItemLevelTechSkills>
          </ItemTechSkills>
          <ItemTechSkills>
            <ItemLevelTechSkills>
              <ItemNameTechSkills>CSS3</ItemNameTechSkills>
            </ItemLevelTechSkills>
          </ItemTechSkills>
          <ItemTechSkills>
            <ItemLevelTechSkills>
              <ItemNameTechSkills>JavaScript</ItemNameTechSkills>
            </ItemLevelTechSkills>
          </ItemTechSkills>
          <ItemTechSkills>
            <ItemLevelTechSkills>
              <ItemNameTechSkills>React</ItemNameTechSkills>
            </ItemLevelTechSkills>
          </ItemTechSkills>
          <ItemTechSkills>
            <ItemLevelTechSkills>
              <ItemNameTechSkills>Redux</ItemNameTechSkills>
            </ItemLevelTechSkills>
          </ItemTechSkills>
          <ItemTechSkills>
            <ItemLevelTechSkills style={{ width: "70%" }}>
              <ItemNameTechSkills>Node.js</ItemNameTechSkills>
            </ItemLevelTechSkills>
          </ItemTechSkills>
          <ItemTechSkills>
            <ItemLevelTechSkills style={{ width: "70%" }}>
              <ItemNameTechSkills>MongoDB</ItemNameTechSkills>
            </ItemLevelTechSkills>
          </ItemTechSkills>
          <ItemTechSkills>
            <ItemLevelTechSkills style={{ width: "70%" }}>
              <ItemNameTechSkills>Git</ItemNameTechSkills>
            </ItemLevelTechSkills>
          </ItemTechSkills>
          <ItemTechSkills>
            <ItemLevelTechSkills style={{ width: "65%" }}>
              <ItemNameTechSkills>Figma</ItemNameTechSkills>
            </ItemLevelTechSkills>
          </ItemTechSkills>
        </ListTechSkills>
      </Container>
    </Section>
  );
};
