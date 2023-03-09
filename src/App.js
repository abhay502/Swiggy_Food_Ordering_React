import React from "react";
import ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/Header"; //default export
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage"
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout=()=>{
    return(
        <> 
        <HeaderComponent/>
        <Outlet/>
        <Footer/>  
        </>
    ) 
}    

const appRouter=createBrowserRouter([ //createBrowserRouter takes an array of configuration, each configuration is an object ({path:"/",element:<AppLayout/>})
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            }
        ]
    },
   
])

const root = ReactDOM.createRoot(document.getElementById('root'))            
root.render(<RouterProvider router={appRouter} /> ); 
  

 

  


