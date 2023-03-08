import React from "react";
import ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/Header"; //default export
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage"

const AppLayout=()=>{
    return(
        <> 
        <HeaderComponent/>
        <Body/> 
        <Footer/>  
        </>
    )
}    

const appRouter=createBrowserRouter([ //createBrowserRouter takes an array of configuration, each configuration is an object ({path:"/",element:<AppLayout/>})
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<ErrorPage/>,
    },
    {
        path:"/about",
        element:<About/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))            
root.render(<RouterProvider router={appRouter} /> ); 
  

 

  


