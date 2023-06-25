import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Header, CustomButton, Footer } from '../../../components';

import SideMenu from './../components/sideMenu';
import { currentUserState } from '../../../state/user';
import { getWidgets } from '../../../services/widgets';
import { Widget } from '../../../components/Widget';

import * as S from './styles';

//para chegar nessa tela utilize: http://localhost:5173/admin/[nome da tela]
//exemplo: http://localhost:5173/admin/home
export default function Home() {
  const navigate = useNavigate();
  const currentUser = useRecoilValue(currentUserState);
  const [widgetId, setWidgetId] = React.useState<number | undefined>();

  const getWidgetId = async () => {
    const widgets = await getWidgets();
    console.log(widgets);
    if (widgets) setWidgetId(widgets[0].id);
  };

  React.useEffect(() => {
    if (!currentUser) navigate('/sign-up');
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
          {widgetId && <Widget widgetId={widgetId} />}
          <h1> Home</h1>
          {/* Coloque o contudo da página aqui */}
        </S.RightContainer>
        <Footer />
      </S.Container>
    </>
  );
}
