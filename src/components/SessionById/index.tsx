import React from 'react';
import axiosInstance from '../../config/axios';
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
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjg1MzA4NTM1fQ.UMMu8LwGNgDTp4cTXg7w1viQ-eWezV5QkiR4x_2w91b-z0aCR5yi1cJRrCmWuY4Cie1BUKE2G7ILYfcqLbAJ4w',
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