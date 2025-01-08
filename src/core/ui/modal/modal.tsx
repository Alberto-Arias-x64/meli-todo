import { useEffect, useState } from "react";
import "./modal.css";

interface Props {
  update: boolean;
  children: React.ReactNode;
}

const Modal = ({ children, update }: Props) => {
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(update);
  }, [update]);
  return state && <div className="modal-card flex-column flex-center padding-small">{children}</div>;
};

export default Modal;
