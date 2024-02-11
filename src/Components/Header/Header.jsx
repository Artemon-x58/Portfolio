import { MenuBtn, MenuBurger, MenuContainer, MenuExit } from "./Header.styled";

export const Header = () => {
  return (
    <>
      <MenuContainer>
        <MenuBtn>
          <MenuBurger />
          <MenuExit />
        </MenuBtn>
      </MenuContainer>
    </>
  );
};
