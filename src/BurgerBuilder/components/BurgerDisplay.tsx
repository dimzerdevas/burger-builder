import React from "react";
import styled from "styled-components";
import { Card, CardContent, Typography } from "@material-ui/core";
import { imgUrl, bunBottom, bunTop, Ingredient } from "../constants";
import { BunImage, IngredientButton, IngredientImage } from "./index";

const StyledBurgerDisplayContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  align-self: stretch;
  padding-top: 40px;
`;

const Title = styled(Typography)`
  background-color: #f7941d;
  padding: 10px;
  border-radius: 20px;
`;

const StyledBurgerDisplayContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BurgerIngredientsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

interface BurgerDisplayProps {
  burgerIngredients: Ingredient[];
  removeIngredient: (index: number) => void;
}

const BurgerDisplay: React.FC<BurgerDisplayProps> = ({
  burgerIngredients,
  removeIngredient
}) => {
  return (
    <StyledBurgerDisplayContainer>
      <Title variant="h4">Enjoy Your Burger!</Title>
      <StyledBurgerDisplayContent>
        <BunImage
          src={`${imgUrl}/${bunTop}`}
          alt="Bun Top"
          styles={{ zIndex: 1 }}
        />
        <BurgerIngredientsContainer>
          {burgerIngredients.map((ingredient, index) => (
            <IngredientButton
              styles={{
                backgroundColor: "#eda6a6",
                marginTop: "-15px",
                marginBottom: "-10px",
                height: "50px"
              }}
              key={index}
              onClick={() => removeIngredient(index)}
            >
              <IngredientImage
                src={`${imgUrl}/${ingredient.src}`}
                alt={ingredient.name}
              />
            </IngredientButton>
          ))}
        </BurgerIngredientsContainer>
        <BunImage src={`${imgUrl}/${bunBottom}`} alt="Bun Bottom" styles={{}} />
      </StyledBurgerDisplayContent>
    </StyledBurgerDisplayContainer>
  );
};

export default BurgerDisplay;
