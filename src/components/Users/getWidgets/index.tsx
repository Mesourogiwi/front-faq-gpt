import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axiosInstance from '../../../config/axios';

export const UserWidgets: FC = () => {
  const [widgets, setWidgets] = useState([]);
  const { id } = useParams();

  const getUserWidgets = async () => {
    try {
      const { data } = await axiosInstance({
        url: `/users/${id}/widgets`,
        method: 'GET',
        headers: {
          Authorization: import.meta.env.VITE_BEARER_TOKEN,
        },
      });

      setWidgets(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserWidgets();
  }, []);

  return (
    <>
      <h3>Widgets do usuário {id}</h3>
      {widgets.map((widget: any) => (
        <div key={widget?.id}>
          <h4>Widget {widget?.id}</h4>
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
        </div>
      ))}
    </>
  );
};
