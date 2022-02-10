import { uniqueIngridients } from "./helper";

const ingridient = {
  id: 1,
  name: "rice",
  category: "Pasta/Grains",
  quantity: 1,
  dimension: "of them",
  notes: "",
  whereToBuy: "",
};

export const meals = [
  {
    id: 5,
    name: "Spanish-Style Beef & Vegetables",
    ingridients: [
      "Ground Beef",
      "Zucchini",
      "Yellow Onion",
      "Sliced Roasted Red Peppers",
      "Preserved Lemon Purée",
      "Dried Medjool Dates",
      "Mayonnaise",
      "Spanish Spice Blend",
    ],
  },
  {
    id: 6,
    name: "Pork Chorizo, Potato & Fig Bake",
    ingridients: [
      "Pork Chorizo",
      "Potatoes",
      "Sweet Peppers",
      "Dried Turkish Figs",
      "Mayonnaise",
      "Preserved Lemon Purée",
    ],
  },
  {
    id: 7,
    name: "Romesco Beef & Poblano Pepper",
    ingridients: [
      "Ground Beef",
      "Poblano Pepper",
      "Red Onion",
      "Romesco Sauce",
      "Castelvetrano Olives",
      "Tomato Paste",
    ],
    inPlan: true,
  },
  {
    id: 8,
    name: "Pan-Seared Cod",
    ingridients: [
      "Cod Fillets",
      "Arugula",
      "Lemon",
      "Potatoes",
      "Sliced Roasted Almonds",
      "Butter",
      "Honey",
      "Smoky Spice Blend",
      "Red Onion",
    ],
  },
  {
    id: 9,
    name: "Smoky Guajillo Beef & Rice Bowls",
    ingridients: [
      "Ground Beef",
      "Grape Tomatoes",
      "Lime",
      "Carrots",
      "Mayonnaise",
      "Grated Cotija Cheese",
      "Guajillo Chile Pepper Sauce",
      "Mexican Spice Blend",
    ],
  },
  {
    id: 10,
    name: "Spanish-Spiced Salmon & Veggie Quinoa",
    ingridients: [
      "Skin-On Salmon Fillets",
      "Red Quinoa",
      "Lemon",
      "Zucchini",
      "Carrots",
      "Dried Medjool Dates",
      "Sliced Roasted Red Peppers",
      "Spanish Spice Blend",
      "Crushed Red Pepper Flakes",
    ],
  },
  {
    id: 11,
    name: "Calabrian Beef & Gnocchi",
    ingridients: [
      "Ground Beef",
      "Gnocchi",
      "Garlic",
      "Zucchini",
      "Tomato Paste",
      "Mascarpone Cheese",
      "Calabrian Chile Paste",
      "Grated Romano Cheese",
    ],
  },
  {
    id: 12,
    name: "Shawarma-Spiced Cod & Arugula Salad",
    ingridients: [
      "Cod Fillets",
      "Potatoes",
      "Arugula",
      "Kohlrabi",
      "Lemon",
      "Dried Currants",
      "Tahini",
      "Roasted Pistachios",
      "Sweety Drop Peppers",
      "Whole Dried Oregano",
      "Shawarma Spice Blend",
    ],
  },
  {
    id: 13,
    name: "Spicy Pork Sausage Pasta",
    ingridients: [
      "Hot Italian Pork Sausage",
      "Orecchiette Pasta",
      "Grape Tomatoes",
      "Corn",
      "Grated Romano Cheese",
      "Calabrian Chile Paste",
      "Mascarpone Cheese",
    ],
  },
  {
    id: 14,
    name: "Italian Beef & Pesto Rice",
    ingridients: [
      "Ground Beef",
      "Long Grain White Rice",
      "Sweet Peppers",
      "Garlic",
      "Zucchini",
      "Basil Pesto",
      "Capers",
      "Apple Cider Vinegar",
      "Crushed Red Pepper Flakes",
      "Italian Seasoning ",
    ],
  },
];

function changeIngridients(ingridients) {
  let prevId = 0;
  let newIngridients = [];
  ingridients.forEach((ingridient) => {
    const obj = {
      name: ingridient,
      id: prevId++,
      category: "",
      quantity: 1,
      dimension: "of them",
      notes: "",
      whereToBuy: "",
    };
    newIngridients.push(obj);
  });

  return newIngridients;
}

function changeAllMealsIngridients(meals) {
  let newMeals = [];
  meals.forEach((meal) => {
    let newIngridients = changeIngridients(meal.ingridients);
    console.log("newIngridients", newIngridients);
    const newMeal = {
      ingridients: newIngridients,
      name: meal.name,
      id: meal.id,
    };
    newMeals.push(newMeal);
  });
  return newMeals;
}

export const newMeals = changeAllMealsIngridients(meals);

export const allIngridientsData = uniqueIngridients(meals);
