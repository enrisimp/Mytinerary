import { useEffect } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  // useNavigate,
} from "react-router-dom";
import Cities from "./pages/Cities";
import City from "./pages/City";
import Itinerary from "./pages/Itinerary";
import Itineraries from "./pages/Itineraries";
import Componente404 from "./pages/Componente404";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { useDispatch } from "react-redux";
import { signInWithToken } from "./redux/actions/userActions";
import ProtectedRoute from "./layouts/ProtectedRoute";

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
      {
        path: "/signup",
        element: 
          <ProtectedRoute>
            <SignUp />
          </ProtectedRoute>
        ,
      },
      {
        path: "/signin",
        element: 
          <ProtectedRoute>
            <SignIn />
          </ProtectedRoute>
        ,
      },
    ],
  },
]);

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(signInWithToken());
    }
  }, );

  return <RouterProvider router={router} />;
}

export default App;
