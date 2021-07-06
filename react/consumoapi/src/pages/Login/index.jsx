import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/example/actions';

import axios from '../../services/axios';

export default function Login() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      console.log(response.data);
    }
    getData();
  }, []);

  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      Hello{' '}
      <small>
        <Title>Teste</Title>
      </small>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
