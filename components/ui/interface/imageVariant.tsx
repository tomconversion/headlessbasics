import React, { ReactNode } from 'react';

export interface CtaImageSettings  {
  variant?: CtaImageCTAVariant
}

export type CtaImageCTAVariant =
  | "captionHover"
  | "captionAlways"

const CtaImageVariants = {
  variants: {
    captionHover: {
      hover: true
    },
    captionAlways: {
      hover: false
    }
  }
}
export {CtaImageVariants};
