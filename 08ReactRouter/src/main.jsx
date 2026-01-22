import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import User from './components/User/User.jsx' 
import GitHub from './components/GitHub/Github.jsx'
import App from './App.jsx'
import {RouterProvider ,createBrowserRouter, createRoutesFromElements,  Route   } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route path='github' element={<GitHub/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
