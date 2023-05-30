import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import useIngredients from "./useIngredients";
import {
  BurgerBuilderContainer,
  BurgerDisplay,
  IngredientsList
} from "./components";

const BuilderTitle = styled(Typography)`
  font-size: 24px;
  color: white;
  margin: 30px 20px;
  padding-left: 40px;
`;

const BurgerBuilder: React.FC<{ token: string }> = ({ token }) => {
  const { data, isLoading, isError } = useIngredients(token);

  interface Ingredient {
    id: number;
    name: string;
    src: string;
  }

  const ingredients: Ingredient[] = data ? [...data] : [];

  const [burgerIngredients, setBurgerIngredients] = useState<Ingredient[]>([]);

  const addIngredient = (ingredient: Ingredient) => {
    setBurgerIngredients((prevIngredients) => [...prevIngredients, ingredient]);
  };

  const removeIngredient = (index: number) => {
    setBurgerIngredients((prevIngredients) =>
      prevIngredients.filter((_, ingredientIndex) => ingredientIndex !== index)
    );
  };

  if (isLoading) {
    return <Typography>Loading ingredients...</Typography>;
  }

  if (isError) {
    return <Typography>Error occurred while fetching ingredients.</Typography>;
  }

  return (
    <>
      <BuilderTitle variant="h2">Make your own Burger</BuilderTitle>
      <BurgerBuilderContainer>
        <IngredientsList
          ingredients={ingredients}
          addIngredient={addIngredient}
        />
        <BurgerDisplay
          burgerIngredients={burgerIngredients}
          removeIngredient={removeIngredient}
        />
      </BurgerBuilderContainer>
    </>
  );
};

export default BurgerBuilder;
