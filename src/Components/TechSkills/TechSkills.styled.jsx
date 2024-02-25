import styled from "styled-components";

export const TitleTechSkills = styled.h2`
  margin-bottom: 20px;

  color: white;
  font-size: 24px;
  font-weight: 400;
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
`;

export const ItemTechSkills = styled.li`
  width: 100%;

  background-color: grey;
`;

export const ItemWrapperTechSkills = styled.div``;

export const ItemNameTechSkills = styled.div`
  width: 80px;
  background-color: #f4a460;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
`;

export const ItemLevelTechSkills = styled.div`
  background-color: #cd853f;
  width: 80%;
`;
