import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;

  /* position: absolute; */
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

export const HeaderTitle = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
`;

export const MenuBtn = styled.a`
  z-index: 100;
  position: fixed;
  position: relative;
  display: block;
  margin-left: auto;
  height: 40px;
  width: 40px;
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
  width: 18px;
  height: 3px;
  background-color: white;
  position: absolute;
  left: 12px;
  top: 18px;
  transform: translateX(0);
  opacity: 1;

  transition: opacity 300ms ease, transform 300ms ease;

  &::before,
  &::after {
    display: block;
    content: "";
    width: 18px;
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
    props.isOpen &&
    `
    opacity: 0;
    transform: translateX(45px);
  `}
`;

export const MenuExit = styled.span`
  position: absolute;
  top: 18px;
  left: 10px;
  transform: translateX(-45px);
  opacity: 0;

  transition: opacity 300ms ease, transform 300ms ease;

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
    props.isOpen &&
    `
    opacity: 1;
    transform: translateX(0);
  `}
`;
