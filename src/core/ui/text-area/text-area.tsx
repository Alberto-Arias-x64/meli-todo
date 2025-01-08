import { useState } from "react";
import "./text-area.css";

interface Props {
  placeholder: string;
  value: string;
  children?: React.ReactNode;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Textarea = ({ placeholder, value, children, className, onChange }: Props) => {
  const [data, setData] = useState(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
    onChange(e);
  };
  return (
    <div className={"input padding-small flex-row flex-center " + className}>
      {children}
      <textarea placeholder={placeholder} value={data} onChange={handleChange} />
    </div>
  );
};

export default Textarea;