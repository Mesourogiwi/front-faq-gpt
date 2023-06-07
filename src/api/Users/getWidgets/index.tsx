import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getUserWidgets } from '../../../services/users';
import { widgetResponse } from '../../../types';

export const UserWidgets: FC = () => {
  const [widgets, setWidgets] = useState<widgetResponse[]>([]);
  const { id } = useParams();

  const fetchUserWidgets = async () => {
    const response = await getUserWidgets(Number(id));
    if (response) setWidgets(response);
  };

  useEffect(() => {
    fetchUserWidgets();
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
