import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./assets/pages/PageNotFound";
import LandingPage from "./assets/pages/LandingPage/Index";
import Dashboard from "./assets/pages/Dashboard/Index";
import TiposEnergia from "./assets/pages/TiposEnergia";
import Register from "./assets/pages/Register/Index"; 
import BeneficiosDesafios from "./assets/pages/Beneficios";
import Contato from "./assets/pages/Contato";
import Login from "./assets/pages/Login/Index";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> }, // Página inicial
      { path: 'dashboard', element: <Dashboard /> }, // Dashboard
      { path: 'tipos-energia', element: <TiposEnergia /> }, // Página Tipos de Energia
      { path: "beneficios", element: <BeneficiosDesafios /> }, // Página Benefícios E Desafios
      { path: "register", element: <Register /> }, // Página Benefícios E Desafios
      { path: "contato", element: <Contato /> }, // Página Benefícios E Desafios
      
      { path: "*", element: <PageNotFound /> }, // Página 404
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
