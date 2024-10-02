import { Typography } from "@mui/material";
import logo from "../../assets/png/logo.png";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <>
      <header className={classes.nav}>
        <div className={classes.logo}>
          <img src={logo} height={30} />
          <Typography className="fs-400 fw-b" variant="p">
            Budget Tracker
          </Typography>
        </div>
      </header>
    </>
  );
};

export default Header;
