import React, { useState } from 'react';
import axiosInstance from '../../../../config/axios';
import { sessionMessageResponse } from '../../../../types';


const SessionView = (props : any) => {
  const [sessionMessages, setSessionMessages] = React.useState<sessionMessageResponse[]>([]);

  const fetchData = async () => {
    setSessionMessages(props.data);
  };

  fetchData();

  return (
    <div>
        {sessionMessages.map((message) => {
          return ( 
            <div style={{ marginTop: '10px', display: 'flex', borderBottom: '2px solid #939393', paddingBottom: '8px', fontSize: '18px' }}>
              <span style={{ width: '16px' }} />
              <span>#{message.id}</span>
              <span style={{ width: '8px' }} />
              <span>#{message.text}</span>
            </div>
          );
        })}
    </div>
  );
};

export default SessionView;