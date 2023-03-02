import React from 'react';
import SectionThreeColumn from './sectionThreeColumn';
import { ImageInputProps } from '../interface/Images';
import ImageWithOverlay from '../media/ImageWithOverlay';
import { CtaImageCTAVariant } from '../interface/imageVariant';

const ImageSectionThreeColumn: React.FC<{ 
  images: ImageInputProps []
  variation: CtaImageCTAVariant
}> = ({
  images,
  variation
}) => {

  let thisImage = images[0];
  const leftColumn = (  
    <ImageWithOverlay
      image={thisImage}
      variation={variation}
    />
  );
  thisImage = images[1];
  const rightColumn = (  
    <ImageWithOverlay
      image={thisImage}
      variation={variation}
    />
  );

  thisImage = images[2];
  const middleColumn = (
    <ImageWithOverlay
      image={thisImage}
      variation={variation}
    />
  );

  return (
    <SectionThreeColumn 
    leftChild={leftColumn} 
    middleChild={middleColumn}
    rightChild={rightColumn} 

    leftColumnClass = "w-1/3 p-3 min-h-[500px]"
    middleColumnClass = "w-1/3 p-3"
    rightColumnClass = "w-1/3 p-3"
    />
  );
};

export default ImageSectionThreeColumn;



