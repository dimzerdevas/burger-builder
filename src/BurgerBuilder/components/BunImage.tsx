import React from "react";
import styled from "styled-components";
import { CSSProperties } from "@material-ui/styles";

const StyledBunImage = styled.img`
  width: 50%;
  height: auto;
  max-width: 300px;
  margin-bottom: 2px;
  z-index: ${(props: BunImageProps) => props.styles?.zIndex || "auto"};
`;

interface BunImageProps {
  src: string;
  alt: string;
  styles: CSSProperties;
}

const BurgerImage: React.FC<BunImageProps> = ({ src, alt, styles }) => {
  return <StyledBunImage src={src} alt={alt} styles={styles} />;
};

export default BurgerImage;
