import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from "./components/Layout.jsx"
import Home from "./components/Home.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CartItems from './components/CartItems.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path:"/cart",
        element: <CartItems/>
      }
    ] 
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
