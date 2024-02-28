import { Container } from "../Cotainer/Cotainers.styled";
import { Section } from "../Section/Section";
import {
  ItemLevelTechSkills,
  ItemNameWrapperTechSkills,
  ItemNameTextTechSkills,
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
              <ItemNameWrapperTechSkills>
                <ItemNameTextTechSkills>HTML5</ItemNameTextTechSkills>
              </ItemNameWrapperTechSkills>
            </ItemLevelTechSkills>
          </ItemTechSkills>
          <ItemTechSkills>
            <ItemLevelTechSkills>
              <ItemNameWrapperTechSkills>
                <ItemNameTextTechSkills>CSS3</ItemNameTextTechSkills>
              </ItemNameWrapperTechSkills>
            </ItemLevelTechSkills>
          </ItemTechSkills>
          <ItemTechSkills>
            <ItemLevelTechSkills>
              <ItemNameWrapperTechSkills>
                <ItemNameTextTechSkills>JavaScript</ItemNameTextTechSkills>
              </ItemNameWrapperTechSkills>
            </ItemLevelTechSkills>
          </ItemTechSkills>
          <ItemTechSkills>
            <ItemLevelTechSkills>
              <ItemNameWrapperTechSkills>
                <ItemNameTextTechSkills>React</ItemNameTextTechSkills>
              </ItemNameWrapperTechSkills>
            </ItemLevelTechSkills>
          </ItemTechSkills>
          <ItemTechSkills>
            <ItemLevelTechSkills>
              <ItemNameWrapperTechSkills>
                <ItemNameTextTechSkills>Redux</ItemNameTextTechSkills>
              </ItemNameWrapperTechSkills>
            </ItemLevelTechSkills>
          </ItemTechSkills>
          <ItemTechSkills>
            <ItemLevelTechSkills style={{ width: "70%" }}>
              <ItemNameWrapperTechSkills>
                <ItemNameTextTechSkills>Node.js</ItemNameTextTechSkills>
              </ItemNameWrapperTechSkills>
            </ItemLevelTechSkills>
          </ItemTechSkills>
          <ItemTechSkills>
            <ItemLevelTechSkills style={{ width: "70%" }}>
              <ItemNameWrapperTechSkills>
                <ItemNameTextTechSkills>MongoDB</ItemNameTextTechSkills>
              </ItemNameWrapperTechSkills>
            </ItemLevelTechSkills>
          </ItemTechSkills>
          <ItemTechSkills>
            <ItemLevelTechSkills style={{ width: "70%" }}>
              <ItemNameWrapperTechSkills>
                <ItemNameTextTechSkills>Git</ItemNameTextTechSkills>
              </ItemNameWrapperTechSkills>
            </ItemLevelTechSkills>
          </ItemTechSkills>
          <ItemTechSkills>
            <ItemLevelTechSkills style={{ width: "65%" }}>
              <ItemNameWrapperTechSkills>
                <ItemNameTextTechSkills>Figma</ItemNameTextTechSkills>
              </ItemNameWrapperTechSkills>
            </ItemLevelTechSkills>
          </ItemTechSkills>
        </ListTechSkills>
      </Container>
    </Section>
  );
};
