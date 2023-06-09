import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { routes } from './routes';
import { theme } from './config/theme';

const router = createBrowserRouter(routes);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
