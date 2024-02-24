import { useState } from "react";
import {
  MenuBtn,
  MenuBurger,
  MenuContainer,
  MenuExit,
  HeaderTitle,
} from "./Header.styled";
import { Container } from "../Cotainer/Cotainers.styled";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <MenuContainer>
        <HeaderTitle>My portfolio</HeaderTitle>
        <MenuBtn onClick={handleIsOpen}>
          <MenuBurger isOpen={isOpen} />
          <MenuExit isOpen={isOpen} />
        </MenuBtn>
      </MenuContainer>
    </Container>
  );
};
