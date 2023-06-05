import {FC, useEffect, useState} from 'react';
import axiosInstance from '../../../config/axios';
import { useParams } from 'react-router-dom';
import { sourceResponse } from '../../../types/source';

export const SourceById: FC = () => {
  const [source, setSource] = useState<sourceResponse | null>(null);
  const {id} = useParams()

  const fetchSource = async () => {
    try {
      const response = await axiosInstance({
        url: `/sources/${id}`,
        method: 'GET'
      });

      if (response?.data) setSource(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSource();
  }, []);

  return (
    <>
      <h1>Source By ID</h1>
        <div key={source?.id}>
          <h4>source {source?.id}</h4>
          <ul>
            <li>Name: {source?.channel}</li>
            <li>Sources Messages</li>
            {source?.sourceMessages?.map((sourceMessage) => (
              <div key={sourceMessage?.id}>
                <ul>
                  <li> 
                    <p>Id: {sourceMessage?.id} </p>
                    <p>Texto: {sourceMessage?.text} - {new Date(sourceMessage?.timestamp).toLocaleDateString('pt-br')}</p> 
                  </li>
                </ul>
              </div>
            ))}
          </ul>
        </div>
    </>
  );
};
