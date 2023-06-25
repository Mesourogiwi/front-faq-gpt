import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Header, Footer } from '../../../components';

import SideMenu from './../components/sideMenu';
import { currentUserState } from '../../../state/user';
import { getWidgets, updateWidget } from '../../../services/widgets';
import { Widget } from '../../../components/Widget';

import * as S from './styles';
import { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

//para chegar nessa tela utilize: http://localhost:5173/admin/[nome da tela]
//exemplo: http://localhost:5173/admin/home
export default function Home() {
  const navigate = useNavigate();
  const currentUser = useRecoilValue(currentUserState);
  const [widgetSelected, setWidgetSelected] = useState<any>();
  const [newName, setNewName] = useState<string>();
  const [createWidgetName, setCreateWidgetName] = useState<string>();
  const [widgets, setWidgets] = useState<any[]>([]);

  const getWidgetId = async () => {
    const response = await getWidgets();
    console.log(response);
    if (response) {
      setWidgets(response.sort((a, b) => a.id - b.id));
      if (widgetSelected === undefined) {
        setWidgetSelected(response[0]);
        setNewName(response[0].name);
      }
    }
  };

  const handleUpdateWidgetName = async (name: string) => {
    if (!currentUser) return;
    const response = await updateWidget(widgetSelected.id, { name: name, userId: currentUser.id });
    console.log(response);
    getWidgetId();
  };

  useEffect(() => {
    if (!currentUser) navigate('/sign-in');
    getWidgetId();
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <SideMenu />
        <S.RightContainer>
          {widgetSelected && <Widget widgetId={widgetSelected.id} />}

          <h1> Home</h1>

          <S.WidgetContainer>
            <S.WidgetsListContainer>
              {widgets.map((widget) => (
                <S.WidgetItem
                  selected={widget.id === widgetSelected.id}
                  key={widget.id}
                  onClick={() => {
                    setWidgetSelected(widget);
                    setNewName(widget.name);
                  }}>
                  <S.WidgetId>#{widget.id}</S.WidgetId>
                  <S.WidgetName>{widget.name}</S.WidgetName>
                </S.WidgetItem>
              ))}
            </S.WidgetsListContainer>
            <S.ActionContainer>
              <S.InfosContainer>
                <Box sx={{ display: 'flex' }}>
                  <Typography variant="h5" fontWeight={700}>
                    Widget name:&nbsp;
                  </Typography>
                  <Typography variant="h5" fontWeight={500}>
                    {widgetSelected?.name}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Typography variant="h5" fontWeight={700}>
                    Id:&nbsp;
                  </Typography>
                  <Typography variant="h5" fontWeight={500}>
                    #{widgetSelected?.id}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Typography variant="h5" fontWeight={700}>
                    Create at:&nbsp;
                  </Typography>
                  <Typography variant="h5" fontWeight={500}>
                    26/06/2023
                  </Typography>
                </Box>
                <Typography variant="h5" fontWeight={700}>
                  Update name:
                </Typography>
                <S.InputText
                  disableUnderline={true}
                  value={newName}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setNewName(event.target.value);
                  }}
                />
                <S.WidgetButton
                  onClick={() => {
                    newName
                      ? handleUpdateWidgetName(newName)
                      : console.log('Nome não pode ser vazio');
                  }}>
                  Update
                </S.WidgetButton>
              </S.InfosContainer>

              <S.CreateContainer>
                <Typography variant="h5" fontWeight={700}>
                  Create widget:
                </Typography>
                <S.InputText
                  disableUnderline={true}
                  value={createWidgetName}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setNewName(event.target.value);
                  }}
                />
                <S.WidgetButton
                  onClick={() => {
                    createWidgetName
                      ? handleUpdateWidgetName(createWidgetName)
                      : console.log('Nome não pode ser vazio');
                  }}>
                  Create
                </S.WidgetButton>
              </S.CreateContainer>

              <S.ResponseStatusContainer></S.ResponseStatusContainer>
            </S.ActionContainer>
          </S.WidgetContainer>

          {/* Coloque o contudo da página aqui */}
        </S.RightContainer>
        <Footer />
      </S.Container>
    </>
  );
}
