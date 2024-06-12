import Container from '../Shared/Container';
import CarousalVideoCard from '../CustomsReuseable/CarousalVideoCard';
import { Carousel } from '@material-tailwind/react';
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
    videoId: 'JJVOQifbsZo',
    title: 'Elisabetta Perfetti',
    author: 'City of Murals',
    spanClass: 'lg:col-span-5',
  },
  // {
  //   thumbnailUrl: image11,
  //   videoId: 'YXLjBEZB4kw',
  //   title: 'Elisabetta Perfetti',
  //   author: 'City of Murals',
  //   spanClass: 'lg:col-span-5',
  // },
];

const VideoCard = () => {
  return (
    <Container>
      <Carousel transition={{ duration: 2 }} className="rounded-xl">
        {videoList.map((item, index) => (
          <CarousalVideoCard
            key={index}
            videoId={item.videoId}
            title={item.title}
            author={item.author}
            spanClass={item.spanClass}
            thumbnailUrl={item.thumbnailUrl}
          />
        ))}
      </Carousel>
    </Container>
  );
};
export default VideoCard;
