import React from 'react';

import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Aluno() {
  return (
    <Container>
      Hello{' '}
      <small>
        <Title>Teste</Title>
      </small>
    </Container>
  );
}