import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browser from "./Browser";
import Error from "./Error";

const Body = () => {
  const appRouter = createBrowserRouter([
      {
        path: "/",
        element: <Login />,
        errorElement: <Error/>
      },
    {
      path: "/browser",
      element: <Browser/>,
    },
    
  ]);


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
