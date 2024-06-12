/* eslint-disable react/prop-types */
const NextArrow = ({ onClick, currentSlide, slideCount, disable }) => {
  const isLastSlide = currentSlide === slideCount - 1;

  return (
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 right-0 z-10 cursor-pointer text-white ${
        isLastSlide ? 'opacity-50 pointer-events-none' : ''
      }`}
      onClick={() => onClick(isLastSlide, disable)}
    >
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </div>
  );
};

const PrevArrow = ({ onClick, currentSlide, disable }) => {
  const isFirstSlide = currentSlide === 0;

  return (
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 left-0 z-10 cursor-pointer text-white ${
        isFirstSlide ? 'opacity-50 pointer-events-none' : ''
      }`}
      onClick={() => onClick(isFirstSlide, disable)}
    >
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    </div>
  );
};

export { NextArrow, PrevArrow };
