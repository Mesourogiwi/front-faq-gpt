import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Users } from './components/Users';
import { Widgets } from './components/Widgets';
import { Sources } from './components/Sources';

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
    path: '/sources',
    element: <Sources />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
