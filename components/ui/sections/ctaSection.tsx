import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '../button';

const CTASection: React.FC<{ data: { title: string; description: string; image: string; buttonText: string; buttonLink: string } }> = ({
    data,
  }) => {
    return (
      <section className="p-4 bg-gray-200 flex flex-col items-center">
        <div className="flex flex-row container p-4 m-12">
          <div className="w-1/3 pr-4">
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
          </div>
          <div className="w-2/3 pl-40">
            <Image src={data.image} alt={data.title} width={1920} height={350} />
          </div>
        </div>
      </section>
    );
  };
  
  export default CTASection;
  
