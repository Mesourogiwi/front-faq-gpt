import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { WidgetsGetAll } from './components/Widgets/get/widgetGetAll';
import { Users } from './components/Users/get';
import { UserById } from './components/Users/getById';
import { UserWidgetsById } from './components/Users/getWidgets';
import { CreateUser } from './components/Users/post';
import { EditUser } from './components/Users/put';
import { Login } from './components/Users/login';
import { DeleteUser } from './components/Users/delete';
import { Sources } from './components/Sources';
import { Sessions } from './components/Sessions/get';
import { SessionById } from './components/Sessions/getById';
import { SourceMessages } from './components/SourceMessages';
import { SessionMessages } from './components/SessionMessages';
import { WidgetCreate } from './components/Widgets/create/widgetCreate';
import { WidgetDelete } from './components/Widgets/delete/widgetDelete';

const router = createBrowserRouter([
  {
    path: '/api',
    element: <Users />,
  },
  {
    path: '/api/widgetsGetAll',
    element: <WidgetsGetAll />,
  },
  {
    path: '/api/widgetCreate',
    element: <WidgetCreate />
  },
  {
    path: '/api/users/:id',
    element: <UserById />
  },
  {
    path: '/api/userWidgets/:id',
    element: <UserWidgetsById />,
  },
  {
    path: '/api/createUser',
    element: <CreateUser />,
  },
  {
    path: '/api/login',
    element: <Login />,
  },
  {
    path: '/api/editUser/:id',
    element: <EditUser />,
  },
  {
    path: '/api/deleteUser/:id',
    element: <DeleteUser />,
  },
  {
    path: '/api/widgetDelete',
    element: <WidgetDelete />
  },
  {
    path: '/api/sessions',
    element: <Sessions />,
  },
  {
    path: '/api/sessions/:id',
    element: <SessionById />,
  },
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
