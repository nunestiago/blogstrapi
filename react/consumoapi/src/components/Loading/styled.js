import styled, { keyframes } from 'styled-components';

const flickerAnimation = keyframes`
  0%   { opacity:1; }
  50%  { opacity:0.3; }
  100% { opacity:1; }
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 30px;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.8);
  }
  span {
    z-index: 2;
    animation-name: ${flickerAnimation};
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
`;
