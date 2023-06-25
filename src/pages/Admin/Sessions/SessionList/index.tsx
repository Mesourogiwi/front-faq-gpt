import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../../config/axios';
import CircleIcon from '@mui/icons-material/Circle';
import { sessionResponse } from '../../../../types/session';
import SessionView from '../SessionView';


const SessionList = () => {
  const [sessions, setSessions] = React.useState<sessionResponse[]>([]);
  const [selectedSessionId, setSelectedSessionId] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance({
        url: `/sessions/`,
        method: 'GET',
      });
      setSessions(response.data) 
    };
  
    fetchData();
  });

  return (
    <div>
        {sessions.map((session) => {
            return ( 
              <div> 
                <div style={{ marginTop: '10px', display: 'flex', borderBottom: '2px solid #939393', paddingBottom: '6px', fontSize: '18px' }}>
                  <span style={{ width: '16px' }} />
                  <span>#{session.id}</span>
                  <span style={{ width: '8px' }} />
                  <span><CircleIcon color='success' fontSize='small' /></span>
                  <span style={{ width: '8px' }} />
                  <span>Resolved</span>
                  <span style={{ width: '16px' }} />
                </div>
              </div>
            );
          })
          
          }
    </div>
  );
};

export default SessionList;