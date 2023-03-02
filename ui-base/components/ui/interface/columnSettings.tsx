import React, { ReactNode } from 'react';

export interface CtaTwoColumnSettings  {
  variant?: CtaTwoColumns
}

export interface CtaTwoColumns  {
  leftColumn?: string,
  rightColumn?: string
}

export type CtaTwoColumnVariant =
  | "half"
  | "twoThirds"
  | "oneThird"

const CtaTwoColumnVariants = {
  variants: {
    twoThirds: {
      leftColumn: "w-2/3 pr-4",
      rightColumn: "w-1/3"
    },
    oneThird: {
      leftColumn: "w-1/3 pr-4",
      rightColumn: "w-2/3"
    },
    half: {
      leftColumn: "w-1/2 pr-4",
      rightColumn: "w-1/2"
    }
  }
}
export {CtaTwoColumnVariants};
