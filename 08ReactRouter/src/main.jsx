import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'

import App from './App.jsx'
import {RouterProvider ,createBrowserRouter,} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      { index: true, element:<Home/> }
      ,{path:"about", element:<About/>}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
