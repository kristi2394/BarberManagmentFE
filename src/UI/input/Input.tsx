import { useEffect } from "react";
import styles from "./Input.module.css";

export enum InputType {
  text = "text",
  submit = "submit",
  checkbox = "checkbox",
  date = "date",
  email = "email",
  file = "file",
  image = "image",
  number = "number",
  password = "password",
  radio = "radio",
}

export const Input = ({
  type,
  onChange,
  value,
  readOnly,
  reF,
}: {
  type: InputType;
  onChange?: (
    e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  value?: string;
  readOnly?: boolean;
  reF?: React.Ref<HTMLInputElement>;
}) => {
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      readOnly={readOnly}
      className={readOnly ? styles.isReadOnly : styles.inputStyle}
      ref={reF}
    />
  );
};

export default Input;
