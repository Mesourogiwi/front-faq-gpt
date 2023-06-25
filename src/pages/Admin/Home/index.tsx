import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Header, CustomButton, Footer } from '../../../components';

import SideMenu from './../components/sideMenu';
import { currentUserState } from '../../../state/user';
import { createWidget, deleteWidget, getWidgets, updateWidget } from '../../../services/widgets';
import { Widget } from '../../../components/Widget';

import * as S from './styles';
import { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Widgets } from '../../../api/Widgets';
import { PALETTE } from '../../../config/palette';

//para chegar nessa tela utilize: http://localhost:5173/admin/[nome da tela]
//exemplo: http://localhost:5173/admin/home
export default function Home() {
  const navigate = useNavigate();
  const currentUser = useRecoilValue(currentUserState);
  const [widgetSelected, setWidgetSelected] = useState<any>();
  const [newName, setNewName] = useState<string>();
  const [createWidgetName, setCreateWidgetName] = useState<string>();
  const [widgets, setWidgets] = useState<any[]>([]);
  const [responseStatus, setResponseStatus] = useState<{
    action: string;
    name: string;
  }>();

  const today = new Date();
  const currentDate = today.toLocaleDateString();

  const getWidgetId = async () => {
    const response = await getWidgets();
    // console.log(response);
    if (response) {
      setWidgets(response.sort((a, b) => a.id - b.id));
      if (widgetSelected === undefined) {
        setWidgetSelected(response[0]);
        setNewName(response[0].name);
      }
    }
    return response;
  };

  const handleUpdateWidgetName = async (name: string) => {
    if (!currentUser) return;
    const response = await updateWidget(widgetSelected.id, { name: name, userId: currentUser.id });
    // console.log(response);

    const newList = await getWidgetId();
    if (newList) setResponseStatus({ action: 'update', name: name });
  };

  const handleCreateWidget = async (name: string) => {
    if (!currentUser) return;
    const response = await createWidget({ name: name, userId: currentUser.id });
    // console.log(response);

    const newList = await getWidgetId();
    if (newList) setResponseStatus({ action: 'create', name: name });
  };

  const handleDeleteWidget = async () => {
    if (!currentUser) return;

    const response = await deleteWidget(widgetSelected.id);
    if (response) setWidgetSelected(widgets[0]);
    getWidgetId();
  };

  useEffect(() => {
    if (!currentUser) navigate('/sign-in');
    getWidgetId();
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
                  New widget name:
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
                  <b>Update</b>
                </S.WidgetButton>
                <S.WidgetButton
                  onClick={() => {
                    handleDeleteWidget();
                  }}>
                  <b>Delete Widget</b>
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
                    setCreateWidgetName(event.target.value);
                  }}
                />
                <S.WidgetButton
                  onClick={() => {
                    createWidgetName
                      ? handleCreateWidget(createWidgetName)
                      : console.log('Nome não pode ser vazio');
                  }}>
                  <b>Create</b>
                </S.WidgetButton>
              </S.CreateContainer>

              <S.ResponseStatusContainer>
                {responseStatus && (
                  <Typography variant="h5" fontWeight={700} color={PALETTE.secondary}>
                    Success, Widget {responseStatus?.action}!
                    <br />
                    Widget {responseStatus?.action} at {currentDate} and your name is{' '}
                    {responseStatus?.name}.
                  </Typography>
                )}
              </S.ResponseStatusContainer>
            </S.ActionContainer>
          </S.WidgetContainer>

          {/* Coloque o contudo da página aqui */}
        </S.RightContainer>
        <Footer />
      </S.Container>
    </>
  );
}
