import React from 'react';

const Promotion: React.FC<{
data: PromotionInputProps,
wrapperClass?: string
}> = ({data, wrapperClass= "w-1/3 p-4 text-center"}): JSX.Element => {
    return (
        <div className={wrapperClass}>
            <img alt="" src={data.image} className="h-40 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{data.title}</h3>
            <p className="text-gray-700 leading-tight  text-justify">{data.description}</p>
            {data.buttonText && <button className="w-full bg-blue-500 text-white mt-2 py-2 rounded">{data.buttonText}</button>}
        </div>
    );
};

export interface PromotionInputProps {
      image: string;
      title: string;
      description: string;
      buttonText?: string;
      buttonLink?: string;   
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