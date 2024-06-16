import Featurss from '../CustomsReuseable/Featurs';
import { imageList } from '../lib/imageList';

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
