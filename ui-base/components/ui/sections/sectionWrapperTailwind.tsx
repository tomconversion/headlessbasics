import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '../button';

const SectionWrapperTailwind: React.FC<{ children: ReactNode }> = ({
  children,
  }) => {
    return (
      <section className="p-4 bg-gray-200 flex flex-col items-center">
        <div className="flex flex-row container p-4 m-12">
          {children}
        </div>
      </section>
    );
  };
  
  export default SectionWrapperTailwind;
  
