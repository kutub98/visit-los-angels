//
import { useState } from 'react';
import { MdClose, MdRepeat } from 'react-icons/md';
import { GoPlus, GoXCircle } from 'react-icons/go';
import { slides } from '../lib/slides';

const AboutTown = () => {
  const [details, setDetails] = useState(null);
  const [playVideo, setPlayVideo] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');

  const handleDetails = (slide) => {
    setDetails(slide.details);
    setBackgroundImage(slide.bgImage);
    setPlayVideo(null); // Reset video state when showing details
  };

  const handlePlayVideo = (videoId) => {
    setPlayVideo(videoId);
  };

  const closeDetails = () => {
    setDetails(null);
    setBackgroundImage('');
    setPlayVideo(null);
  };

  const closePlayVideo = () => {
    setPlayVideo(null);
  };

  const slidesPerPage = 4;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlides = () => {
    const newIndex = (currentSlideIndex + slidesPerPage) % slides.length;
    setCurrentSlideIndex(newIndex);
    setDetails(null);
    setBackgroundImage('');
  };

  return (
    <div className="mainContainerBox">
      <div className="grid col-span-12 grid-cols-12 gap-1 containerBOX">
        {/* About */}
        <div className="lg:col-span-3 col-span-12 w-full flex mx-auto lg:justify-center justify-between items-center lg:h-[500px] py-auto my-2 lg:my-0 iconContainer text-left flex-col px-8">
          <h1 className="text-2xl font-semibold aboutTown w-full my-6">About Town</h1>
          <h1 className="text-justify">
            Los Angeles is home to renowned museums, unique hotels, diverse experiences and 75 miles
            of sunny coastline. The best way to discover LA is by exploring all of the vibrant
            multicultural neighborhoods.
          </h1>
        </div>
        {/* Slide */}
        {slides.slice(currentSlideIndex, currentSlideIndex + slidesPerPage).map((slide) => (
          <div
            key={slide.id}
            className={`lg:col-span-2 col-span-12 w-full flex mx-auto text-center lg:justify-center justify-between items-center lg:h-[500px] py-auto h-[80px] my-2 lg:my-0 iconContainer`}
            onMouseEnter={() => {
              const mainContainer = document.querySelector('.mainContainerBox');
              if (mainContainer) {
                mainContainer.style.backgroundImage = `url(${slide.image})`;
              }
            }}
            onMouseLeave={() => {
              const mainContainer = document.querySelector('.mainContainerBox');
              if (mainContainer) {
                mainContainer.style.backgroundImage = `url(${slides[currentSlideIndex].image})`;
              }
            }}
          >
            <div className="iconMainBox">
              <div className="w-20 h-20 flex justify-center text-center items-center rounded-full text-white iconBox">
                <GoPlus
                  className="h-8 w-8 iconHover mx-auto cursor-pointer"
                  onClick={() => handleDetails(slide)}
                />
              </div>
              <h1>{slide.title}</h1>
            </div>
          </div>
        ))}
        {/* Click for carousel */}
        <div className="lg:col-span-1 col-span-12 w-full flex mx-auto text-center justify-center items-center lg:h-[500px] py-auto h-[80px] my-2 lg:my-0 iconContainer">
          <MdRepeat className="w-8 h-8 text-white cursor-pointer" onClick={nextSlides} />
        </div>
      </div>

      {details && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[98%] h-[400px]"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {!playVideo ? (
            <div className="CityDetailsBg lg:w-[500px] w-full h-auto absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:left-1/3 left-1/2 p-4 text-white">
              <div className="flex items-center space-x-4 px-4">
                <div className="flex items-center space-x-2 hover:underline">
                  <h1 className="text-3xl text-white font-bold">{details.headline}</h1>
                  <p className="h-12 w-12 mx-1 bg-red-500 rounded-full text-cener flex items-center justify-center cursor-pointer hover:underline">
                    {details.arrow}
                  </p>
                </div>
                {details.videoId && (
                  <p
                    className="h-12 w-12 bg-red-500 rounded-full text-cener flex items-center justify-center cursor-pointer"
                    onClick={() => handlePlayVideo(details.videoId)}
                  >
                    {details.vidIcon}
                  </p>
                )}
              </div>
              <p className="p-4">{details.des}</p>
            </div>
          ) : (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[98%] h-full px-10 flex">
              <iframe
                className="w-2/3 h-full mx-auto"
                src={`https://www.youtube.com/embed/${playVideo}`}
                title={details?.headline}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <MdClose
                className="bg-black h-8 w-8 text-white cursor-pointer"
                onClick={closePlayVideo}
              />
            </div>
          )}
          <div className="flex justify-end px-10">
            <div className="flex justify-center text-center items-center h-12 w-12 rounded-full closeButtonBG p-2">
              <GoXCircle className="h-8 w-8 cursor-pointer" onClick={closeDetails} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutTown;
