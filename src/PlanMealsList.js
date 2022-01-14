import { Typography } from "@mui/material";
import MealsList from "./MealsList";

export default function PlanMealsList({ meals }) {
  return (
    <>
      <Typography>My list with plan meals</Typography>
      <MealsList meals={meals} type="inPlan" />
    </>
  );
}
