import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '../button';
import SectionWrapperTailwind from './sectionWrapperTailwind';

const SectionThreeColumn: React.FC<{ 
  leftChild?: ReactNode,
  middleChild?: ReactNode,
  rightChild?: ReactNode, 
  leftColumnClass?: string,
  rightColumnClass?: string,
  middleColumnClass?: string
}> = ({
  leftChild,
  middleChild,
  rightChild,
  leftColumnClass = "w-1/3 pr-4",
  middleColumnClass = "w-2/3 pl-40",
  rightColumnClass = "w-2/3 pl-40"
}) => {
  return (
    <SectionWrapperTailwind>
      <div className={leftColumnClass}>
        {leftChild}
      </div>
      <div className={middleColumnClass}>
        {middleChild}
      </div>
      <div className={rightColumnClass}>
        {rightChild}
      </div>
    </SectionWrapperTailwind>
  );
};

export default SectionThreeColumn;

