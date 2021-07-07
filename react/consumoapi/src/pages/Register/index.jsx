import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 100) {
      formErrors = true;
      toast.error('Nome entre 3 e 100 caracteres');
    }
    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }
    if (password.length < 3 || password.length > 50) {
      formErrors = true;
      toast.error('Senha entre 6 e 50 caracteres');
    }
    if (formErrors) return;
    try {
      await axios.post('/users/', { nome, password, email });
      toast.success('Cadastro conluído');
      history.push('/login');
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      errors.map((error) => toast.error(error));
    }
  }

  return (
    <Container>
      <h1>Registro</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            name="nome"
            value={nome}
            placeholder="Nome"
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            name="email"
            value={email}
            placeholder="E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button type="submit">Criar conta</button>
      </Form>
    </Container>
  );
}
