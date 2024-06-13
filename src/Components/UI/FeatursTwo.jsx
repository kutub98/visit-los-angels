import Container from '../Shared/Container';
import image1 from '../../assets/image/barlis-michaelmundy.webp';
import image2 from '../../assets/image/image (12).png';
import image3 from '../../assets/image/image (2).jpg';
import image4 from '../../assets/image/image (4).jpg';
import Featurss from '../CustomsReuseable/Featurs';

const imageList = [
  {
    src: image1,
    button1: 'Eat & Drinks',
    button2: 'BARS',
    title: "LA'S BEST ROOPTOP BARS",
    author: 'Daniel Djang',
    spanClass: 'lg:col-span-4',
  },
  {
    src: image2,
    button1: 'THINGS TO DO',
    button2: 'OUTDOOR & WELLNESS',
    title: "LA'S BEST HIKING TRAILS",
    author: 'Discover Los Angels',
    spanClass: 'lg:col-span-8',
  },
  {
    src: image3,
    button1: 'THINGS TO DO',
    button2: 'OUTDOOR & WELLNESS',
    title: "LA'S BEST BEACHES",
    author: 'Discover Los Angels',
    spanClass: 'lg:col-span-8',
  },
  {
    src: image4,
    button1: 'THINGS TO DO',
    button2: 'NIGHT LIFE',
    title: 'DISCOVER THE HOLLYOOD VINYAL DISTRICKT',
    author: 'Paul Rogers',
    spanClass: 'lg:col-span-4',
  },
];

const FeatursTwo = () => {
  return (
    // <Container>
    <div className="grid grid-cols-12 gap my-10">
      {imageList.map((item, index) => (
        <Featurss
          key={index}
          img={item.src}
          button1={item.button1}
          button2={item.button2}
          title={item.title}
          author={item.author}
          spanClass={item.spanClass}
        />
      ))}
    </div>
    // </Container>
  );
};

export default FeatursTwo;
