import "./button.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className, ...props }: Props) => {
  return (
    <button className={"button padding-standard " + className} {...props}>
      {children}
    </button>
  );
};

export default Button;
