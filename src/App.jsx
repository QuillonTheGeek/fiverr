import React from 'react'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import Gigs from './pages/gigs/Gigs';
import Gig from './pages/gig/Gig';
import MyGigs from './pages/myGigs/MyGigs';
import Add from './pages/add/Add';
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import Orders from './pages/order/Orders';
import Footer from './components/Footer/Footer';
import './App.scss'
 
const Layout = () => {
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/gig/:id',
            element:<Gig/>
        },
        {
            path:'/gigs',
            element:<Gigs/>
        },
        {
            path:'/orders',
            element:<Orders/>
        },
        {
            path:'/mygigs',
            element:<MyGigs/>
        },
        {
            path:'/add',
            element:<Add/>
        },
        {
            path:'/messages',
            element:<Messages/>
        },
        {
            path:'/message/:id',
            element:<Message/>
        },
    ]
  },
]);


function App() {
  return (
    <div className='app'>
        <RouterProvider router={router} />
    </div>
  )
}

export default App