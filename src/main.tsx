import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, VStack } from '@chakra-ui/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './components/ErrorPage';
import DataTable from './components/DataTable';
import Index from './routes';
import data from './data';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: 'patients',
        element: (
          <VStack spacing={4} p={4} w="100%">
            <DataTable
              columns={data.patients.columns}
              data={data.patients.data}
              itemsPerPage={5}
              insertNewRecordBtnText="Add Patient"
            />
          </VStack>
        ),
      },
      {
        path: 'reminders',
        element: (
          <VStack spacing={4} p={4} w="100%">
            <DataTable
              columns={data.reminders.columns}
              data={data.reminders.data}
              itemsPerPage={5}
              insertNewRecordBtnText="Add Reminder"
            />
          </VStack>
        ),
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
