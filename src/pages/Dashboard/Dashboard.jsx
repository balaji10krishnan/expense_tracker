import { useContext } from "react";
import AddExpense from "../../features/AddExpense/AddExpense";
import CreateBudget from "../../features/CreateBudget/CreateBudget";
import Greet from "../../features/Greet/Greet";
import classes from "./Dashboard.module.css";
import { BudjetContext } from "../../context/BudjetContext";
const Dashboard = () => {
  const { budgets } = useContext(BudjetContext);
  return (
    <section className={classes["dashboard-container"]}>
      <Greet />
      <div className={classes["grid-item"]}>
        <CreateBudget />
        {budgets.length > 0 && <AddExpense />}
      </div>
    </section>
  );
};
export default Dashboard;
