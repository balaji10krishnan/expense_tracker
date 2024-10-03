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
  function createDate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0"); // Add leading zero if necessary
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
    const year = String(date.getFullYear()).slice(-2); // Get the last two digits of the year

    return `${day}/${month}/${year}`;
  }
  const addBudgets = (budget, cost) => {
    setBudgets([
      ...budgets,
      {
        id: uuidv4(),
        budget,
        cost,
        color: generateRandomColor(budgets.length),
        createAt: createDate(),
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
        createAt: createDate(),
      },
    ]);
  };

  const calculateSpentByBudget = (budgetId) => {
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
      if (expenses[i].budgetId == budgetId) {
        total += Number(expenses[i].cost);
      }
    }
    return total;
  };
  const getBudget = (budgetId) => {
    return budgets.filter((item) => (item.id = budgetId));
  };
  return (
    <BudjetContext.Provider
      value={{
        userName,
        setUserName,
        budgets,
        expenses,
        addBudgets,
        addExpense,
        calculateSpentByBudget,
        getBudget,
      }}
    >
      {children}
    </BudjetContext.Provider>
  );
};
export default BudjetContextProvider;
