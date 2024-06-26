import { useState } from 'react';
// import image1 from "../../assets/image/mapMark.png"
import image1 from '../../assets/image/mapMark.png';
import image2 from '../../assets/image/playing.webp';
import image3 from '../../assets/image/milenium.webp';
import image4 from '../../assets/image/truck.webp';
import image5 from '../../assets/image/faire.webp';
import image6 from '../../assets/image/adventure.jpg';
import image7 from '../../assets/image/luxury.webp';
import { FaMapMarkerAlt } from 'react-icons/fa';
export function FindItinerary() {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = [
    {
      src: image1,
      title: '3 days of Vintage',
      description: 'description of 3 days of vintage',
      mapIcon: <FaMapMarkerAlt />,
      href: 'https://www.discoverlosangeles.com/visit/3-days-of-vintage-la',
      detailsImg: image2,
      button: <button className="px-6 py-3  bg-gray-900 text-white">Read More</button>
    },
    {
      src: image1,
      title: '4 days of Vintage',
      description: 'description of 3 days of vintage',
      mapIcon: <FaMapMarkerAlt />,
      detailsImg: image3,
      href: 'https://www.discoverlosangeles.com/visit/3-days-of-vintage-la',
      button: <button className="px-6 py-3 bg-gray-900 text-white">Read More</button>
    },
    {
      src: image1,
      title: '5 days of Vintage',
      description: 'description of 3 days of vintage',
      mapIcon: <FaMapMarkerAlt />,
      detailsImg: image4,
      href: 'https://www.discoverlosangeles.com/visit/3-days-of-vintage-la',
      button: <button className="px-6 py-3 bg-gray-900 text-white">Read More</button>
    },
    {
      src: image1,
      title: '6 days of Vintage',
      description: 'description of 3 days of vintage',
      mapIcon: <FaMapMarkerAlt />,
      detailsImg: image5,
      href: 'https://www.discoverlosangeles.com/visit/3-days-of-vintage-la',
      button: <button className="px-6 py-3 bg-gray-900 text-white">Read More</button>
    },
    {
      src: image1,
      title: '7 days of Vintage',
      description: 'description of 3 days of vintage',
      mapIcon: <FaMapMarkerAlt />,
      detailsImg: image6,
      href: 'https://www.discoverlosangeles.com/visit/3-days-of-vintage-la',
      button: <button className="px-6 py-3 bg-gray-900 text-white">Read More</button>
    },
    {
      src: image1,
      title: '8 days of Vintage',
      description: 'description of 3 days of vintage',
      mapIcon: <FaMapMarkerAlt />,
      detailsImg: image7,
      href: 'https://www.discoverlosangeles.com/visit/3-days-of-vintage-la',
      button: <button className="px-6 py-3 bg-gray-900 text-white">Read More</button>
    }
  ];
  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-6 hidden lg:block">
        {data.map((item, index) => (
          <div key={index} className={index === activeIndex ? 'block' : 'hidden'}>
            <img src={item.detailsImg} className="h-96 w-full" alt={item.title} />
            <h1 className="flex items-center lg:text-5xl text-lg text-white mt-10">
              {item.mapIcon}
              <a className="text-5xl hidden hover:underline lg:block" href={item.href}>
                {item.title}
              </a>
              <p className="text-5xl block hover:underline lg:hidden">{item.title}</p>
            </h1>
            <p className="text-white my-10">{item.description}</p>
            {item.button}
          </div>
        ))}
      </div>

      <div className=" lg:col-span-6 col-span-12  flex lg:mx-0">
        <div className="flex flex-col lg:w-auto w-full ">
          {data.map((item, index) => (
            <div
              key={index}
              className={
                index === activeIndex
                  ? 'bg-gray-900 bg-opacity-40  relative hover:bg-blue-gray-900  text-white mb-[1px] items-center flex'
                  : 'mb-[1px] bg-opacity-40 relative hover:bg-blue-gray-900 text-white flex items-center'
              }
            >
              <img src={item.src} className=" mr-4 hidden lg:block" alt={item.title} />
              <p className=" w-10 h-10 mr-4 block lg:hidden">{item.mapIcon}</p>
              <div
                className="flex items-center  cursor-pointer"
                onClick={() => handleTabClick(index)}
              >
                <img src={item.detailsImg} className="h-24 w-24 mr-4" alt={item.title} />
                <a className="lg:text-5xl text-xl  block lg:hidden" href={item.href}>
                  {item.title}
                </a>
                <p className="lg:text-4xl text-xl  hidden lg:block">{item.title}</p>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
