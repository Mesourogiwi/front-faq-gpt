import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Users } from './components/Users';
import { Widgets } from './components/Widgets';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Users />,
  },
  {
    path: '/widgets',
    element: <Widgets />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
