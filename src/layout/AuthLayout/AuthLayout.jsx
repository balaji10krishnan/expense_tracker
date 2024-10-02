import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userName")) {
      navigate("/");
    }
  }, []);
  return <Outlet />;
};
export default AuthLayout;
