import logo from "./logo.svg";
import "./App.css";
import { TextField, ThemeProvider } from "@mui/material";
import MainRouter from "./routes/MainRouter";
import Header from "./features/Header/Header";
import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <MainRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
