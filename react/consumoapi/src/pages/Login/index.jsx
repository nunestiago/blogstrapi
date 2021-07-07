/* eslint-disable no-useless-return */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';

import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import { Form } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/auth/actions';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }
    if (password.length < 3 || password.length > 50) {
      formErrors = true;
      toast.error('Senha inválida');
    }
    if (formErrors) return;
    dispatch(actions.loginRequest({ email, password, prevPath }));
  };
  return (
    <Container>
      Login
      <Form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}
