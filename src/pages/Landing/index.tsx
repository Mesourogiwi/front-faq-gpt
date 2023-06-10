import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Footer, Header } from '../../components';
import { LandingPageContainer } from './LandingPageContainer';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header
        rightElement={
          <div style={{ display: 'flex', gap: '16px' }}>
            <Button onClick={() => navigate('/sign-up')} variant="text" text="Sign Up" />
            <Button onClick={() => navigate('/sign-in')} variant="outlined" text="Sign In" />
          </div>
        }
      />
      <div style={{ height: '100vh', padding: '100px 0' }}>
        <LandingPageContainer
          text="The ready for use widget to any dataset*, to create a human-like chat 24/7/365
          integrated in your website."
          bottomElement={
            <div style={{ marginTop: '10px' }}>
              <Button dark onClick={() => {}} text="Want to know more?" />
            </div>
          }
          rightElement={<div />}
        />
      </div>
      <Footer />
    </>
  );
};
