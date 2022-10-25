import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { InputField, MyButton } from "../UI";
import { useForm } from "react-hook-form";

type Message = { message: string };

interface MessageFormProp {
  onSubmit: (values: Message) => void;
}

const MessageForm: React.FC<MessageFormProp> = ({ onSubmit }) => {
  const { register, handleSubmit, resetField } = useForm({
    defaultValues: {
      message: "",
    },
  });

  const submitWithResetField = (value: Message) => {
    onSubmit(value);
    resetField("message");
  };

  return (
    <form
      onSubmit={handleSubmit(submitWithResetField)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <InputField
        fullWidth
        sx={{ width: "100%" }}
        {...register("message")}
        required={false}
        label="Type your message..."
        variant="outlined"
      />
      <MyButton
        sx={{ height: "56px" }}
        type="submit"
        aria-label="send"
        variant="contained"
        color="primary"
        endIcon={<SendIcon />}
      >
        Send
      </MyButton>
    </form>
  );
};

export default React.memo(MessageForm);
