import { Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import IngridientsList from "./IngridientsList";
import { Link } from "react-router-dom";

export default function MealPage({ mealsData, onDeleteClick }) {
  const params = useParams();
  // check here if paramId is not a number
  const paramId = Number.parseInt(params.id, 10);
  // do it only if paramId is a number
  const currentMeal = mealsData.find((meal) => meal.id === paramId);
  //use useMemo for preventing doing the same if component rerenders
  // const currentMeal = () => {
  //   const paramId = Number.parseInt(params.id, 10);
  //   if (paramId) {
  //     return mealsData.find((meal) => meal.id === paramId);
  //   }
  //   return "Error";
  // };

  return (
    <>
      <Typography variant="h6" component="h2">
        {currentMeal.name}
      </Typography>
      <IngridientsList ingridients={currentMeal.ingridients} />
      <Button
        variant="outlined"
        color="error"
        onClick={() => onDeleteClick(currentMeal.id)}
      >
        Delete
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        component={Link}
        to={`/meals/${params.id}/edit`}
      >
        Edit
      </Button>
    </>
  );
}
