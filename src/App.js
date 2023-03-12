import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header"; //default export
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage"
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart"

const Instamart = lazy(() => import("./components/Instamart"))
const About = lazy(() => import("./components/About"))

const AppLayout = () => {
    return (
        <>   
            <HeaderComponent />
            <Outlet />
            <Footer />
        </>   
    ) 
}

const appRouter = createBrowserRouter([ //createBrowserRouter takes an array of configuration, each configuration is an object ({path:"/",element:<AppLayout/>})
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shimmer />}> <About />  </Suspense>,
                children: [
                    {
                        path: 'profile',
                        element: <Profile />
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer />}>  <Instamart />  </Suspense>
            }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />);







