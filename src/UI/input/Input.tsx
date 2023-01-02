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
  placeHolder,
  customClass,
  name,
  id,
  min,
}: {
  type: InputType;
  onChange?: (
    e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  value?: string | number;
  readOnly?: boolean;
  reF?: React.Ref<HTMLInputElement>;
  placeHolder?: string;
  customClass?: string;
  name?: string;
  id?: string;
  min?: number;
}) => {
  const classStyleInput = ` ${
    readOnly ? styles.isReadOnly : styles.inputStyle
  } ${customClass ? customClass : ""}`;
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      readOnly={readOnly}
      className={classStyleInput}
      ref={reF}
      placeholder={placeHolder}
      name={name}
      id={id}
      min={min}
    />
  );
};

export default Input;
