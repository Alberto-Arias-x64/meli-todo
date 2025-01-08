import { ReactNode, HTMLAttributes } from "react";
import "./card.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className, ...props }: Props) => {
  return (
    <div {...props} className={"card padding-standard " + className}>
      {children}
    </div>
  );
};

export default Card;
