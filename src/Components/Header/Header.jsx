import { useState } from "react";
import {
  MenuBtn,
  MenuBurger,
  MenuContainer,
  MenuExit,
  HeaderTitle,
} from "./Header.styled";
import { Container } from "../Cotainer/Cotainers.styled";
import Modal from "react-modal";
import { ModalItem, ModalList, ModalLink } from "../Modal/Modal.styled";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(!modalIsOpen);
    setIsOpen(!isOpen);
  };

  const customStyles = {
    content: {
      display: "flex",
      position: "fixed",
      justifyContent: "center",
      background: " rgba(0, 0, 0, 0.8)",
      padding: 0,
      inset: "unset",
      border: "none",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  };

  return (
    <Container style={{ dispaly: "relative" }}>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <ModalList>
          <ModalItem>
            <ModalLink>HOME</ModalLink>
          </ModalItem>
          <ModalItem>
            <ModalLink>ABOUT</ModalLink>
          </ModalItem>
          <ModalItem>
            <ModalLink>TECH SKILLS</ModalLink>
          </ModalItem>
          <ModalItem>
            <ModalLink>PROJECTS</ModalLink>
          </ModalItem>
          <ModalItem>
            <ModalLink>CONTACTS</ModalLink>
          </ModalItem>
        </ModalList>
      </Modal>

      <div
        style={{ position: "relative", width: "100%", padding: 0, margin: 0 }}
      >
        <MenuContainer>
          <HeaderTitle>My portfolio</HeaderTitle>
          <MenuBtn onClick={openModal}>
            <MenuBurger isOpen={isOpen} />
            <MenuExit isOpen={isOpen} />
          </MenuBtn>
        </MenuContainer>
      </div>
    </Container>
  );
};
