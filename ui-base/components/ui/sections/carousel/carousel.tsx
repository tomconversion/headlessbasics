import React, { FC } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';


// https://react-slick.neostack.com/docs/example/
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
          <Image src={item.src} alt={item.alt} width={1980} height={600} loading='lazy' />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
