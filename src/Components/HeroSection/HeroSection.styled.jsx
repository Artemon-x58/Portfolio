import styled from "styled-components";

import heroImg from "../../img/hero2.jpg";

export const HeroImg = styled.div`
  height: 100vh;
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;

  align-items: center;
`;

export const WrapperHero = styled.div`
  border: 1px solid #cd853f;
  border-radius: 20px;
  padding: 20px 20px 20px 20px;
`;

export const TitleHero = styled.h1`
  color: white;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.8;
`;
