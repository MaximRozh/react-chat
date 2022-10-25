import React from "react";
import { useNavigate } from "react-router-dom";
import User from "../mobxStore/AuthStore";
// import { useLoginUserMutation } from "../services/UserService";
import { observer } from "mobx-react-lite";
import { FormWrapper } from "../components/FormWrapper";
import { SignInForm } from "../forms";
import { LoginType } from "../types/AuthTypes";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: LoginType) => {
    await User.login(values);
    navigate("/");
  };

  return (
    <FormWrapper title="Login">
      <SignInForm onSubmit={handleSubmit} />
    </FormWrapper>
  );
};

export default observer(Login);
