import React from 'react';
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaCashRegister,
  FaRedhat,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const botaoClicado = useSelector(
    (state) => state.exampleReducer.botaoClicado
  );
  return (
    <>
      <Nav>
        <Link to="/">
          <FaHome size={24} />
        </Link>
        <Link to="/login">
          <FaUserAlt size={24} />
        </Link>{' '}
        <Link to="/cart">
          <FaCashRegister size={24} />
        </Link>{' '}
        <Link to="/signout">
          <FaSignInAlt size={24} />
        </Link>
        <Link to="/cart">
          <FaRedhat size={24} />
        </Link>{' '}
        {botaoClicado ? 'Clicado' : 'não clicado'}
      </Nav>
    </>
  );
}
