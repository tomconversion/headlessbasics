import React from 'react';
import SectionThreeColumn from './sectionThreeColumn';
import { Promotion, PromotionInputProps } from './promotion/promotionBlock';
import { CtaTwoColumnVariant } from '../interface/columnSettings';

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



