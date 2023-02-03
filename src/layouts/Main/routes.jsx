import { createBrowserRouter } from "react-router-dom";
import Details from "../../pages/Card/Details";
import AddContent from "../../pages/Home/AddContent";
import ContentList from "../../pages/Home/ContentList";
import Home from "../../pages/Home/Home";
import Main from "./Main";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element:<Home/>
            },
            {
                path: "/content/:id",
                element:<Details/>
            },
            {
                path: "/add_content",
                element:<AddContent/>
            },
            {
                path: "/content_list",
                element:<ContentList/>
            }
        ]
    }
])