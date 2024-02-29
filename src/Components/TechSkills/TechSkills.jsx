import { useEffect, useState } from "react";
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
import { useInView } from "react-intersection-observer";

export const TechSkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Устанавливаем isVisible в true, когда элемент виден во вьюпорте
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <Section>
      <Container>
        <TitleTechSkills>Tech skills</TitleTechSkills>
        <ListTechSkills $isVisible={isVisible} ref={ref}>
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
            <ItemLevelTechSkills>
              <ItemNameWrapperTechSkills>
                <ItemNameTextTechSkills>Node.js</ItemNameTextTechSkills>
              </ItemNameWrapperTechSkills>
            </ItemLevelTechSkills>
          </ItemTechSkills>
          <ItemTechSkills>
            <ItemLevelTechSkills>
              <ItemNameWrapperTechSkills>
                <ItemNameTextTechSkills>MongoDB</ItemNameTextTechSkills>
              </ItemNameWrapperTechSkills>
            </ItemLevelTechSkills>
          </ItemTechSkills>
          <ItemTechSkills>
            <ItemLevelTechSkills>
              <ItemNameWrapperTechSkills>
                <ItemNameTextTechSkills>Git</ItemNameTextTechSkills>
              </ItemNameWrapperTechSkills>
            </ItemLevelTechSkills>
          </ItemTechSkills>
          <ItemTechSkills>
            <ItemLevelTechSkills>
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
