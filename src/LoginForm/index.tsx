import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { TextField, Button, Typography } from "@material-ui/core";
import styled from "styled-components";
import { loginQuery } from "./constants";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 300px;
  background-color: white;
  padding: 40px;
  border-radius: 20px;
`;

const ErrorMessage = styled(Typography)`
  color: red;
`;

type LoginFormProps = {
  onLogin: (callback: () => void) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    name: "xm",
    password: "exercise"
  });
  const queryClient = useQueryClient();
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const loginMutation = useMutation<string, any>((formData) =>
    axios.post(loginQuery, formData).then((response) => response.data.token)
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await loginMutation.mutateAsync(formData);
      queryClient.setQueryData("token", response);
      onLogin(response);
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <PageContainer>
      <FormContainer onSubmit={handleSubmit}>
        <TextField
          type="text"
          id="name"
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          type="password"
          id="password"
          name="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </FormContainer>
    </PageContainer>
  );
};

export default LoginForm;
