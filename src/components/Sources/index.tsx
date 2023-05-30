import React from 'react';
import axiosInstance from '../../config/axios';

export const Sources: React.FC = () => {
  const [sources, setSources] = React.useState([]);

  const fetchSources = async () => {
    try {
      const response = await axiosInstance({
        url: '/sources/',
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJQZWRyb1BvdGVuemEiLCJleHAiOjE2ODU1NjYzODN9.Ohm-mVmOSnbeNhZvXRPqB0E8j05p3et430O6W9eVZQD-iNRQAb_ADbUeeQnqu2L02pOSG0UtO8ps8jhfeJg7cA',
        },
      });

      if (response?.data) setSources(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchSources();
  }, []);

  return (
    <>
      <h1>Sources</h1>
      {sources.map((source: any) => (
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
      ))}
    </>
  );
};
