import App from "./App";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageNotFound from "./assets/pages/PageNotFound";
import LandingPage from "./assets/pages/LandingPage/Index";
import Dashboard from "./assets/pages/Dashboard/Index";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> }, // Página inicial
      { path: 'dashboard', element: <Dashboard /> }, // Dashboard
      { path: '*', element: <PageNotFound /> }, // Página 404
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
