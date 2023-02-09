import React from 'react';

interface PromotionProps {
    imgSrc: string;
    title: string;
    description: string;
    buttonText?: string;
}

const Promotion: React.FC<PromotionProps> = ({ imgSrc, title, description, buttonText }) => {
    return (
        <div className="w-1/3 p-4 text-center">
            <img alt="" src={imgSrc} className="h-40 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700 leading-tight  text-justify">{description}</p>
            {buttonText && <button className="bg-blue-500 text-white mt-2 py-2 px-4 rounded">{buttonText}</button>}
        </div>
    );
};

interface PromotionsTableProps {
  promotions: Array<{
    imgSrc: string;
    title: string;
    description: string;
    buttonText?: string;
  }>;
}

const PromotionsTable: React.FC<PromotionsTableProps> = ({ promotions }) => {
    return (
        <div className="flex flex-wrap text-justify">
            {promotions.map((promotion, index) => (
                <Promotion
                    key={index}
                    imgSrc={promotion.imgSrc}
                    title={promotion.title}
                    description={promotion.description}
                    buttonText={promotion.buttonText}
                />
            ))}
        </div>
    );
};

export { PromotionsTable, Promotion };