import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '../button';
import SectionWrapperTailwind from './sectionWrapperTailwind';

const SectionOneColumn: React.FC<{ 
  children: ReactNode
}> = ({
  children
}) => {
  return (
    <SectionWrapperTailwind>
        {children}
    </SectionWrapperTailwind>
  );
};

export default SectionOneColumn;

