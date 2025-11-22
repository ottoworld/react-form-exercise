import { ButtonHTMLAttributes } from "react";
import styles from "./nav-button.module.css";

export default function NavButtonComponent({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
