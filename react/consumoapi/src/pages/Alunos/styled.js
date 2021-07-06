import styled from 'styled-components';

export const AlunoContainer = styled.div`
  margin-top: 36px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 5px 0;
  }

  // faz que só div que seja seguida de div, pula a primeira
  div + div {
    border-top: 1px solid #eee;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
