import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getLogger } from '@/ui-base/lib/services/logging/LogConfig';

const log = getLogger("ui-base.components.promotionblock");

const Promotion: React.FC<{
data: PromotionInputProps,
wrapperClass?: string
}> = ({data, wrapperClass= "w-1/3 p-4 text-center"}): JSX.Element => {

    log.debug("Promotion data: ", JSON.stringify(data));

    return (
        <div className={wrapperClass}>
            <Image alt="" src={data.image} height={data.height} width={data.width} className="h-60 mx-auto mb-4" loading='lazy' />
            <h4 className="text-xl mb-2">{data.title}</h4>
            <p className="text-gray-600 text-justify mb-50 mt-5 mb-5">{data.description}</p>
            <Link href={data?.buttonLink}>{data.buttonText && <button className="w-full bg-gray-500 text-white text-center mt-2 py-2 rounded">{data.buttonText}</button>}</Link>
        </div>
    );
};

export interface PromotionInputProps {
      image: string;
      title: string;
      description: string;
      buttonText?: string;
      buttonLink?: string;  
      width: number;
      height: number;  
  }

export interface PromotionsTableProps {
  promotions: Array<PromotionInputProps>;
}

const PromotionsTable: React.FC<{promotions: PromotionInputProps[]}> = ( {promotions} ) => {
    return (
        <div className="flex flex-wrap text-justify">
            {promotions.map((promotion, index) => (
                <Promotion
                    key={index}
                    data={promotion}
                />
            ))}
        </div>
    );
};

export { PromotionsTable, Promotion };