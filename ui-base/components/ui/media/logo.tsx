import React, { lazy, useState } from "react";
import Image from "next/image";
import { ImageInputProps } from "../interface/Images";


const Logo: React.FC<{image: ImageInputProps, className?: string}> = ({ image, className = "" }) => {
    return (
    <div className="flex items-center justify-between">    
      <Image
        src={image.image}
        alt={image.description}
        width={image.width}
        height={image.height}
        loading={"lazy"}
        className={className}
      />
    </div>
  );
};

export default Logo;
