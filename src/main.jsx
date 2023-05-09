import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <h2>This is Default Route</h2>,
      },
      {
        path: "login",
        element: <h2>This is Login Route</h2>,
      },
      {
        path: "register",
        element: <h2>This is Register Route</h2>,
      },
      {
        path: "instructors/all",
        element: <h2>All Instructors are Here</h2>,
      },
      {
        path: "instructors/:id",
        element: <h2>Single Instructors are Here</h2>,
      },
      {
        path: "instructors/add",
        element: <h2>Instructors Can be Added From Here</h2>,
      },
      {
        path: "instructors/update/:id",
        element: <h2>Instructors information can be Updated from There</h2>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
