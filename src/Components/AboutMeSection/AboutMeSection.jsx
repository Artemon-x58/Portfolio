import {
  AboutMeImg,
  AboutMeItem,
  AboutMeList,
  AboutMeSubtitle,
  AboutMeText,
  AboutMeTitle,
} from "./AboutMeSection.styled";
import { Section } from "../Section/Section";
import me from "../../img/me.png";
import knowlege from "../../img/knowlege.png";
import education from "../../img/education.png";
import { Container } from "../Cotainer/Cotainers.styled";

export const AboutMeSection = () => {
  return (
    <Section>
      <Container>
        <AboutMeTitle>About me</AboutMeTitle>
        <AboutMeList>
          <AboutMeItem>
            <AboutMeSubtitle>A little about yourself</AboutMeSubtitle>
            <AboutMeImg src={me} />
            <AboutMeText>
              I&apos;m 26 years old and I&apos;m an aspiring frontend developer
              who is eager to embark on a journey of continuous learning and
              growth. Currently, I have had the privilege of working on three
              collaborative projects with my team, where I have taken on the
              role of team leader. My experience includes hands-on work with
              JavaScript, React, and Redux, and I look forward to further
              developing my skills and tackling new challenges in the field.
            </AboutMeText>
          </AboutMeItem>
          <AboutMeItem>
            <AboutMeSubtitle>Knowledge and skills</AboutMeSubtitle>
            <AboutMeImg src={knowlege} />
            <AboutMeText>
              My skills include using React and Redux libraries to create
              dynamic user interfaces and manage application state. I am also
              proficient in developing server side applications using Node.js
              and MongoDB databases using the Mongoose library. I am also
              experienced in layout of responsive and cross-browser websites,
              while ensuring that content is optimally displayed on a variety of
              devices, including tablets and mobile devices.
            </AboutMeText>
          </AboutMeItem>
          <AboutMeItem>
            <AboutMeSubtitle>Education</AboutMeSubtitle>
            <AboutMeImg src={education} />
            <AboutMeText>
              Online courses GoIT, video courses, books, documentation, forums,
              articles.
            </AboutMeText>
          </AboutMeItem>
        </AboutMeList>
      </Container>
    </Section>
  );
};
