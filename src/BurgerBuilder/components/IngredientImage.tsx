import React from "react";
import styled from "styled-components";

const StyledIngredientImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 150px;
  margin-right: 8px;
  margin: 0 auto;
`;

interface IngredientImageProps {
  src: string;
  alt: string;
}

const IngredientImage: React.FC<IngredientImageProps> = ({ src, alt }) => {
  return <StyledIngredientImage src={src} alt={alt} />;
};

export default IngredientImage;
