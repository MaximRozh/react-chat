import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("E-mail is required")
    .min(3, "Must be more than 3 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(3, "Must be more than 3 characters"),
});
