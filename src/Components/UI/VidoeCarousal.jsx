import { useState, useRef, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import CarousalVideoCard from '../CustomsReuseable/CarousalVideoCard';
import { NextArrow, PrevArrow } from '../lib';
import Container from '../Shared/Container';
import image1 from '../../assets/image/image (3).jpeg';
import image2 from '../../assets/image/image (16).jpg';
import image3 from '../../assets/image/image (11).png';
import image4 from '../../assets/image/image (17).jpg';
import image5 from '../../assets/image/vc5.webp';
import image6 from '../../assets/image/vc6.webp';
import image7 from '../../assets/image/vc7.webp';
import image8 from '../../assets/image/vc8.webp';
import image9 from '../../assets/image/vc9.webp';
import image10 from '../../assets/image/vc10.webp';
import image11 from '../../assets/image/vc11.webp';
import image12 from '../../assets/image/vc12.webp';
import image13 from '../../assets/image/vc13.webp';
import image14 from '../../assets/image/vc14.webp';
import image15 from '../../assets/image/vc15.webp';
import image16 from '../../assets/image/vc16.webp';
import image17 from '../../assets/image/vc17.webp';
import image18 from '../../assets/image/vc18.webp';
import image19 from '../../assets/image/vc19.webp';
import { IoMdClose } from 'react-icons/io';

const videoList = [
  {
    thumbnailUrl: image1,
    videoId: '2UkhO78ol8s',
    title: 'OZZIE JUAREZ',
    author: 'Art History in Real Time',
    spanClass: 'lg:col-span-5',
  },
  {
    thumbnailUrl: image2,
    videoId: '3GtvByLHvkk',
    title: 'CAIN CARIAS',
    author: 'Next Generation Artist and Puppeteer',
    spanClass: 'lg:col-span-7',
  },
  {
    thumbnailUrl: image3,
    videoId: 'nUEyy8EB-IY',
    title: 'MISTER CARTOON',
    author: 'La in my work & Everything I do',
    spanClass: 'lg:col-span-7',
  },
  {
    thumbnailUrl: image4,
    videoId: 'vdbe4BYDes4',
    title: 'MARCEDES DORIME',
    author: 'What its mean to be an indigenous person contemporary La',
    spanClass: 'lg:col-span-5',
  },
  {
    thumbnailUrl: image5,
    videoId: 'uNVGaiLb6Y4',
    title: 'Nipsey Hussle Murals',
    author: 'Honoring Nipsey Hussle',
    spanClass: 'lg:col-span-5',
  },
  {
    thumbnailUrl: image6,
    videoId: 'kRGW_heqInA',
    title: 'Estevan Oriol x Amanda Lopez',
    author: 'La Próxima Generación',
    spanClass: 'lg:col-span-5',
  },
  {
    thumbnailUrl: image7,
    videoId: 'Dmpc-ZqG92I',
    title: 'Maurice Harris',
    author: 'Bloom & Plume Coffee centers the other',
    spanClass: 'lg:col-span-5',
  },
  {
    thumbnailUrl: image8,
    videoId: 'N-rBoMLQpvk',
    title: 'Hugh Augustine',
    author: 'Musician, Chef and Activist',
    spanClass: 'lg:col-span-5',
  },
  {
    thumbnailUrl: image9,
    videoId: 'JJVOQifbsZo',
    title: 'Kenturah Davis',
    author: 'Find your sense of wonder and curiosity',
    spanClass: 'lg:col-span-5',
  },
  {
    thumbnailUrl: image10,
    videoId: 'YXLjBEZB4kw',
    title: 'Elisabetta Perfetti',
    author: 'City of Murals',
    spanClass: 'lg:col-span-5',
  },
  {
    thumbnailUrl: image11,
    videoId: 'znsqycSJttI',
    title: 'Gajin Fujita',
    author: 'Violate people’s expectations',
    spanClass: 'lg:col-span-5',
  },
  {
    thumbnailUrl: image12,
    videoId: 'wGrNxwhU9w8',
    title: 'Dechel McKillian',
    author: 'Embrace your power, pay it forward',
    spanClass: 'lg:col-span-5',
  },
  {
    thumbnailUrl: image13,
    videoId: 'omrqHu3Ux2k',
    title: 'Patrick Martinez',
    author: 'The streets of LA reveal themselves',
    spanClass: 'lg:col-span-5',
  },
  {
    thumbnailUrl: image14,
    videoId: 'SSs42V7H9o8',
    title: 'Genevieve Gaignard',
    author: 'Literally in TV, driving through LA',
    spanClass: 'lg:col-span-5',
  },
  {
    thumbnailUrl: image15,
    videoId: 'Xwgs_pk9QSE',
    title: 'Naima Keith',
    author: "This is LA's Museum",
    spanClass: 'lg:col-span-5',
  },
  {
    thumbnailUrl: image16,
    videoId: 'FOwlzLqRJwQ',
    title: 'Essence Harden',
    author: 'Examines the artist community being built',
    spanClass: 'lg:col-span-5',
  },
  {
    thumbnailUrl: image17,
    videoId: 'ZGAX58D_SqI',
    title: 'Olympia Auset',
    author: 'SÜPRMARKT started out of necessity',
    spanClass: 'lg:col-span-5',
  },
  {
    thumbnailUrl: image18,
    videoId: 'oRzpZ2kIzL4',
    title: 'Spencer Paysinger',
    author: 'Find your Hilltop',
    spanClass: 'lg:col-span-5',
  },
  {
    thumbnailUrl: image19,
    videoId: 'oRzpZ2kIzL4',
    title: 'Kohshin Finley',
    author: 'Telling the story of people in LA',
    spanClass: 'lg:col-span-5',
  },
];
const VideoCard = () => {
  const [disable, setDisable] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openModal]);

  const handleOpenModal = video => {
    setSelectedVideo(video);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedVideo(null);
  };

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

  const updateDisableState = currentSlide => {
    const slideCount = videoList.length;
    if (currentSlide === 0 || currentSlide >= slideCount - 3.5) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3.5,
    afterChange: current => {
      updateDisableState(current);
    },
    nextArrow: (
      <NextArrow
        className="bg-black w-96 h-full"
        onClick={handleNextClick}
        isDisabled={disable}
      />
    ),
    prevArrow: <PrevArrow onClick={handlePrevClick} isDisabled={disable} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <div>
        <h1 className="lg:text-5xl text-2xl font-bold lg:ml-44 mt-32 mb-20 tracking-wider uppercase">
          Now Streaming
        </h1>
        <div className={`${disable && 'lg:ml-56'}`}>
          <Slider ref={sliderRef} {...settings}>
            {videoList.map((item, index) => (
              <CarousalVideoCard
                onClick={() => handleOpenModal(item)}
                key={index}
                videoId={item.videoId}
                title={item.title}
                author={item.author}
                thumbnailUrl={item.thumbnailUrl}
              />
            ))}
          </Slider>
          {openModal && selectedVideo && (
            <div className="fixed inset-0 bg-black bg-opacity-50 h-full w-full z-[999] flex justify-center items-center">
              <div className=" p-4 pt-8 rounded relative">
                <button
                  onClick={handleCloseModal}
                  className="absolute -top-2 right-2 bg-black text-white p-2 rounded"
                >
                  <IoMdClose className="h-8 w-8" />
                </button>
                <iframe
                  className="lg:w-[800px] lg:h-[600px]"
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default VideoCard;
