import React, { lazy, useState } from "react";
import Image from "next/image";
import { ImageInputProps } from "../interface/Images";
import { CtaImageCTAVariant, CtaImageVariants } from "../interface/imageVariant";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ImageWithOverlay: React.FC<{image: ImageInputProps, 
  variation?: CtaImageCTAVariant}> = ({ image, variation = "captionHover" }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const hoverIsTurnedOn = CtaImageVariants.variants[variation].hover == true;

  return (
    <div
      className="relative"
      onMouseEnter={() => hoverIsTurnedOn && setShowOverlay(true)}
      onMouseLeave={() => hoverIsTurnedOn && setShowOverlay(false)}
    >
      <Image
        src={image.image}
        alt={image.description}
        width={image.width}
        height={image.height}
        loading={"lazy"}
        className="object-cover w-full h-full"
      />
      {(showOverlay || hoverIsTurnedOn == false) && (
        <div
          className="absolute bottom-0 w-full p-3 bg-gray-900 text-white text-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          {image.description}
        </div>
      )}
    </div>
  );
};

export default ImageWithOverlay;
