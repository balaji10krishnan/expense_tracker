import { createContext } from "react";
import useLocalStorage from "../hook/use-localstorage";

export const BudjetContext = createContext();
const BudjetContextProvider = ({ children }) => {
  const [userName, setUserName] = useLocalStorage("userName", null);
  return (
    <BudjetContext.Provider value={{ userName, setUserName }}>
      {children}
    </BudjetContext.Provider>
  );
};
export default BudjetContextProvider;
