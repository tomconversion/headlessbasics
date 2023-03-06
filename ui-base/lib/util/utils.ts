import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isNumeric = (n: any): n is number =>
  !isNaN(parseFloat(n)) && isFinite(n)


  export function replaceChar(str: string, charToReplace: string, replacementChar: string): string {
    // Use the String.replace() method with a regular expression to replace all occurrences of the character
    const replacedString = str.replace(new RegExp(charToReplace, 'g'), replacementChar);
    return replacedString;
  }
  