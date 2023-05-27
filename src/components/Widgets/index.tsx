import React from 'react';
import axiosInstance from '../../config/axios';

export const Widgets: React.FC = () => {
  const [widgets, setWidgets] = React.useState([]);

  const fetchWidgets = async () => {
    try {
      const response = await axiosInstance({
        url: '/widgets/',
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjg1MzA4NTM1fQ.UMMu8LwGNgDTp4cTXg7w1viQ-eWezV5QkiR4x_2w91b-z0aCR5yi1cJRrCmWuY4Cie1BUKE2G7ILYfcqLbAJ4w',
        },
      });

      if (response?.data) setWidgets(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchWidgets();
  }, []);

  return (
    <>
      <h1>Widgets</h1>
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
