import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MoviesPage from "./pages/MoviesPage";
import GenresPage from "./pages/GenresPage";

let router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children:[
            {
                index: true, element:<Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/>
            },
            {
                path:'genres', element:<GenresPage/>
            }
        ]
    }
]);

export {
    router
}