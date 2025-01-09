import "./input.css";
import { useInput } from "../../hooks/input";
import { useState } from "react";

interface Props {
  type: string;
  placeholder: string;
  children?: React.ReactNode;
  className?: string;
  update?: string;
  error?: boolean;
  output: (e: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, placeholder, update, children, className, error, output, onChange }: Props) => {
  const [data, setData] = useInput(update);
  const [focused, setFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
    output(e.target.value);
    if (onChange) onChange(e);
  };

  const handleDate = () => {
    if (type === "date") {
      return focused ? "date" : data ? "date" : "text";
    }
    else return type;
  }

  return (
    <div className={`input padding-small flex-row flex-center ${error && "error"} ${className}`}>
      {children}
      <input type={handleDate()} placeholder={placeholder} value={data} onChange={handleChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
    </div>
  );
};

export default Input;