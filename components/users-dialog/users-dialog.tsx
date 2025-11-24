"use client";

import { ReactNode, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import styles from "./users-dialog.module.css";
import NavButtonComponent from "@/components/nav-button/nav-button";

export interface UsersDialogProps {
  children?: ReactNode;
}

export default function UsersDialogComponent({ children }: UsersDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  const handleClick = () => {
    dialogRef.current?.showModal();
  };

  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  return (
    <>
      <NavButtonComponent onClick={handleClick}>Find user</NavButtonComponent>
      <dialog className={styles.dialog} ref={dialogRef}>
        {children}
      </dialog>
    </>
  );
}
