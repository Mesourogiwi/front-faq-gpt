import { RouteObject } from 'react-router-dom';

import { Users } from '../api/Users/get';
import { Login } from '../api/Users/login';
import { UserById } from '../api/Users/getById';
import { UserWidgets } from '../api/Users/getWidgets';
import { UserCreate } from '../api/Users/post';
import { UserEdit } from '../api/Users/put';
import { UserDelete } from '../api/Users/delete';

import { SessionMessages } from '../api/SessionMessages/get';
import { SessionMessageById } from '../api/SessionMessages/getById';
import { SessionMessageDelete } from '../api/SessionMessages/delete';
import { SessionMessageCreate } from '../api/SessionMessages/create';
import { SessionMessageUpdate } from '../api/SessionMessages/update';

import { WidgetsGetAll } from '../api/Widgets/get/widgetGetAll';
import { Sources } from '../api/Sources/get';
import { Sessions } from '../api/Sessions/get';
import { SessionById } from '../api/Sessions/getById';
import { SourceMessages } from '../api/SourceMessages';
import { WidgetCreate } from '../api/Widgets/create/widgetCreate';
import { WidgetDelete } from '../api/Widgets/delete/widgetDelete';
import { Api } from '../api';

const userRoutes: RouteObject[] = [
  {
    path: '/api/usersGetAll',
    element: <Users />,
  },
  {
    path: '/api/login',
    element: <Login />,
  },
  {
    path: '/api/userById/:id',
    element: <UserById />,
  },
  {
    path: '/api/userWidgets/:id',
    element: <UserWidgets />,
  },
  {
    path: '/api/userCreate',
    element: <UserCreate />,
  },
  {
    path: '/api/userEdit/:id',
    element: <UserEdit />,
  },
  {
    path: '/api/userDelete/:id',
    element: <UserDelete />,
  },
];

const widgetRoutes: RouteObject[] = [
  {
    path: '/api/widgetsGetAll',
    element: <WidgetsGetAll />,
  },
  {
    path: '/api/widgetCreate',
    element: <WidgetCreate />,
  },
  {
    path: '/api/widgetDelete',
    element: <WidgetDelete />,
  },
];

const sourceRoutes: RouteObject[] = [
  {
    path: '/api/sources',
    element: <Sources />,
  },
  {
    path: '/api/sources/:id',
    element: '',
  },
];

const sessionRoutes: RouteObject[] = [
  {
    path: '/api/sessions',
    element: <Sessions />,
  },
  {
    path: '/api/sessions/:id',
    element: <SessionById />,
  },
];

const sessionMessagesRoutes: RouteObject[] = [
  {
    path: '/api/sessionMessages',
    element: <SessionMessages />,
  },
  {
    path: '/api/sessionMessageById/:id',
    element: <SessionMessageById />,
  },
  {
    path: '/api/sessionMessageDelete/:id',
    element: <SessionMessageDelete />,
  },
  {
    path: '/api/sessionMessageCreate',
    element: <SessionMessageCreate />,
  },
  {
    path: '/api/sessionMessageUpdate/:id',
    element: <SessionMessageUpdate />,
  },
];

const sourceMessagesRoutes: RouteObject[] = [
  {
    path: '/api/sourceMessages',
    element: <SourceMessages />,
  },
];

export const apiRoutes = [
  ...userRoutes,
  ...widgetRoutes,
  ...sourceRoutes,
  ...sessionRoutes,
  ...sessionMessagesRoutes,
  ...sourceMessagesRoutes,
  {
    path: '/api',
    element: <Api />,
  },
];
