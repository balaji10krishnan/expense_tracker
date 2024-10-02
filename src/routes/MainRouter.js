import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login/Login";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import Dashboard from "../pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    index: true,
    element: <Login />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

const MainRouter = () => {
  return <RouterProvider router={router} />;
};
export default MainRouter;
