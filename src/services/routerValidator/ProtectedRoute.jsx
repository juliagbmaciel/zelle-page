import React from 'react';
import { Route, Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token'); 
  const Home = element
  return token ? (<Home/>) : (<Navigate to="/login" replace={true} />);
};


export const RouteLogin = ({ element }) => {
    const token = localStorage.getItem('token'); 
    const Login = element
    return token ?  (<Navigate to="/home" replace={true} />) : <Login/>;
  };

