import React from 'react';
import axiosInstance from '../../../config/axios';

export const Sessions: React.FC = () => {
  const [sessions, setSessions] = React.useState([]);

  const fetchSessions = async () => {
    try {
      const response = await axiosInstance({
        url: '/sessions/',
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJQZWRyb1BvdGVuemEiLCJleHAiOjE2ODU1NjYzODN9.Ohm-mVmOSnbeNhZvXRPqB0E8j05p3et430O6W9eVZQD-iNRQAb_ADbUeeQnqu2L02pOSG0UtO8ps8jhfeJg7cA',
        },
      });

      if (response?.data) setSessions(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <>
      <h1>Sessions</h1>
      {sessions.map((session: any) => (
        <div key={session?.id}>
          <h4>Session {session?.id}</h4>
          <ul>
            <li>StartDate: {session?.startDate}</li>
            <li>EndDate: {session?.endDate}</li>
            <li>SessionMessages</li>
            {session?.sessionMessages?.map((sessionMessage: any) => (
              <div key={sessionMessage?.id}>
                <ul>
                  <li>
                    SessionMessage {sessionMessage?.id} - {sessionMessage?.timestamp} <br />
                    isUser: {sessionMessage?.isUser.toString()} <br />
                    Text: {sessionMessage?.text}
                  </li>
                </ul>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
