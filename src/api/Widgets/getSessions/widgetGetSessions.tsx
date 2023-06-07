import React, { useState } from 'react';
import axiosInstance from '../../../config/axios';

export const WidgetGetSessions: React.FC = () => {
  
  const [isSucess, setIsSucess] = useState(false);
  const [sessions, setSessions] = useState<any>();  
  
  const [id, setId] = React.useState<number>(0);
  
  const handleGetWidgetSessions = async () => {
    try {
      const response = await axiosInstance({
        url: `/widgets/${id}/sessions`,
        method: 'GET',
      });

      if (response?.data) {
        setIsSucess(true)
        setSessions(response?.data)
        console.log('response?.data', response?.data)
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Get Widgets Sessions by Widget Id</h1>
      <form>
        <label>Id do widget a ter suas sessions consultadas: </label>
        <input id="id-user" type="number" value={id} onChange={(e) => setId(e.target.valueAsNumber)}/>
        <br /> <br />
      </form>
      
      <button onClick={handleGetWidgetSessions}> Consultar Widget</button>
      
      {isSucess && 
         sessions?.map((session: any) => (
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
