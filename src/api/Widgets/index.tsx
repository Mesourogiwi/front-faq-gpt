import React from 'react';
import { Link } from 'react-router-dom';

export const Widgets: React.FC = () => {
  return (
    <>
      <h1>Widgets</h1>
      <ul>
        <li>
          <Link to="/api/widgetsGetAll">Get All</Link>
        </li>
        <li>
          <Link to="/api/widgetCreate">Create</Link>
        </li>
        <li>
          <Link to="/api/widgetsGetById">Get By Id</Link>
        </li>
        <li>
          <Link to="/api/widgetUpdate">Update</Link>
        </li>
        <li>
          <Link to="/api/widgetDelete">Delete</Link>
        </li>
        <li>
          <Link to="/api/widgetsGetSources">Sources</Link>
        </li>
        <li>
          <Link to="/api/widgetsGetSessions">Sessions</Link>
        </li>
      </ul>
    </>
  );
};
