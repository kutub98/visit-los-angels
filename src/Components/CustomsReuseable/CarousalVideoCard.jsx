/* eslint-disable react/prop-types */
import { useState } from 'react';
import { IoIosVideocam } from 'react-icons/io';

const CarousalVideoCard = ({ videoId, title, author, spanClass, thumbnailUrl, onClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const finalThumbnailUrl = thumbnailUrl || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const handleCardClick = () => {
    setIsPlaying(true);
    onClick();
  };

  return (
    <div
      className={`col-span-12 ${spanClass} relative cursor-pointer spnaBox `}
      onClick={handleCardClick}
    >
      <div className="w-full h-[650px] relative imgBox">
        {!isPlaying ? (
          <img src={finalThumbnailUrl} className=" w-full h-full" alt="Video Thumbnail" />
        ) : (
          <iframe
            width="100%"
            height="450"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>

      {/* text box */}
      <div className="absolute inset-0 top-6 left-6 ">
        <div className="w-[60px] top-6 left-6 h-[50px] bg-red-400 text-white flex justify-center items-center">
          <IoIosVideocam className="h-6 w-6" />
        </div>
      </div>
      <div className="absolute bottom-10 left-0 w-full p-4 text-left">
        <h1 className="text-3xl text-white font-bold my-4 hover:underline">{title}</h1>

        <span className="text-lg text-white hover:underline mt-2">{author}</span>
      </div>
    </div>
  );
};

export default CarousalVideoCard;
