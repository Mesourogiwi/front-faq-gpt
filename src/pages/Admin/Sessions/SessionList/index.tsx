import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../../config/axios';
import CircleIcon from '@mui/icons-material/Circle';
import { sessionResponse } from '../../../../types/session';
import SessionView from '../SessionView';
import { RightContainer } from '../styles';

const SessionList = () => {
  const [sessions, setSessions] = React.useState<sessionResponse[]>([]);
  const [selectedSessionId, setSelectedSessionId] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance({
        url: `/sessions/`,
        method: 'GET',
      });
      setSessions(response.data);
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  const handleSessionClick = (sessionId: number) => {
    setSelectedSessionId(sessionId);
  };

  return (
    <div style={{marginTop: '50px'}}>
      {sessions.map((session) => (
        <div key={session.id} onClick={() => handleSessionClick(session.id)} style={{ display: 'flex' }}>
          <div
            style={{
              marginTop: '10px',
              display: 'flex',
              borderBottom: '2px solid #939393',
              paddingBottom: '6px',
              fontSize: '18px',
              cursor: 'pointer',
            }}
          >
            <span style={{ width: '16px' }} />
            <span>#{session.id}</span>
            <span style={{ width: '8px' }} />
            <span>
              <CircleIcon color="success" fontSize="small" />
            </span>
            <span style={{ width: '8px' }} />
            {session.endDate == '' ? 'Active' : 'Inactive'}
            <span style={{ width: '16px' }} />
          </div>
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', float: 'right' }}>
        {selectedSessionId !== 0 && (
          <SessionView sessionId={selectedSessionId} sessions={sessions} />
        )}
      </div>
    </div>
  );
};

export default SessionList;