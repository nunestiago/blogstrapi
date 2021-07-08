import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../components/Loading';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Register() {
  const dispatch = useDispatch();
  const idStored = useSelector((state) => state.auth.user.id);
  const nomeStored = useSelector((state) => state.auth.user.nome);
  const emailStored = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.user.isLoading);

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!idStored) return;
    setNome(nomeStored);
    setEmail(emailStored);
  }, [idStored, nomeStored, emailStored]);

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

    if (!idStored && (password.length < 3 || password.length > 50)) {
      formErrors = true;
      toast.error('Senha entre 6 e 50 caracteres');
    }
    if (formErrors) return;

    dispatch(actions.registerRequest({ nome, email, password, idStored }));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{idStored ? 'Editar dados' : 'Registro'}</h1>
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
        <button type="submit">{idStored ? 'Salvar' : 'Criar Conta'}</button>
      </Form>
    </Container>
  );
}
