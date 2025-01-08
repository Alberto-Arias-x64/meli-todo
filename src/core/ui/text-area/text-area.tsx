import { useInput } from "../../hooks/input";
import "./text-area.css";

interface Props {
  placeholder: string;
  className?: string;
  update?: string;
  error?: boolean;
  output: (e: string) => void;
}

const Textarea = ({ placeholder, update, className, output }: Props) => {
  const [data, setData] = useInput(update);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.target.value);
    output(e.target.value);
  };
  return (
    <div className={"input padding-small flex-row flex-center " + className}>
      <textarea placeholder={placeholder} value={data} onChange={handleChange} />
    </div>
  );
};

export default Textarea;