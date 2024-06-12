import Container from '../Shared/Container';
import image1 from '../../assets/image/image.jpeg';
import image2 from '../../assets/image/image (1).jpeg';
import image3 from '../../assets/image/image (2).jpeg';
import image4 from '../../assets/image/image (21).jpg';
import Featurss from '../CustomsReuseable/Featurs';

const imageList = [
  {
    src: image1,
    button1: 'Eat & Drinks',
    button2: 'Restaurants',
    title: "LA'S BEST BURRITOS",
    author: 'Discover Los Angeles',
    spanClass: 'lg:col-span-5',
  },
  {
    src: image2,
    button1: 'THINGS TO DO',
    button2: 'Shopping',
    title: 'LA FOR PLANT PARENTS',
    author: 'Paul Rogers',
    spanClass: 'lg:col-span-7',
  },
  {
    src: image3,
    button1: 'THINGS TO DO',
    button2: 'ARTS & CULTURES',
    title: ' "BARBIE" LOCATIONS IN LA',
    author: 'Liz Ohanesian',
    spanClass: 'lg:col-span-7',
  },
  {
    src: image4,
    button1: 'THINGS TO DO',
    button2: 'ATTRACTIONS & TOURS',
    title: 'DRAGONS IN LA',
    author: 'Daniel Djang',
    spanClass: 'lg:col-span-5',
  },
];

const Featurs = () => {
  return (
    <Container>
      <div className="grid grid-cols-12 gap">
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
    </Container>
  );
};

export default Featurs;
