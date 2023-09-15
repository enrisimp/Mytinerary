// ProtectedRoute.jsx
import React, { useRef, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const ProtectedRoute = ({children}) => {
    const isOnline = useSelector(store => store.user.isOnline);
    const [isLogged, setIsLogged] = useState(false);
useEffect(() => {
  setIsLogged(isOnline);
}, [isOnline]);

    if (isLogged) {
        return <Navigate to="/"></Navigate>;
    } else {
        return children;
    }
  
}

export default ProtectedRoute;
