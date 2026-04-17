import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Register from "./components/Register.tsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login.tsx";

const lucas = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={lucas} />
  </StrictMode>,
);
