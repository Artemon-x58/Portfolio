import styled from "styled-components";

export const TitleTechSkills = styled.h2`
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

export const ListTechSkills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0.5)};
  transition: opacity 1s ease;
`;

export const ItemTechSkills = styled.li`
  width: 100%;
  height: 25px;

  background-color: grey;
`;

export const ItemWrapperTechSkills = styled.div``;

export const ItemNameWrapperTechSkills = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 85px;
  height: 100%;
  background-color: #f4a460;
`;

export const ItemNameTextTechSkills = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
`;

export const ItemLevelTechSkills = styled.div`
  background-color: #cd853f;
  width: 80%;
  height: 100%;
`;
