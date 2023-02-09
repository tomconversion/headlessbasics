import React, { FC } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

interface Props {
  items: Array<{ src: string; alt: string }>;
}

const Carousel: FC<Props> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index}>
          <Image src={item.src} alt={item.alt} width={800} height={600} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
