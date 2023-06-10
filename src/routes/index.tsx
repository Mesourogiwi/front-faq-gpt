import { RouteObject } from 'react-router-dom';

import { apiRoutes } from './apiRoutes';
import { LandingPage } from '../pages/Landing';
import { SignInPage } from '../pages/SignIn';
import { SignUpPage } from '../pages/SignUp';
import { ResetPasswordPage } from '../pages/ResetPassword';

export const routes: RouteObject[] = [
  ...apiRoutes,
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/sign-in',
    element: <SignInPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/reset-password',
    element: <ResetPasswordPage />,
  },
];
