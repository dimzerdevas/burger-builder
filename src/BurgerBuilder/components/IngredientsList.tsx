import React from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import styled from "styled-components";
import { IngredientButton, IngredientImage } from "./index";
import { imgUrl, Ingredient } from "../constants";

const IngredientsListContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  align-self: stretch;
  background-color: #f7941d;
  padding-top: 40px;
`;

const Title = styled(Typography)`
  background-color: #f7941d;
  padding: 10px;
  border-radius: 20px;
`;

const IngredientsContainer = styled(CardContent)`
  display: flex;
  margin-top: 16px;
  margin: auto;
`;

const IngredientName = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Updated */
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
  height: 100%; /* Added */
`;

interface IngredientsListProps {
  ingredients: Ingredient[];
  addIngredient: (ingredient: Ingredient) => void;
}

const IngredientsList: React.FC<IngredientsListProps> = ({
  ingredients,
  addIngredient
}) => {
  return (
    <IngredientsListContainer>
      <Title variant="h4">Add your Ingredients!</Title>
      <IngredientsContainer>
        {ingredients.map((ingredient, index) => (
          <IngredientButton
            styles={{ backgroundColor: "#a3eda3", height: "100%" }}
            onClick={() => addIngredient(ingredient)}
            key={ingredient.id}
          >
            <IngredientImage
              src={`${imgUrl}/${ingredient.src}`}
              alt={ingredient.name}
            />
            <IngredientName>{ingredient.name}</IngredientName>
          </IngredientButton>
        ))}
      </IngredientsContainer>
    </IngredientsListContainer>
  );
};

export default IngredientsList;
