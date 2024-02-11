import styled from "styled-components";

export const MenuContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MenuBtn = styled.a`
  position: relative;
  display: block;
  height: 40px;
  width: 40px;
  border: 3px solid white;
  border-radius: 0;

  transition: border-radius 300ms ease;

  &:hover {
    border-radius: 50%;
  }

  &.is-open {
    .menu__burger {
      opacity: 0;
      transform: translateX(45px);
    }

    .menu__exit {
      opacity: 1;
      transform: translateX(0);
    }
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
`;

// .menu__burger,
// .menu__burger:before,
// .menu__burger:after {
//     display: block;
//     content: '';
//     width: 18px;
//     height: 3px;
//     background-color: white;
//     position: absolute;
// }

// .menu__burger {
//     left: 12px;
//     top: 18px;
//     transform: translateX(0);
//     opacity: 1;

//     transition: opacity 300ms ease, transform 300ms ease;

//     &:before {
//         top: -8px;
//     }

//     &:after {
//         top: 8px;
//     }
// }

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
`;

// .menu__exit:before,
// .menu__exit:after {
//     display: block;
//     content: '';
//     width: 22px;
//     height: 3px;
//     background-color: white;
//     position: absolute;

// }

// .menu__exit {
//     position: absolute;
//     top: 18px;
//     left: 10px;
//     transform: translateX(-45px);
//     opacity: 0;

//     transition: opacity 300ms ease, transform 300ms ease;

//     &:before {
//         transform: rotate(45deg);
//     }

//     &:after {
//         transform: rotate(-45deg);
//     }
// }
