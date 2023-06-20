import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';


export const SessionList: React.FC = () => {
  return (
    <div>
        <div style={{ marginTop: '10px', display: 'flex', borderBottom: '1px solid #000', paddingBottom: '2px' }}>
        <span>#345</span>
        <span style={{ width: '3px' }} />
        <span><CircleIcon color='success' fontSize='small' /></span>
        <span style={{ width: '3px' }} />
        <span>Resolved</span>
        </div>
        
        <div style={{ marginTop: '10px', display: 'flex', borderBottom: '1px solid #000', paddingBottom: '2px' }}>
        <span>#345</span>
        <span style={{ width: '3px' }} />
        <span><CircleIcon color='error' fontSize='small' /></span>
        <span style={{ width: '3px' }} />
        <span>Unresolved</span>
        </div>
    </div>
  );
};
