import { colors } from 'src/styles';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const BackImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  pointer-events: none;
  animation: ${rotate} 600s linear infinite;
`;

export const BackImageContainer = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  position: fixed;
  background-color: ${colors.background};
  opacity: 0.1;
`;

export const ImageContainer = styled.div`
  background-color: ${colors.background};
  z-index: 2;
  width: 100%;
  flex-direction: column;
`;
