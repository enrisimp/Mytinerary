import { useEffect, useState } from 'react';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import Cities from './pages/Cities';
import City from './pages/City';
import Componente404 from './pages/Componente404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cities",
        element: <Cities />,
      },
      {
        path: "/cities/:id",
        element: <City />,
      },
      {
        path: "*",
        element: <Componente404 />,
      },
    ],
  },
]);


function App() {

  return (
    <RouterProvider router={router} />

  )
}

export default App