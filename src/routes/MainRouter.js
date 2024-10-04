import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login/Login";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import BudgetDetail from "../pages/BudgetDetail/BudgetDetail";

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
      {
        path: "budget",
        element: <BudgetDetail />,
      },
    ],
  },
]);

const MainRouter = () => {
  return <RouterProvider router={router} />;
};
export default MainRouter;
