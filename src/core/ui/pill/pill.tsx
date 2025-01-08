import { ReactNode, HTMLAttributes } from 'react';
import './pill.css';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
}

const Pill = ({ children, className, ...props }: Props) => {
  return <span className={"pill text-small text-bold " + className} {...props}>{children}</span>;
};

export default Pill;
