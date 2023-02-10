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
  leftColumnClass = "w-1/3",
  middleColumnClass = "w-1/3",
  rightColumnClass = "w-1/3"
}) => {
  return (
    <SectionWrapperTailwind>
      <div className={leftColumnClass}>
        {leftChild && leftChild}
      </div>
      <div className={middleColumnClass}>
        {middleChild && middleChild}
      </div>
      <div className={rightColumnClass}>
        {rightChild && rightChild}
      </div>
    </SectionWrapperTailwind>
  );
};

export default SectionThreeColumn;

