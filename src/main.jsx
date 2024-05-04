import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Dashboard from './pages/Dashboard/dashboard/Dashboard.jsx';
import ExpressProject from './pages/Dashboard/expressproject/ExpressProject.jsx';
import WpProject from './pages/Dashboard/wpProject/WpProject.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'express-project',
        element: <ExpressProject/>
      },
      {
        path: 'wp-project',
        element: <WpProject/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
