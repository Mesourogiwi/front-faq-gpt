import React, { useState } from 'react';
import axiosInstance from '../../../config/axios';

export const WidgetGetById: React.FC = () => {
  
  const [isSucess, setIsSucess] = useState(false);
  const [widget, setWidget] = useState<any>();  
  
  const [id, setId] = React.useState<number>(0);
  
  const handleGetWidgetByIdQuery = async () => {
    try {
      const response = await axiosInstance({
        url: `/widgets/${id}`,
        method: 'GET',
      });

      if (response?.data) {
        setIsSucess(true)
        setWidget(response?.data)
        console.log(response?.data)
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Get Widgets by Id</h1>
      <form>
        <label>Id do widget a ser consultado: </label>
        <input id="id-user" type="number" value={id} onChange={(e) => setId(e.target.valueAsNumber)}/>
        <br /> <br />
      </form>
      
      <button onClick={handleGetWidgetByIdQuery}> Consultar Widget</button>
      
      {isSucess && (
        <ul>
        <li>Nome: {widget?.name}</li>
        <li>Sources</li>
        {widget?.sources?.map((source: any) => (
          <div key={source?.id}>
            <ul>
              <li>
                Source {source?.id} - {source?.channel}
              </li>
            </ul>
          </div>
        ))}
        <li>Sessions</li>
        {widget?.sessions?.map((session: any) => (
          <div key={session?.id}>
            <ul>
              <li>
                Session {session?.id} - {session?.sessionMessages?.length} mensagens
              </li>
            </ul>
          </div>
        ))}
      </ul>
      )}
    </>
  );
};
