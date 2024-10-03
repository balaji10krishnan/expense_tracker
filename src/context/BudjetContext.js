import { createContext } from "react";
import useLocalStorage from "../hook/use-localstorage";
import { v4 as uuidv4 } from "uuid";
export const BudjetContext = createContext();
const BudjetContextProvider = ({ children }) => {
  const [userName, setUserName] = useLocalStorage("userName", null);
  const [budgets, setBudgets] = useLocalStorage("budgets", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  const generateRandomColor = (val) => {
    return `${val * 34} 55% 40%`;
  };

  const addBudgets = (budget, cost) => {
    setBudgets([
      ...budgets,
      {
        id: uuidv4(),
        budget,
        cost,
        color: generateRandomColor(budgets.length),
      },
    ]);
  };

  const addExpense = (budgetId, expense, cost) => {
    setExpenses([
      ...expenses,
      {
        id: uuidv4(),
        expense,
        cost,
        budgetId,
      },
    ]);
  };

  return (
    <BudjetContext.Provider
      value={{ userName, setUserName, addBudgets, budgets, addExpense }}
    >
      {children}
    </BudjetContext.Provider>
  );
};
export default BudjetContextProvider;
