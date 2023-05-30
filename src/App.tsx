import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Users } from './components/Users';
import { Widgets } from './components/Widgets/get';
import { Sources } from './components/Sources';
import { Sessions } from './components/Sessions';
import { SessionById } from './components/SessionById';
import { SourceMessages } from './components/SourceMessages';
import { SessionMessages } from './components/SessionMessages';
import { CreateWidget } from './components/Widgets/post';

const router = createBrowserRouter([
  {
    path: '/api',
    element: <Users />,
  },
  {
    path: '/api/widgets',
    element: <Widgets />,
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
  },
  {
    path: '/api/createWidget',
    element: <CreateWidget />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
