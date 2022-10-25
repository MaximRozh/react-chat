import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema";
import { MyButton, InputField } from "../../components/UI";
import { LoginType } from "../../types/AuthTypes";

interface SingUpFormProps {
  onSubmit: (value: LoginType) => void;
}

const SignInForm: React.FC<SingUpFormProps> = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: "100%",
        display: "flex",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <InputField
        label="E-Mail"
        error={Boolean(errors.email?.message)}
        helperText={errors.email?.message}
        type="email"
        {...register("email")}
        fullWidth
      />
      <InputField
        type={showPassword ? "text" : "password"}
        handleShowPassword={handleShowPassword}
        label="Password"
        error={Boolean(errors.password?.message)}
        helperText={errors.password?.message}
        {...register("password")}
        fullWidth
      />
      <MyButton
        disabled={!isValid}
        type="submit"
        size="large"
        variant="contained"
        fullWidth
      >
        Log in
      </MyButton>
    </form>
  );
};

export default SignInForm;
