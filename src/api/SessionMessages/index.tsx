import React from 'react';
import { Link } from 'react-router-dom';

export const SessionMessages: React.FC = () => {
  return (
    <>
      <h1>Session Messages</h1>
      <ul>
        <li>
          <Link to="/api/sessionMessages">Get All</Link>
        </li>
        <li>
          <Link to="/api/sessionMessageCreate">Create</Link>
        </li>
        <li>
          <Link to="/api/sessionMessageById/:id">Get By Id</Link>
        </li>
        <li>
          <Link to="/api/sessionMessageUpdate/:id">Update</Link>
        </li>
        <li>
          <Link to="/api/sessionMessageDelete/:id">Delete</Link>
        </li>
      </ul>
    </>
  );
};
