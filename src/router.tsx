import { createBrowserRouter } from "react-router-dom";
import All from "./components/Main/All";
import { postLoader } from "./Loader";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <All />,
        loader: postLoader
    }
])