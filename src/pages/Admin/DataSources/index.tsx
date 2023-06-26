import { useEffect, useState } from 'react';
import { Header, CustomButton, Footer, Container } from '../../../components';
import { createSource, deleteSource, getSources, updateSource } from '../../../services/sources';

import { useNavigate } from 'react-router-dom';
import SideMenu from './../components/sideMenu';
import * as S from './styles';
import { sourceResponse } from '../../../types';
import CircleIcon from '@mui/icons-material/Circle';
import { useRecoilValue } from 'recoil';
import { currentUserState } from '../../../state/user';
import { useAtom } from 'jotai';
import { currentWidgetAtom } from '../atom';
import { getWidgetSources } from '../../../services/widgets';
import { Typography } from '@mui/material';
import { PALETTE } from '../../../config/palette';

type sourceObject = {
  id: number;
  channel: string;
};

export default function DataSources() {
  const navigate = useNavigate();
  const [sources, setSources] = useState<sourceResponse[] | null>(null);
  const [selectedSource, setSelectedSource] = useState<sourceObject | null>(null);
  const [createSourceName, setCreateSourceName] = useState<string>();
  const [updateSourceName, setUpdateSourceName] = useState<string>();
  const [responseStatus, setResponseStatus] = useState<{
    action: string;
    name: string;
  }>();

  const [currentWidget] = useAtom(currentWidgetAtom);

  const currentUser = useRecoilValue(currentUserState);

  useEffect(() => {
    if (!currentUser) navigate('/sign-in');
  }, []);

  const getSourcesOfWidget = async () => {
    const response = await getWidgetSources(currentWidget.id);

    if (response) {
      setSources(response);
    }
  };

  const handleUpdateSource = async (name: string) => {
    if (!currentUser || !selectedSource) return;
    const response = await updateSource(selectedSource.id, {
      widgetId: currentWidget.id,
      channel: name,
    });
    // console.log(response);

    if (response) {
      getSourcesOfWidget();
      console.log(' Source atualizado com sucesso', response);
      setResponseStatus({ action: 'update', name });
    }
    setUpdateSourceName('');
  };

  const handleCreateSource = async (name: string) => {
    if (!currentUser) return;
    const response = await createSource({ widgetId: currentWidget.id, channel: name });
    // console.log(response);

    if (response) {
      getSourcesOfWidget();
      console.log(' Source criado com sucesso', response);
      setResponseStatus({ action: 'create', name });
    }
    setCreateSourceName('');
  };

  const handleDeleteSource = async () => {
    if (!selectedSource) return;

    const response = await deleteSource(selectedSource.id);
    if (response) {
      getSourcesOfWidget();
      setSelectedSource(null);
    }
  };

  useEffect(() => {
    getSourcesOfWidget();
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
            <S.ActionContainer>
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

                  {selectedSource && (
                    <>
                      <Typography variant="h5" fontWeight={700}>
                        New source channel:
                      </Typography>
                      <S.InputText
                        disableUnderline={true}
                        value={updateSourceName}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          setUpdateSourceName(event.target.value);
                        }}
                      />
                      <S.SourceButton
                        onClick={() => {
                          updateSourceName
                            ? handleUpdateSource(updateSourceName)
                            : console.log('Nome não pode ser vazio');
                        }}>
                        <b>Update</b>
                      </S.SourceButton>
                      <S.SourceButton onClick={handleDeleteSource}>
                        <b>Delete source</b>
                      </S.SourceButton>
                    </>
                  )}
                </div>
              </Container>
              <S.CreateContainer>
                <Typography variant="h5" fontWeight={700}>
                  Create source:
                </Typography>
                <S.InputText
                  disableUnderline={true}
                  value={createSourceName}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setCreateSourceName(event.target.value);
                  }}
                />
                <S.SourceButton
                  onClick={() => {
                    createSourceName
                      ? handleCreateSource(createSourceName)
                      : console.log('Nome não pode ser vazio');
                  }}>
                  <b>Create</b>
                </S.SourceButton>
              </S.CreateContainer>
              <S.ResponseStatusContainer>
                {responseStatus && (
                  <Typography variant="h5" fontWeight={700} color={PALETTE.secondary}>
                    Success, data source {responseStatus?.action}d!
                    <br />
                    Data source {responseStatus?.action}d at {new Date().toLocaleDateString()} and
                    the name is {responseStatus?.name}.
                  </Typography>
                )}
              </S.ResponseStatusContainer>
            </S.ActionContainer>
          </div>
        </S.RightContainer>
        <Footer />
      </S.Container>
    </>
  );
}
