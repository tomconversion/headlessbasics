import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '../button';
import SectionWrapperTailwind from './sectionWrapperTailwind';

const SectionTwoColumn: React.FC<{ 
  leftChild?: ReactNode,
  rightChild?: ReactNode, 
  leftColumnClass?: string,
  rightColumnClass?: string,
  middleColumnClass?: string
}> = ({
  leftChild,
  rightChild,
  leftColumnClass = "w-1/3 pr-4",
  rightColumnClass = "w-2/3 pl-40"
}) => {
  return (
    <SectionWrapperTailwind>
      <div className={leftColumnClass}>
        {leftChild}
      </div>
      <div className={rightColumnClass}>
        {rightChild}
      </div>
    </SectionWrapperTailwind>
  );
};

export default SectionTwoColumn;

