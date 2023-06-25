import React from 'react';
import { sessionResponse } from '../../../../types/session';
import CircleIcon from '@mui/icons-material/Circle';
import { Messages } from '../../../../components/Messages';

type SessionViewProps = {
  sessionId: number;
  sessions: sessionResponse[];
};

const SessionView: React.FC<SessionViewProps> = ({ sessionId, sessions }) => {
  const session = sessions.find((session) => session?.id === sessionId);

  var inactive = (endDate : any) => {
    var current = new Date();

    return current > (new Date(endDate));
  }

  return (
    <div>
      <div style={{borderBottom: '2px solid #939393',
                  paddingBottom: '6px',
                  fontSize: '18px',
                  width: '60vw'}}
      >
        <h3>
            #{session?.id} -
          <span style={{ width: '8px', display: 'inline-block' }} />
          <span>
            <CircleIcon color={inactive(session?.endDate) ? 'error' : 'success'} fontSize="small" />
          </span>
          <span style={{ width: '4px', display: 'inline-block' }} />
          <span>
            {inactive(session?.endDate) ? 'Inactive' : 'Active'}
          </span>
        </h3>
      </div>
      
      <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Messages messageWidth="224px" messages={session?.sessionMessages} />
      </div>
    </div>
  );
};

export default SessionView;