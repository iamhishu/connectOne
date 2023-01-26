import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./Pages/Layouts/AuthLayout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      { path: "signup", element: <Signup /> },
    ],
  },
]);
