import React, { useState } from 'react';
import axiosInstance from '../../../config/axios';

export const WidgetGetSources: React.FC = () => {
  
  const [isSucess, setIsSucess] = useState(false);
  const [sources, setSources] = useState<any>();  
  
  const [id, setId] = React.useState<number>(0);
  
  const handleGetWidgetSources = async () => {
    try {
      const response = await axiosInstance({
        url: `/widgets/${id}/sources`,
        method: 'GET',
      });

      if (response?.data) {
        setIsSucess(true)
        setSources(response?.data)
        console.log('response?.data', response?.data)
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Get Widgets Sources by Widget Id</h1>
      <form>
        <label>Id do widget a ter suas sources consultadas: </label>
        <input id="id-user" type="number" value={id} onChange={(e) => setId(e.target.valueAsNumber)}/>
        <br /> <br />
      </form>
      
      <button onClick={handleGetWidgetSources}> Consultar Widget</button>
      
      {isSucess && 
         sources.map((source: any) => (
          <div key={source?.id}>
            <h4>source {source?.id}</h4>
            <ul>
              <li>Name: {source?.channel}</li>
              <li>Sources Messages</li>
              {source?.sourceMessages?.map((sourceMessage: any) => (
                <div key={sourceMessage?.id}>
                  <ul>
                    <li> 
                      <p>Id: {sourceMessage?.id} </p>
                      <p>Texto: {sourceMessage?.text} - {sourceMessage?.timestamp}</p> 
                      
                    </li>
                  </ul>
                </div>
              ))}
            </ul>
          </div>
        ))
      }
    </>
  );
};
