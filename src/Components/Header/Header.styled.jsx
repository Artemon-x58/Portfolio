import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
`;

export const HeaderTitle = styled.p`
  color: white;
  display: block;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
`;

export const MenuBtn = styled.a`
  z-index: 100;
  /* position: fixed; */
  position: relative;
  display: block;
  /* margin-left: auto; */
  height: 32px;
  width: 32px;
  border: 3px solid white;
  border-radius: 0;

  transition: border-radius 300ms ease;

  &:hover {
    border-radius: 50%;
  }
`;

export const MenuBurger = styled.span`
  display: block;
  content: "";
  width: 20px;
  height: 3px;
  background-color: white;
  position: absolute;
  left: 7px;
  top: 15px;
  transform: translateX(0);
  opacity: 1;

  transition: opacity 500ms ease, transform 500ms ease;

  &::before,
  &::after {
    display: block;
    content: "";
    width: 20px;
    height: 3px;
    background-color: white;
    position: absolute;
  }

  &::before {
    top: -8px;
  }
  &::after {
    top: 8px;
  }

  ${(props) =>
    props.isopen &&
    `
    opacity: 0;
    transform: translateX(45px);
  `}
`;

export const MenuExit = styled.span`
  position: absolute;
  top: 14.5px;
  left: 5px;
  transform: translateX(-45px);
  opacity: 0;

  transition: opacity 500ms ease, transform 500ms ease;

  &::before {
    display: block;
    content: "";
    width: 22px;
    height: 3px;
    background-color: white;
    position: absolute;

    transform: rotate(45deg);
  }

  &::after {
    display: block;
    content: "";
    width: 22px;
    height: 3px;
    background-color: white;
    position: absolute;
    transform: rotate(-45deg);
  }

  ${(props) =>
    props.isopen &&
    `
    opacity: 1;
    transform: translateX(0);
  `}
`;
