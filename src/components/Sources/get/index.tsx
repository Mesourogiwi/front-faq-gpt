import {FC, useEffect, useState} from 'react';
import axiosInstance from '../../../config/axios';

export const Sources: FC = () => {
  const [sources, setSources] = useState([]);

  const fetchSources = async () => {
    try {
      const response = await axiosInstance({
        url: '/sources/',
        method: 'GET'
      });

      if (response?.data) setSources(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
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
