import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Users from "./components/Users.jsx";

import AddNewUser from "./components/AddNewUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Users></Users>,
      },
      {
        path: "users",
        element: <Users></Users>,
      },
      {
        path: "add-user",
        element: <AddNewUser></AddNewUser>,
      },
      {
        path: "register",
        element: <h2>This is Register Route</h2>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
