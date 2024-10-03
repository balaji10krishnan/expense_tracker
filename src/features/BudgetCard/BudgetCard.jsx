import { LinearProgress, Stack } from "@mui/material";
import classes from "./BudgetCard.module.css";
import { useContext } from "react";
import { BudjetContext } from "../../context/BudjetContext";
const BudgetCard = ({ budget }) => {
  const { budget: budgetName, id, color, cost } = budget;
  const { calculateSpentByBudget } = useContext(BudjetContext);
  const spent = calculateSpentByBudget(id);
  return (
    <div style={{ "--color": color }}>
      <div className={classes["budget-card"]}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          style={{ marginBottom: "1em" }}
        >
          <p className="fs-400 fw-b">{budgetName}</p>
          <p className="fs-400 ">{cost} Budgeted</p>
        </Stack>
        <LinearProgress
          variant="determinate"
          value={spent <= cost ? (spent / cost) * 100 : 100}
          sx={{
            height: 10,
            borderRadius: 5,
            "& .MuiLinearProgress-bar": {
              backgroundColor: "hsl(var(--color))", // Set the color of the progress bar
            },
            backgroundColor: "#bac4bd", // Optional: Set the track background color to a lighter version
          }}
        />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          style={{ marginTop: "1em" }}
        >
          <p className="fs-200">{spent} spent</p>
          <p className="fs-200 ">{cost - spent} remaining</p>
        </Stack>

        <Stack
          direction={"row"}
          justifyContent={"center"}
          style={{ marginTop: "1em" }}
        >
          <button className="btn-color">View Details</button>
        </Stack>
      </div>
    </div>
  );
};
export default BudgetCard;
