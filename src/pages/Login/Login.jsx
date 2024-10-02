import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import { TextField, Typography } from "@mui/material";
import budget from "../../assets/png/budget.png";
const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userName")) {
      navigate("/dashboard");
    }
  });
  return (
    <section className={classes["login-main"]}>
      <div className={classes["login-content"]}>
        <p className="fs-600 fw-b mt-15">
          Master Your
          <span style={{ color: "var(--primary-color)" }}> Money </span>
          Today
        </p>
        <p className={"fs-400 mt-15"}>
          Personal budgeting unlocks financial freedom. Begin your journey now.
        </p>
        <TextField
          label="What is your name?"
          size="small"
          sx={{ marginTop: "20px" }}
        />
        <button type="submit" className="btn-black mt-15">
          Create the Account
        </button>
      </div>
      <div className={classes["login-img"]}>
        <img src={budget} />
      </div>
    </section>
  );
};
export default Login;
