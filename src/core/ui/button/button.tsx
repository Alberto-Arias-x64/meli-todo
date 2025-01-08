import "./button.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "PRIMARY" | "SECONDARY";
}

const Button = ({ children, variant, className, ...props }: Props) => {
  return (
    <button className={`button padding-standard ${variant === "SECONDARY" && "secondary "} ` + className} {...props}>
      {children}
    </button>
  );
};

export default Button;
