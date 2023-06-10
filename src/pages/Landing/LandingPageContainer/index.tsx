import React from 'react';
import { PALETTE } from '../../../config/palette';

type Props = {
  text: string;
  rightElement: JSX.Element;
  bottomElement?: JSX.Element;
};

export const LandingPageContainer: React.FC<Props> = ({ text, bottomElement, rightElement }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '82px',
        padding: '100px 82px',
        height: '100%',
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          gap: '82px',
          justifyContent: 'center',
          width: '50%',
        }}>
        <div style={{ textAlign: 'end' }}>
          <p style={{ fontSize: '80px' }}>
            It's not a <strong>Widget</strong>
          </p>
          <p style={{ fontSize: '64px' }}>
            It's <span style={{ color: PALETTE.secondary }}>much more.</span>
          </p>
        </div>
        <div>
          <p style={{ fontSize: '24px', opacity: 0.5 }}>{text}</p>
          {bottomElement}
        </div>
      </div>
      <div style={{ alignItems: 'center', display: 'flex', width: '50%' }}>{rightElement}</div>
    </div>
  );
};
