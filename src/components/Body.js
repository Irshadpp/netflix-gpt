import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browser from "./Browser";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Browser/>,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
