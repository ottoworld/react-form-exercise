"use client";

import { useFormStatus } from "react-dom";
import { ButtonHTMLAttributes } from "react";
import NavButtonComponent from "@/components/nav-button/nav-button";

export interface SubmitButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  pendingText?: string;
}

export default function SubmitButtonComponent({
  children,
  pendingText,
  ...rest
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <NavButtonComponent disabled={pending} {...rest}>
      {pendingText && pending ? pendingText : children}
    </NavButtonComponent>
  );
}
