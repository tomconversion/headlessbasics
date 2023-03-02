import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isNumeric = (n: any): n is number =>
  !isNaN(parseFloat(n)) && isFinite(n)