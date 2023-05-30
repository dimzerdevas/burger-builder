import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  background-color: white;
  border-radius: 20px;
  margin: 30px 20px;
`;

type NavigationBarProps = {
  onLogout: () => void;
  isLoggedIn: boolean;
};

const NavigationBar: React.FC<NavigationBarProps> = ({
  onLogout,
  isLoggedIn
}) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <NavBarContainer>
      <Button component={Link} to="/burger-builder" color="primary">
        Burger Builder
      </Button>
      <Button onClick={handleLogout} color="primary">
        {isLoggedIn ? "Logout" : "Login"}
      </Button>
    </NavBarContainer>
  );
};

export default NavigationBar;
