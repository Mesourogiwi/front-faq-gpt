import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Users } from './components/Users';
import { WidgetsGetAll } from './components/Widgets/get/widgetGetAll';
import { Sources } from './components/Sources';
import { Sessions } from './components/Sessions';
import { SessionById } from './components/SessionById';
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
    path: '/api/widgetDelete',
    element: <WidgetDelete />
  },
  {
    path: '/api/sessions',
    element: <Sessions />,
  },
  {
    path: '/api/sources',
    element: <Sources />,
  },
  {
    path: '/api/sessions/:id',
    element: <SessionById />,
  },
  {
    path: '/api/sourceMessages',
    element: <SourceMessages />,
  },
  {
    path: '/api/sessionMessages',
    element: <SessionMessages />,
  }  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
