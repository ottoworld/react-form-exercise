import { HTMLAttributes } from "react";
import styles from "./page-title.module.css";

export default function PageTitleComponent({
  children,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={styles.title} {...rest}>
      {children}
    </h2>
  );
}
