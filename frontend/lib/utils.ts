import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const toastStyle = {
  borderRadius: "4px",
  background: "#222528",
  color: "#fff",
  "white-space": "pre-wrap",
  "word-break": "break-word",
};
