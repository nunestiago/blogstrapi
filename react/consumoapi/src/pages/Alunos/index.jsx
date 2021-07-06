import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture } from './styled';
import axios from '../../services/axios';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  useEffect(() => {
    async function getData() {
      const { data } = await axios.get('/alunos');
      setAlunos(data);
    }

    getData();
    return () => {
      getData();
    };
  }, []);
  return (
    <Container>
      Alunos{' '}
      <AlunoContainer>
        {alunos.map((aluno) => (
          // TODO corrigir endereço no back que vem sem o http://
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', '') ? (
                <>
                  <img src={`http://${aluno.Fotos[0].url}`} alt="" />
                </>
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16} />
            </Link>
            <Link to={`/aluno/${aluno.id}/delete`}>
              {' '}
              {/* TODO pode passar função */}
              <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
