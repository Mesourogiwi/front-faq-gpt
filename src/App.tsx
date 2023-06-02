import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Users } from './components/Users/get';
import { Login } from './components/Users/login';
import { UserById } from './components/Users/getById';
import { UserWidgets } from './components/Users/getWidgets';
import { UserCreate } from './components/Users/post';
import { UserEdit } from './components/Users/put';
import { UserDelete } from './components/Users/delete';

import { SessionMessages } from './components/SessionMessages/get';
import { SessionMessageById } from './components/SessionMessages/getById';
import { SessionMessageDelete } from './components/SessionMessages/delete';

import { WidgetsGetAll } from './components/Widgets/get/widgetGetAll';
import { Sources } from './components/Sources';
import { Sessions } from './components/Sessions/get';
import { SessionById } from './components/Sessions/getById';
import { SourceMessages } from './components/SourceMessages';
import { WidgetCreate } from './components/Widgets/create/widgetCreate';
import { WidgetDelete } from './components/Widgets/delete/widgetDelete';

const userRoutes = [
  {
    path: '/api',
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

const widgetRoutes = [
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

const sessionRoutes = [
  {
    path: '/api/sessions',
    element: <Sessions />,
  },
  {
    path: '/api/sessions/:id',
    element: <SessionById />,
  },
];

const sessionMessagesRoutes = [
  {
    path: '/api/sessionMessages',
    element: <SessionMessages />,
  },
  {
    path: '/api/sessionMessageById/:id',
    element: <SessionMessageById />
  },
  {
    path: '/api/sessionMessageDelete/:id',
    element: <SessionMessageDelete />
  }
  /*
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
  },*/
];

const router = createBrowserRouter([
  ...userRoutes,
  ...widgetRoutes,
  ...sessionRoutes,
  ...sessionMessagesRoutes,
  {
    path: '/api/sources',
    element: <Sources />,
  },
  {
    path: '/api/sourceMessages',
    element: <SourceMessages />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
