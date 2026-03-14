import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../HomeLayout/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        index: true, 
        element: <Home></Home>
      }
     ]
  },
]);

export default router;