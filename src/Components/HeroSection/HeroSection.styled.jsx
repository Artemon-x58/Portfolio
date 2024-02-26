import styled from "styled-components";

import heroImg from "../../img/hero.jpg";

export const HeroImg = styled.div`
  height: 100vh;
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const WrapperHero = styled.div`
  border: 1px solid #cd853f;
  border-radius: 20px;
  padding: 20px 0 20px;
`;

export const TitleHero = styled.h1`
  color: white;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  text-transform: uppercase;
  text-align: center;
`;
