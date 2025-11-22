"use client";

import { ReactNode, useRef } from "react";
import styles from "./users-dialog.module.css";
import NavButtonComponent from "@/components/nav-button/nav-button";

export interface UsersDialogProps {
  children?: ReactNode;
}

export default function UsersDialogComponent({ children }: UsersDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClick = () => {
    dialogRef.current?.showModal();
  };

  return (
    <>
      <NavButtonComponent onClick={handleClick}>Find user</NavButtonComponent>
      <dialog className={styles.dialog} ref={dialogRef}>
        {children}
      </dialog>
    </>
  );
}
