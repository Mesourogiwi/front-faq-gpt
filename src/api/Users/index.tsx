import React from 'react';
import { Link } from 'react-router-dom';

export const Users: React.FC = () => {
  return (
    <>
      <h1>Users</h1>
      <ul>
        <li>
          <Link to="/api/usersGetAll">Get All</Link>
        </li>
        <li>
          <Link to="/api/userCreate">Create</Link>
        </li>
        <li>
          <Link to="/api/userById/:id">Get By Id</Link>
        </li>
        <li>
          <Link to="/api/userEdit/:id">Update</Link>
        </li>
        <li>
          <Link to="/api/userDelete/:id">Delete</Link>
        </li>
        <li>
          <Link to="/api/login">Login</Link>
        </li>
        <li>
          <Link to="/api/userWidgets/:id">Widgets</Link>
        </li>
      </ul>
    </>
  );
};
