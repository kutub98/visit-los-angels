// import Container from '../Shared/Container';
// import CarousalVideoCard from '../CustomsReuseable/CarousalVideoCard';
// import { Carousel } from '@material-tailwind/react';
// import image1 from '../../assets/image/image (3).jpeg';
// import image2 from '../../assets/image/image (16).jpg';
// import image3 from '../../assets/image/image (11).png';
// import image4 from '../../assets/image/image (17).jpg';
// import image5 from '../../assets/image/vc5.webp';
// import image6 from '../../assets/image/vc6.webp';
// import image7 from '../../assets/image/vc7.webp';
// import image8 from '../../assets/image/vc8.webp';
// import image9 from '../../assets/image/vc9.webp';
// import image10 from '../../assets/image/vc10.webp';
// import image11 from '../../assets/image/vc11.webp';
// import image12 from '../../assets/image/vc12.webp';
// import image13 from '../../assets/image/vc13.webp';
// import image14 from '../../assets/image/vc14.webp';
// import image15 from '../../assets/image/vc15.webp';
// import image16 from '../../assets/image/vc16.webp';
// import image17 from '../../assets/image/vc17.webp';
// import image18 from '../../assets/image/vc18.webp';
// import image19 from '../../assets/image/vc19.webp';

// const videoList = [
//   {
//     thumbnailUrl: image1,
//     videoId: '2UkhO78ol8s',
//     title: 'OZZIE JUAREZ',
//     author: 'Art History in Real Time',
//     spanClass: 'lg:col-span-5',
//   },
//   {
//     thumbnailUrl: image2,
//     videoId: '3GtvByLHvkk',
//     title: 'CAIN CARIAS',
//     author: 'Next Generation Artist and Puppeteer',
//     spanClass: 'lg:col-span-7',
//   },
//   {
//     thumbnailUrl: image3,
//     videoId: 'nUEyy8EB-IY',
//     title: 'MISTER CARTOON',
//     author: 'La in my work & Everything I do',
//     spanClass: 'lg:col-span-7',
//   },
//   {
//     thumbnailUrl: image4,
//     videoId: 'vdbe4BYDes4',
//     title: 'MARCEDES DORIME',
//     author: 'What its mean to be an indigenous person contemporary La',
//     spanClass: 'lg:col-span-5',
//   },
//   {
//     thumbnailUrl: image5,
//     videoId: 'uNVGaiLb6Y4',
//     title: 'Nipsey Hussle Murals',
//     author: 'Honoring Nipsey Hussle',
//     spanClass: 'lg:col-span-5',
//   },
//   {
//     thumbnailUrl: image6,
//     videoId: 'kRGW_heqInA',
//     title: 'Estevan Oriol x Amanda Lopez',
//     author: 'La Próxima Generación',
//     spanClass: 'lg:col-span-5',
//   },
//   {
//     thumbnailUrl: image7,
//     videoId: 'Dmpc-ZqG92I',
//     title: 'Maurice Harris',
//     author: 'Bloom & Plume Coffee centers the other',
//     spanClass: 'lg:col-span-5',
//   },
//   {
//     thumbnailUrl: image8,
//     videoId: 'N-rBoMLQpvk',
//     title: 'Hugh Augustine',
//     author: 'Musician, Chef and Activist',
//     spanClass: 'lg:col-span-5',
//   },
//   {
//     thumbnailUrl: image9,
//     videoId: 'JJVOQifbsZo',
//     title: 'Kenturah Davis',
//     author: 'Find your sense of wonder and curiosity',
//     spanClass: 'lg:col-span-5',
//   },
//   {
//     thumbnailUrl: image10,
//     videoId: 'YXLjBEZB4kw',
//     title: 'Elisabetta Perfetti',
//     author: 'City of Murals',
//     spanClass: 'lg:col-span-5',
//   },
//   {
//     thumbnailUrl: image11,
//     videoId: 'znsqycSJttI',
//     title: 'Gajin Fujita',
//     author: 'Violate people’s expectations',
//     spanClass: 'lg:col-span-5',
//   },
//   {
//     thumbnailUrl: image12,
//     videoId: 'wGrNxwhU9w8',
//     title: 'Dechel McKillian',
//     author: 'Embrace your power, pay it forward',
//     spanClass: 'lg:col-span-5',
//   },
//   {
//     thumbnailUrl: image13,
//     videoId: 'omrqHu3Ux2k',
//     title: 'Patrick Martinez',
//     author: 'The streets of LA reveal themselves',
//     spanClass: 'lg:col-span-5',
//   },
//   {
//     thumbnailUrl: image14,
//     videoId: 'SSs42V7H9o8',
//     title: 'PatrGenevieve Gaignard',
//     author: 'Literally in TV, driving through LA',
//     spanClass: 'lg:col-span-5',
//   },
//   {
//     thumbnailUrl: image15,
//     videoId: 'Xwgs_pk9QSE',
//     title: 'Naima Keith',
//     author: "This is LA's Museum",
//     spanClass: 'lg:col-span-5',
//   },
//   {
//     thumbnailUrl: image16,
//     videoId: 'FOwlzLqRJwQ',
//     title: 'Essence Harden',
//     author: 'Examines the artist community being built',
//     spanClass: 'lg:col-span-5',
//   },
//   {
//     thumbnailUrl: image17,
//     videoId: 'ZGAX58D_SqI',
//     title: 'Olympia Auset',
//     author: 'SÜPRMARKT started out of necessity',
//     spanClass: 'lg:col-span-5',
//   },
//   {
//     thumbnailUrl: image18,
//     videoId: 'oRzpZ2kIzL4',
//     title: 'Spencer Paysinger',
//     author: 'Find your Hilltop',
//     spanClass: 'lg:col-span-5',
//   },
//   {
//     thumbnailUrl: image19,
//     videoId: 'oRzpZ2kIzL4',
//     title: 'Kohshin Finley',
//     author: 'Telling the story of people in LA',
//     spanClass: 'lg:col-span-5',
//   },
// ];

// const VideoCard = () => {
//   return (
//     <div>
//       <h1 className="text-4xl font-bold ml-56 my-10 tracking-wider uppercase">
//         Now Streming
//       </h1>
//       <Container className="pl-48">
//         <Carousel transition={{ duration: 1 }} className="">
//           {videoList.map((item, index) => (
//             <CarousalVideoCard
//               key={index}
//               videoId={item.videoId}
//               title={item.title}
//               author={item.author}
//               spanClass={item.spanClass}
//               thumbnailUrl={item.thumbnailUrl}
//             />
//           ))}
//         </Carousel>
//       </Container>
//     </div>
//   );
// };
// export default VideoCard;

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from '../Shared/Container';
import CarousalVideoCard from '../CustomsReuseable/CarousalVideoCard';
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
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 5,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className="text-4xl font-bold ml-56 my-10 tracking-wider uppercase">
        Now Streaming
      </h1>
      <Container className="pl-48">
        <Slider {...settings}>
          {videoList.map((item, index) => (
            <div key={index}>
              <CarousalVideoCard
                videoId={item.videoId}
                title={item.title}
                author={item.author}
                spanClass={item.spanClass}
                thumbnailUrl={item.thumbnailUrl}
              />
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default VideoCard;
