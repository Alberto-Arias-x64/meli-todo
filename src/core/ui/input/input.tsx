import "./input.css";
import { useInput } from "../../hooks/input";

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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
    output(e.target.value);
    if (onChange) onChange(e);
  };
  return (
    <div className={`input padding-small flex-row flex-center ${error && "error"} ${className}`}>
      {children}
      <input type={type} placeholder={placeholder} value={data} onChange={handleChange} />
    </div>
  );
};

export default Input;