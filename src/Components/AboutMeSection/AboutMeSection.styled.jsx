import styled from "styled-components";

export const AboutMeTitle = styled.h2`
  margin-bottom: 20px;

  color: white;
  font-size: 22px;
  font-weight: bold;
  line-height: 1.4;
  text-align: center;

  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 1px;
    background-color: white;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const AboutMeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const AboutMeItem = styled.li``;

export const AboutMeImg = styled.img`
  width: 70px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;
  transition: transform 1s linear;

  &:hover {
    transform: rotateY(360deg);
  }
`;

export const AboutMeSubtitle = styled.h3`
  margin-bottom: 10px;

  color: white;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
`;

export const AboutMeText = styled.p`
  color: white;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
`;
