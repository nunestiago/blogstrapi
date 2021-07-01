import React, { useEffect } from 'react';

import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';

import axios from '../../services/axios';

export default function Login() {
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      console.log(response.data);
    }
    getData();
  }, []);
  return (
    <Container>
      Hello{' '}
      <small>
        <Title>Teste</Title>Oie
      </small>
    </Container>
  );
}
