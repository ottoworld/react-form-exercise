"use client";

import { useFormStatus } from "react-dom";
import { ButtonHTMLAttributes } from "react";

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
    <button disabled={pending} {...rest}>
      {pendingText && pending ? pendingText : children}
    </button>
  );
}
