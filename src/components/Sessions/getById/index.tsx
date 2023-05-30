import React from 'react';
import axiosInstance from '../../../config/axios';
import { useParams } from 'react-router';

export const SessionById: React.FC = () => {
  const [session, setSession] = React.useState<any | null>(null);
  const { id } = useParams();

  const fetchSessions = async () => {
    try {
      const response = await axiosInstance({
        url: `/sessions/${id}`,
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJQZWRyb1BvdGVuemEiLCJleHAiOjE2ODU1NjYzODN9.Ohm-mVmOSnbeNhZvXRPqB0E8j05p3et430O6W9eVZQD-iNRQAb_ADbUeeQnqu2L02pOSG0UtO8ps8jhfeJg7cA',
        },
      });

      if (response?.data) setSession(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchSessions();
  }, [id]);

  return (
    <>
      <h1>Session By Id</h1>
      <div>
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
    </>
  );
};
