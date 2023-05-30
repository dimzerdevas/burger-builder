import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { CSSProperties } from "@material-ui/styles";

interface IngredientButtonProps {
  onClick: () => void;
  styles: CSSProperties;
  children: React.ReactNode;
  key: number;
}

const StyledIngredientButton = styled(Button)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: ${(props: IngredientButtonProps) =>
      props.styles?.height || "inherit"};
    width: 100%;
    max-width: 200px;
    margin-top: ${(props: IngredientButtonProps) =>
      props.styles?.marginTop || 0};
    margin-right: 5px;
    margin-bottom: ${(props: IngredientButtonProps) =>
      props.styles?.marginBottom || 0};
    margin-left: 5px;
    border-radius: 8px;

    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 16px;
    }

    &:hover {
      background-color: ${(props: IngredientButtonProps) =>
        props.styles?.backgroundColor || "inherit"};
    }
  }
`;

const IngredientButton: React.FC<IngredientButtonProps> = ({
  onClick,
  styles,
  children
}) => {
  return (
    <StyledIngredientButton onClick={onClick} styles={styles}>
      {children}
    </StyledIngredientButton>
  );
};

export default IngredientButton;
