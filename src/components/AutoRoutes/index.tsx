import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AutoRoutes = () => {
  const token = localStorage.getItem('@TOKEN');

  return (
    <div>
    {
            token ? <Outlet /> : <Navigate to='/'/>

         }
    </div>
  );
};

export default AutoRoutes;