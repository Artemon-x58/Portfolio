import styled, { keyframes } from "styled-components";

const slideInAnimation = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;
export const ModalList = styled.ul`
  animation: ${slideInAnimation} 0.7s ease forwards;

  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  gap: 35px;
`;

export const ModalItem = styled.li``;

export const ModalLink = styled.a`
  padding: 10px;
  transition: color 0.25s linear;

  color: #cd853f;

  &:hover {
    color: #ffdead;
  }
`;
