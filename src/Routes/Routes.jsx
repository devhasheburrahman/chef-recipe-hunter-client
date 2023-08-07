import React from 'react';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import Header from '../Pages/Shared/Header/Header';
import Home from '../Pages/Home/Home';
import Main from '../Layout/Main';
import Blogs from '../Pages/Shared/Blogs/Blogs';
import Login from '../Pages/Shared/Login/Login';
import Register from '../Pages/Shared/Register/Register';
import Error from '../Pages/Error/Error';
import About from '../Pages/Shared/About/About';
import ChiefDetails from '../Pages/Home/ChefDetials/ChiefDetails';
import PrivateRoute from './PrivateRoute';
import ChiefDetailsLayout from '../Layout/ChiefDetials/ChiefDetailsLayout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch("https://chif-recipe-hunter-server.vercel.app/chef")

            },
            {
                path: '/blogs',
                element: <Blogs />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/ChiefDetails',
                element: <ChiefDetailsLayout />,
                children: [
                    {
                        path: ':id',
                        element: <PrivateRoute><ChiefDetails /></PrivateRoute>,
                        loader: ({ params }) =>
                            fetch(
                                `https://chif-recipe-hunter-server.vercel.app/chef/${params.id}`
                            ),

                    }
                ]
            },

            {
                path: '/*',
                element: <Error />
            },
        ]
    },
]);

export default router;