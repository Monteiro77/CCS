import App from "./App"
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PageNotFound from "./assets/pages/PageNotFound"
import LandingPage from "./assets/pages/LandingPage/Index"
import Dashboard from "./assets/pages/Dashboard/Index"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index:true, element: <LandingPage/>},
      {path:'*', element: <PageNotFound/>},
      {path:'/dashboard', element: <Dashboard/>}

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)