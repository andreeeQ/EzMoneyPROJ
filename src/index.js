import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Transactionpage from './pages/transactionpage.js';
import Supportpage from './pages/supportpage.js';
import NotFound from './pages/NotFound.js';
import Dashboard from './pages/Dashboard.js';



import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>, 
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,
    },
    {
      path: "/aboutus",
      element: <Transactionpage/>,
    },
    {
      path: "/support",
      element: <Supportpage/>,
    },
    {
      path: "*",
      element: <NotFound/>,
    }
   
  ]);

  



ReactDOM.render(<RouterProvider router={router} />, document.getElementById('root'));