import { useEffect, useState } from 'react';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import Cities from './pages/Cities';
import Componente404 from './pages/Componente404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cities',
        element: <Cities />
      },
      {
        path: '*',
        element: <Componente404 />
      }
    ]
  },

])


function App() {


  return (
    // <MainLayout>
    <RouterProvider router={router} />
    // {/* <Home /> */}
    // {/* </MainLayout> */}
  )
}

export default App