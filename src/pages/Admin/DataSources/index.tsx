import { useEffect, useState } from 'react';
import { Header, CustomButton, Footer, Container } from '../../../components';
import { getSources } from '../../../services/sources';

import { useNavigate } from 'react-router-dom';
import SideMenu from './../components/sideMenu';
import * as S from './styles';
import { sourceResponse } from '../../../types';
import CircleIcon from '@mui/icons-material/Circle';
import { useRecoilValue } from 'recoil';
import { currentUserState } from '../../../state/user';

type sourceObject = {
  id: number;
  channel: string;
};

export default function DataSources() {
  const navigate = useNavigate();
  const [sources, setSources] = useState<sourceResponse[] | null>(null);
  const [selectedSource, setSelectedSource] = useState<sourceObject | null>(null);

  const currentUser = useRecoilValue(currentUserState);

  useEffect(() => {
    if (!currentUser) navigate('/sign-in');
  }, []);

  const getAllSources = async () => {
    const response = await getSources();

    if (response) {
      setSources(response);
    }
  };

  useEffect(() => {
    getAllSources();
  }, []);

  return (
    <>
      <Header
        rightElement={
          <div style={{ display: 'flex', gap: '16px' }}>
            <CustomButton onClick={() => navigate('/sign-up')} variant="text" text="Sign Up" />
            <CustomButton onClick={() => navigate('/sign-in')} variant="outlined" text="Sign In" />
          </div>
        }
      />

      <S.Container>
        <SideMenu />
        <S.RightContainer style={{ display: 'block', width: '100%' }}>
          <h1> DataSources</h1>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12 }}>
            <Container>
              <div style={{ padding: 32, display: 'grid', gap: 12 }}>
                {sources?.map((source) => (
                  <Container key={source?.id} dark={selectedSource?.id === source?.id}>
                    <div
                      style={{ padding: 24, display: 'grid', gap: 10, cursor: 'pointer' }}
                      onClick={() => {
                        setSelectedSource({ id: source?.id, channel: source?.channel });
                      }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h2>{source?.channel}</h2>
                        <b style={{ color: '#B9CA83' }}>Ativo</b>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', gap: 5 }}>
                          <span>Status: </span>
                          <CircleIcon fontSize="small" color="success" />
                          <span>OK</span>
                        </div>
                        <span>Última alteração: {new Date().toLocaleDateString('pt-br')}</span>
                      </div>
                    </div>
                  </Container>
                ))}
              </div>
            </Container>
            <Container>
              <div style={{ padding: 32, display: 'grid', gap: 12 }}>
                <div>
                  <b>Nome da conexão: </b>
                  <span> {selectedSource?.channel ?? 'Selecione um source'}</span>
                </div>
                <div>
                  <b>Tipo de autenticação: </b>
                  <span> Chave de autenticação</span>
                </div>
              </div>
            </Container>
          </div>
        </S.RightContainer>
        <Footer />
      </S.Container>
    </>
  );
}
