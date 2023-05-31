import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Users } from './components/Users/get';
import { Login } from './components/Users/login';
import { UserById } from './components/Users/getById';
import { UserWidgets } from './components/Users/getWidgets';
import { UserCreate } from './components/Users/post';
import { UserEdit } from './components/Users/put';
import { UserDelete } from './components/Users/delete';

import { WidgetsGetAll } from './components/Widgets/get/widgetGetAll';
import { Sources } from './components/Sources';
import { Sessions } from './components/Sessions/get';
import { SessionById } from './components/Sessions/getById';
import { SourceMessages } from './components/SourceMessages';
import { SessionMessages } from './components/SessionMessages';
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

const router = createBrowserRouter([
  ...userRoutes,
  ...widgetRoutes,
  ...sessionRoutes,
  {
    path: '/api/sources',
    element: <Sources />,
  },
  {
    path: '/api/sourceMessages',
    element: <SourceMessages />,
  },
  {
    path: '/api/sessionMessages',
    element: <SessionMessages />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
