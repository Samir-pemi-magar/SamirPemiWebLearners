import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Main from './components/Home/main';
import Login from './components/Login/Login.jsx';
import Signin from './components/SignUp/SingUp.jsx';
import AllNew from './components/All/allnew.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Login />
      },
      {
        path: "signup",
        element: <Signin />,
      },
      {
        path: "main",
        element: <Main />,
      },
      {
        path: "AllNew",
        element: <AllNew />,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);