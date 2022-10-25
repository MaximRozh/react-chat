import React from "react";
import { Grid, Avatar, Badge, Box, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema";
import { InputField, MyButton } from "../../components/UI";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import { SingUpType } from "../../types/AuthTypes";

interface SingUpFormProps {
  onSubmit: (values: SingUpType) => void;
}

const defaultValues = {
  firstName: "",
  lastName: "",
  password: "",
  email: "",
  picture: "",
};

const SingUpForm: React.FC<SingUpFormProps> = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
    mode: "onChange",
  });

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files as FileList;
    const data = new FormData();
    data.append("file", file[0]);
    data.append("upload_preset", "n5bdenrx");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dox9n1ulh/image/upload",
        data
      );

      const { url } = uploadRes.data;
      setValue("picture", url);
    } catch (error) {
      console.log(error);
    }
  };

  const imageUrl = watch("picture");
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
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Badge
              color="success"
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={<CloudUploadIcon />}
            >
              <IconButton component="label">
                <Avatar
                  sx={{ width: 72, height: 72 }}
                  alt="User Image"
                  src={imageUrl || ""}
                />
                <InputField
                  type="file"
                  required={false}
                  {...register("picture")}
                  onChange={uploadImage}
                  sx={{ display: "none" }}
                />
              </IconButton>
            </Badge>
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <InputField
            type="text"
            placeholder="First name"
            label="First Name"
            required
            fullWidth
            {...register("firstName")}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName?.message}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <InputField
            type="text"
            placeholder="Last Name"
            label="Last Name"
            required
            fullWidth
            {...register("lastName")}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName?.message}
          />
        </Grid>
        <Grid item sm={12}>
          <InputField
            type="text"
            placeholder="E-mail"
            label="E-mail"
            required
            fullWidth
            {...register("email")}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
        </Grid>
        <Grid item sm={12}>
          <InputField
            type={showPassword ? "text" : "password"}
            handleShowPassword={handleShowPassword}
            placeholder="Password"
            label="Password"
            required
            fullWidth
            {...register("password")}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
          />
        </Grid>
      </Grid>
      <MyButton
        disabled={!isValid}
        type="submit"
        size="large"
        variant="contained"
        fullWidth
      >
        Sign Up
      </MyButton>
    </form>
  );
};

export default SingUpForm;
