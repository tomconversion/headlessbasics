import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '../button';
import SectionTwoColumn from './sectionTwoColumn';

const CTASectionTwoColumn: React.FC<{ 
  data: { title: string; description: string; image: string; buttonText: string; buttonLink: string } 
  variation?: CtaTwoColumnVariant
}> = ({
  data,
  variation
}) => {

const leftColumn = (
  <>
  <h2 className="text-2xl font-medium">{data.title}</h2>
  <p className="mt-2 text-sm font-light pr-6 pt-6">{data.description}</p>
  <Link href={data.buttonLink}
    className={buttonVariants({
      size: "lg",
      variant: "default",
      color: "primary",
      className: "mt-6"
    })}
  >
    {data.buttonText}
  </Link>
</>
);

const rightColumn = (
  <Image loading='lazy' src={data.image} alt={data.title} width={1920} height={350} />
);

  return (
    <SectionTwoColumn 
    leftChild={leftColumn} 
    rightChild={rightColumn} 
    leftColumnClass={CtaTwoColumnVariants.variants[variation].leftColumn} 
    rightColumnClass={CtaTwoColumnVariants.variants[variation].rightColumn}/>
  );
};

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

export default CTASectionTwoColumn;



