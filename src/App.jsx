import { useEffect, useState } from 'react';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import Cities from './pages/Cities';
import City from './pages/City';
import Itinerary from './pages/Itinerary';
import Itineraries from "./pages/Itineraries";
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
        path: "/itineraries",
        element: <Itineraries />,
      },
      {
        path: "/itineraries/:idItinerary",
        element: <Itinerary />,
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