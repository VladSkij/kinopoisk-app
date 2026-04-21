import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Main</div>
    },
    {
        path: '/move/:id',
        element: <div>Страница фильма</div>
    },
])