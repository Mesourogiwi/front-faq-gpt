import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../../config/axios';
import CircleIcon from '@mui/icons-material/Circle';
import { sessionResponse } from '../../../../types/session';
import SessionView from '../SessionView';
import * as S from './../styles';
import { getWidgetSessions } from '../../../../services/widgets/getWidgetSessions';
import { useAtom } from 'jotai';
import { currentWidgetAtom } from '../../atom';
import { get } from 'http';

const SessionList = () => {
  const [sessions, setSessions] = React.useState<sessionResponse[]>([]);
  const [selectedSessionId, setSelectedSessionId] = useState(0);
  const [currentWidget] = useAtom(currentWidgetAtom);

  const getSessionsOfWidget = async () => {
    const response = await getWidgetSessions(currentWidget.id);

    if (response) {
      setSessions(response);
    }
  };

  useEffect(() => {
    getSessionsOfWidget();
  }, []);

  const handleSessionClick = (sessionId: number) => {
    setSelectedSessionId(sessionId);
  };

  var inactive = (endDate: string) => {
    var current = new Date();

    return current > new Date(endDate);
  };

  return (
    <div style={{ display: 'flex' }}>
      <S.RightContainer>
        <div>
          <h1> Sessions</h1>
          {sessions.map((session) => (
            <div
              key={session.id}
              onClick={() => handleSessionClick(session.id)}
              style={{ display: 'flex', borderBottom: '2px solid #939393', paddingBottom: '6px' }}>
              <div
                style={{
                  marginTop: '10px',
                  display: 'flex',
                  fontSize: '18px',
                  cursor: 'pointer',
                }}>
                <span style={{ width: '16px' }} />
                <span>#{session.id}</span>
                <span style={{ width: '8px' }} />
                <span>
                  <CircleIcon
                    color={inactive(session.endDate) ? 'error' : 'success'}
                    fontSize="small"
                  />
                </span>
                <span style={{ width: '8px' }} />
                {inactive(session.endDate) ? 'Inactive' : 'Active'}
                <span style={{ width: '16px' }} />
              </div>
            </div>
          ))}
        </div>
      </S.RightContainer>
      <S.RightContainer style={{}}>
        <div>
          {selectedSessionId !== 0 && (
            <SessionView sessionId={selectedSessionId} sessions={sessions} />
          )}
        </div>
      </S.RightContainer>
    </div>
  );
};

export default SessionList;
