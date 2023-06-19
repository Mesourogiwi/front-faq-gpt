import React from 'react';
import { useNavigate } from 'react-router-dom';

import landingPageImg from '../../assets/landing.png';

import { CustomButton, Footer, Header } from '../../components';
import { LandingPageContainer } from './LandingPageContainer';
import { Card } from './Card';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <Header
        rightElement={
          <div style={{ display: 'flex', gap: '16px' }}>
            <CustomButton onClick={() => navigate('/sign-up')} variant="text" text="Sign Up aaa"/>
            <CustomButton onClick={() => navigate('/sign-in')} variant="outlined" text="Sign In" />
          </div>
        }
      />
      <div style={{ height: '100vh', padding: '100px 0' }}>
        <LandingPageContainer
          text="The ready for use widget to any dataset*, to create a human-like chat 24/7/365
          integrated in your website."
          bottomElement={
            <div style={{ marginTop: '10px' }}>
              <CustomButton
                dark
                onClick={() => ref.current?.scrollIntoView()}
                text="Want to know more?"
              />
            </div>
          }
          rightElement={<img src={landingPageImg} />}
        />
      </div>
      <div ref={ref} style={{ padding: '82px' }}>
        <div>
          <h1 style={{ fontSize: '32px' }}>Why us?</h1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '32px',
              paddingTop: '24px',
            }}>
            <Card
              title="Responsive Integration"
              text="Content fully integrated into the website without any risk of breaking the original formatting of your pages."
            />
            <Card
              title="Super human-like 24x7"
              text="Continuously operates, mimics human behavior, and is available without interruption, improving efficiency and productivity"
            />
            <Card
              title="ChatGPT with your database"
              text="Integrate any database** of your ecosystem and have one of the most prestigius AIs working for you, to your client."
            />
            <Card
              title="It’s a Differential"
              text="This is a new way to support client . The innovation knock your customer door, creating a new pattern on market."
            />
          </div>
        </div>
        <div style={{ marginTop: '82px' }}>
          <h1 style={{ fontSize: '32px', opacity: 0.5 }}>Who are we?</h1>
          <h1 style={{ fontSize: '72px', paddingLeft: '4px' }}>
            Auxilium - looking to support you
          </h1>
          <div style={{ fontSize: '24px', opacity: 0.5, marginTop: '24px', paddingRight: '420px' }}>
            <p>
              The young startup that never really will become true, but we thrust in your
              imagination to believe in that.
            </p>
            <br />
            <p>
              Our journey starts about 3 months, with the dream of using ChatGPT to finish this work
              and get a big 10.
            </p>
            <br />
            <p>
              Auxilium comes from the Latin, representing all our desire to innovate in the way of
              providing support to customers in the market.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
