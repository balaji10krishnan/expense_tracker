import { useContext } from "react";
import AddExpense from "../../features/AddExpense/AddExpense";
import CreateBudget from "../../features/CreateBudget/CreateBudget";
import Greet from "../../features/Greet/Greet";
import classes from "./Dashboard.module.css";
import { BudjetContext } from "../../context/BudjetContext";
import BudgetCard from "../../features/BudgetCard/BudgetCard";
import ExpenseTable from "../../features/ExpenseTable/ExpenseTable";
import { colors } from "@mui/material";
const Dashboard = () => {
  const { budgets, expenses, getBudget } = useContext(BudjetContext);
  const columns = ["Name", "Amount", "Date", "Budget", "Action"];
  const rowKey = [
    { key: "expense" },
    { key: "cost" },
    { key: "createAt" },
    {
      key: "budget",
      renderCell: (data) => {
        const budget = getBudget(data?.budgetId);
        return (
          <div
            style={{
              backgroundColor: `hsl(${budget[0]?.color})`,
              width: "fit-content",
              color: "white",
              padding: ".5em",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            {budget[0]?.budget}
          </div>
        );
      },
    },
    { key: "action", renderCell: () => {} },
  ];
  return (
    <section className={classes["dashboard-container"]}>
      <Greet />
      <div className={classes["grid-item"]}>
        <CreateBudget />
        {budgets.length > 0 && <AddExpense />}
      </div>
      <div>
        {budgets.length > 0 && (
          <>
            <p className="fs-500 fw-b mt-20 mb-20">Existing Budgets</p>
            <div className={classes["grid-item"]}>
              {" "}
              {budgets.map((budget) => {
                return <BudgetCard budget={budget} />;
              })}
            </div>
          </>
        )}
      </div>
      <div>
        {expenses.length > 0 && (
          <>
            <p className="fs-500 fw-b mt-20 mb-20">Existing Expenses</p>
            <ExpenseTable columns={columns} rows={expenses} rowKey={rowKey} />
          </>
        )}
      </div>
    </section>
  );
};
export default Dashboard;
