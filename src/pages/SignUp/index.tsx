import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Footer, Header } from '../../components';
import { LandingPageContainer } from '../Landing/LandingPageContainer';

export const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header
        rightElement={
          <div style={{ display: 'flex', gap: '16px' }}>
            <Button
              onClick={() => navigate('/sign-in')}
              variant="outlined"
              text="Already a client?"
            />
          </div>
        }
      />
      <div style={{ height: '100vh', padding: '100px 0' }}>
        <LandingPageContainer
          text="Ready to make your bussiness reach another level of client satisfaction?"
          rightElement={<Box title="Who are you?">abc</Box>}
        />
      </div>
      <Footer />
    </>
  );
};
