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
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJQZWRyb1BvdGVuemEiLCJleHAiOjE2ODUzNzQwMDB9.405qS0DunwtEcX7fneQ2MZn8GNngtexDSNg-AeuJuwgeGwGXOMUQWVELj8Oa9byX7XC4I--BuPFIYVRnbUwrCg',
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
