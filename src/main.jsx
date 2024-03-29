import React from "react";
import { GlobalStyled } from  "./GlobalStyled.JS";

import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./pages/Home/Home.jsx";
import Search from "./pages/Search/Search.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx"
import Register_Auth from "./pages/Register_Auth/Register_Auth.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search/:title", element: <Search /> },
    ],
  },
  {
    path: "/auth",
    element: <Register_Auth />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
