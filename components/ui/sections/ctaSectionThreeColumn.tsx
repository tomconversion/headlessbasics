import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '../button';
import SectionTwoColumn, { CtaTwoColumnVariant, CtaTwoColumnVariants } from './sectionTwoColumn';
import SectionThreeColumn from './sectionThreeColumn';
import { Promotion, PromotionInputProps } from './promotion/promotionBlock';

const CTASectionThreeColumn: React.FC<{ 
  data: PromotionInputProps []
  variation?: CtaTwoColumnVariant
}> = ({
  data,
  variation
}) => {

  let thisPromo = data[0];
  const leftColumn = (  
    <Promotion 
      data={thisPromo} 
      wrapperClass='m-5'
      />
  );
  thisPromo = data[1];
  const rightColumn = (  
    <Promotion 
      data={thisPromo} 
      wrapperClass='m-5'
      />
  );

  thisPromo = data[2];
  const middleColumn = (
    <Promotion 
    data={thisPromo} 
    wrapperClass='m-5'
    />
  );

  return (
    <SectionThreeColumn 
    leftChild={leftColumn} 
    middleChild={middleColumn}
    rightChild={rightColumn} 

    />
  );
};

export default CTASectionThreeColumn;



