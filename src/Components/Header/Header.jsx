import { useState } from "react";
import { MenuBtn, MenuBurger, MenuContainer, MenuExit } from "./Header.styled";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuContainer>
        <MenuBtn onClick={handleIsOpen}>
          <MenuBurger isOpen={isOpen} />
          <MenuExit isOpen={isOpen} />
        </MenuBtn>
      </MenuContainer>
    </>
  );
};
