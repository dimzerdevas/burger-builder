import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import LoginForm from "./LoginForm";
import BurgerBuilder from "./BurgerBuilder";
import NavigationBar from "./NavigationBar";
import "./styles.css";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [loginToken, setLoginToken] = useState("");

  const handleLogin = (newToken: string) => {
    setLoginToken(newToken);
  };

  const handleLogout = () => {
    setLoginToken("");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <NavigationBar onLogout={handleLogout} isLoggedIn={!!loginToken} />
        <Routes>
          <Route
            path="/"
            element={
              loginToken ? (
                <Navigate to="/burger-builder" />
              ) : (
                <LoginForm onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/burger-builder"
            element={
              loginToken ? (
                <BurgerBuilder token={loginToken} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
