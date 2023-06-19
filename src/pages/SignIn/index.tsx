import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomBox, CustomButton, Footer, Header } from '../../components';
import { LandingPageContainer } from '../Landing/LandingPageContainer';
import { SignInForm } from './SignInForm';

export const SignInPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header
        rightElement={
          <div style={{ display: 'flex', gap: '16px' }}>
            <CustomButton onClick={() => navigate('/sign-up')} variant="outlined" text="Not a client?" />
          </div>
        }
      />
      <div style={{ height: '100vh', padding: '100px 0' }}>
        <LandingPageContainer
          text="Ready to make your bussiness reach another level of client satisfaction?"
          rightElement={
            <CustomBox title="Who are you?">
              <SignInForm />
            </CustomBox>
          }
        />
      </div>
      <Footer />
    </>
  );
};
