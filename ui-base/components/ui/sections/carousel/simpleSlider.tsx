import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image'

interface CarouselProps {
  images: string[];
}

const SimpleSlider: React.FC<CarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <div className="items-center justify-center max-w-screen">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-6">
            <Image
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-64 object-cover object-center"
            width={1980}
            height={600}
            layout="responsive"
            loading='lazy'
          />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;