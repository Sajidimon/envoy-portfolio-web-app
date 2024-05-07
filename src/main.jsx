import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Dashboard from './pages/Dashboard/dashboard/Dashboard.jsx';
import ExpressProject from './pages/Dashboard/expressproject/ExpressProject.jsx';
import WpProject from './pages/Dashboard/wpProject/WpProject.jsx';
import SeoProject from './pages/Dashboard/seoProject/SeoProject.jsx';
import Login from './pages/login/Login.jsx';
import SignUp from './pages/signup/SignUp.jsx';
import ThemeOption from './pages/Dashboard/theme-option/ThemeOption.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <ExpressProject/>
      },
      {
        path: 'all-node-projects'
      },
      {
        path: 'wp-project',
        element: <WpProject/>
      },
      {
        path: 'seo-project',
        element: <SeoProject/>
      },
      {
        path: 'theme-option',
        element: <ThemeOption/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
