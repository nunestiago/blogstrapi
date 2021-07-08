import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    toast.success('Sucesso!');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    history.push(payload.prevPath);
  } catch (error) {
    toast.error('Erro');
    toast.error('Usuário ou senha inválidos');
    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function* registerRequest({ payload }) {
  const { idStored, nome, email, password } = payload;
  try {
    if (idStored) {
      yield call(axios.put, '/users', {
        nome,
        email,
        password: password || undefined,
      });
      toast.success('Dados editados com sucesso');
      yield put(actions.registerSuccess({ nome, email, password }));
    }
  } catch (err) {
    const errors = get(err, 'response.data.error', []);
    const status = get(err, 'response.status', []);
    if (status === 400) {
      console.log('TODO auth saga');
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
    }

    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
