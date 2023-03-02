import React, { ReactNode } from 'react';
import SectionThreeColumn from './sectionThreeColumn';
import { CtaImageCTAVariant } from '../interface/imageVariant';

const DynamicThreeColumn: React.FC<{ 
  children: ReactNode  
  variation?: CtaImageCTAVariant
}> = ({    
  children,
  variation,
}) => {

  return (
    <SectionThreeColumn 
    leftChild={children[0]} 
    middleChild={children[1]}
    rightChild={children[2]} 

    leftColumnClass = "w-1/3 p-3 min-h-[500px]"
    middleColumnClass = "w-1/3 p-3"
    rightColumnClass = "w-1/3 p-3"
    />
  );
};

interface Props {
  children: React.ReactNode;
}

export const DynamicColumn: React.FC<Props> = ({ children }) => (
  <>{children}</>
);

export default DynamicThreeColumn;






