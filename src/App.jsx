import React, { lazy, useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error"
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {

    const [user, setUser] = useState(''); 
    
    useEffect(() => {
        const data = {
            user: "Adarsh Sahani",
        }
        setUser(data.user)
    }, [])

    return (
        <div>
            <Provider store={appStore}>
                <UserContext.Provider value={{loggedIn: user, setUser}}>
                    <Header />
                    <Outlet />
                </UserContext.Provider>
            </Provider>
        </div>
    )
}

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            },
        ],
        errorElement: <Error />,
    },
])

const Root = ReactDOM.createRoot(document.getElementById("root"))

Root.render(<RouterProvider router={AppRouter} />);