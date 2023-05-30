import React from "react";
import styled from "styled-components";
import { isMobileDevice } from "../utils";

const StyledBurgerBuilderContainer = styled.div`
  display: flex;
  flex-direction: ${isMobileDevice() ? "column" : "row"};
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  padding-top: 40px;
  background-color: #f7941d;
`;
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface BurgerBuilderContainerProps {
  children: React.ReactNode;
}

const BurgerBuilderContainer: React.FC<BurgerBuilderContainerProps> = ({
  children
}) => {
  return (
    <MainContainer>
      <StyledBurgerBuilderContainer>{children}</StyledBurgerBuilderContainer>
    </MainContainer>
  );
};

export default BurgerBuilderContainer;
