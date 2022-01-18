import { Box, Button, Typography } from "@mui/material";

export default function MealsItem({ item, type, handlePlanBtn }) {
  const actionBtnType = (type) => {
    if (type === "inPlan") {
      return "Remove from plan";
    } else {
      return "Add to plan";
    }
  };
  return (
    <>
      <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
        {item.name}
      </Typography>
      <Box sx={{ mb: 1 }}>
        {item.ingridients.map((ingridient, index) => {
          return (
            <>
              {ingridient}
              {index != item.ingridients.length - 1 ? ", " : ""}
            </>
          );
        })}
      </Box>
      <Box sx={{ mb: 2 }}>
        <Button
          variant="contained"
          sx={{ mr: 2 }}
          onClick={() => handlePlanBtn(item.id)}
        >
          {actionBtnType(type)}
        </Button>
        <Button variant="outlined">Open</Button>
      </Box>
    </>
  );
}
