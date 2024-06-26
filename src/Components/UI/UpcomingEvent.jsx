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

import EventFeturs from '../CustomsReuseable/EventFeaturs';

const videoList = [
  {
    img: image1,
    title: 'Luke Combs ',
    date: 'June 16, 2024 ',
    time: '5:35pm-8:00pm',
    type: 'Music'
  },
  {
    img: image2,
    title: 'Juneteenth Celebration at CAAM',
    date: 'June 16, 2024 ',
    time: '5:35pm-8:00pm',
    type: 'Cultural Heritage'
  },
  {
    img: image3,
    title: 'Juneteenth Celebration: T-Pain with Special Guests',
    date: 'June 16, 2024 ',
    time: '5:35pm-8:00pm',
    type: 'Festivals'
  },
  {
    img: image4,
    title: 'Roots Picnic: Hip-Hop is the Love of My Life',
    date: 'June 16, 2024 ',
    time: '5:35pm-8:00pm',
    type: 'Music'
  },
  {
    img: image4,
    title: 'Roots Picnic: Hip-Hop is the Love of My Life',
    date: 'June 16, 2024 ',
    time: '5:35pm-8:00pm',
    type: 'Music'
  },
  {
    img: image4,
    title: 'Roots Picnic: Hip-Hop is the Love of My Life',
    date: 'June 16, 2024 ',
    time: '5:35pm-8:00pm',
    type: 'Music'
  },
  {
    img: image4,
    title: 'Roots Picnic: Hip-Hop is the Love of My Life',
    date: 'June 16, 2024 ',
    time: '5:35pm-8:00pm',
    type: 'Music'
  }
];
const UpCommingEvent = () => {
  const [disable, setDisable] = useState(true);
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
    slidesToScroll: 3,
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
          UP COMING EVENTS
        </h1>
        <div className={`${disable ? '' : 'lg:ml-56'}`}>
          <Slider ref={sliderRef} {...settings}>
            {videoList.map((item, index) => (
              <EventFeturs
                key={index}
                img={item.img}
                title={item.title}
                type={item.type}
                date={item.date}
                time={item.time}
              />
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex justify-center items-center my-9">
        <button className="px-8 py-6 bg-deep-purple-500 text-xl font-semibold tracking-wider text-white ">
          View All Events
        </button>
      </div>
    </Container>
  );
};

export default UpCommingEvent;
