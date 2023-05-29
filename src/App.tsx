import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Users } from './components/Users';
import { Widgets } from './components/Widgets';
import { Sources } from './components/Sources';
import { Sessions } from './components/Sessions';
import { SessionById } from './components/SessionById';
import { SourceMessages } from './components/SourceMessages';
import { SessionMessages } from './components/SessionMessages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Users />,
  },
  {
    path: '/widgets',
    element: <Widgets />,
  }, 
  {
    path: '/sessions',
    element: <Sessions />,
  },
  {
    path: '/sources',
    element: <Sources />,
  },
  {
    path: '/sessions/:id',
    element: <SessionById />,
  },
  {
    path: '/sourceMessages',
    element: <SourceMessages />,
  },
  {
    path: '/sessionMessages',
    element: <SessionMessages />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
