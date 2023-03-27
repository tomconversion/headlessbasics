import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '../button';

const SectionWrapperTailwind: React.FC<{ children: ReactNode }> = ({
  children,
  }) => {
    return (
    <section className="w-full py-4 bg-gray-100 flex flex-col items-center">
      <div className="container mx-auto p-4">
        <div className="flex flex-row">
          {children}
        </div>
      </div>
    </section>
    );
  };
  
  export default SectionWrapperTailwind;
  
