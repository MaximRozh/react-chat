import React from "react";
import { FormWrapper } from "../components/FormWrapper";
import { SingUpForm } from "../forms";
import User from "../mobxStore/AuthStore";
import { SingUpType } from "../types/AuthTypes";

const Singup = () => {
  const handleSubmit = async (values: SingUpType) => {
    await User.singUp(values);
  };

  return (
    <FormWrapper title="Registration">
      <SingUpForm onSubmit={handleSubmit} />
    </FormWrapper>
  );
};

export default Singup;
