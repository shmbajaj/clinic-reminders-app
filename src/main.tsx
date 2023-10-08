import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './components/ErrorPage';
import Index from './routes';
import Patients from './routes/patients';
import Reminders from './routes/reminders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: 'patients',
        element: <Patients />,
      },
      {
        path: 'reminders',
        element: <Reminders />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider resetCSS>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
