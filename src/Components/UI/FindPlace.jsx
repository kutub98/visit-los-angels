import { useState, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../lib';
import Container from '../Shared/Container';
import image1 from '../../assets/image/image (8).png';
import image2 from '../../assets/image/image (10).png';
import image3 from '../../assets/image/image (9).png';
import image4 from '../../assets/image/image (15).jpg';
import FindPlaceCard from '../CustomsReuseable/FindPlaceCard';

const videoList = [
  {
    img: image1,
    title: 'Luke Combs ',
    button1: 'Things to Do',
    button2: 'Attactions & Tours'
  },
  {
    img: image2,
    title: 'Juneteenth Celebration at CAAM',
    button1: 'Things to Do',
    button2: 'Attactions & Tours'
  },
  {
    img: image3,
    title: 'Juneteenth Celebration: T-Pain with Special Guests',
    button1: 'Things to Do',
    button2: 'Attactions & Tours'
  },
  {
    img: image4,
    title: 'Roots Picnic: Hip-Hop is the Love of My Life',
    button1: 'Things to Do',
    button2: 'Attactions & Tours'
  }
];

const FindPlace = () => {
  const [disable, setDisable] = useState(false);

  const sliderRef = useRef(null);

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const updateDisableState = (currentSlide) => {
    if (currentSlide !== 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  const settings = {
    dots: false,
    speed: 500,

    slidesToShow: 3,
    slidesToScroll: 3.5,
    afterChange: (current) => {
      updateDisableState(current);
    },
    nextArrow: (
      <NextArrow className="bg-black w-96 h-full" onClick={handleNextClick} isDisabled={disable} />
    ),
    prevArrow: <PrevArrow onClick={handlePrevClick} isDisabled={disable} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Container className=" ">
      <div className="">
        <h1 className="lg:text-5xl text-2xl font-bold lg:ml-44 mt-32 mb-20 tracking-wider uppercase">
          FIND YOUR PERFECT ITINERARY
        </h1>
        <div className={`${disable ? '' : 'lg:ml-48'}`}>
          <Slider ref={sliderRef} {...settings}>
            {videoList.map((item, index) => (
              <FindPlaceCard
                key={index}
                img={item.img}
                title={item.title}
                button1={item.button1}
                button2={item.button2}
              />
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex justify-center items-center my-9">
        <button className="px-8 py-6 bg-deep-purple-500 text-lg font-semibold tracking-wider text-white ">
          Things to Do
        </button>
      </div>
    </Container>
  );
};

export default FindPlace;
