import Featurs from '../UI/Featurs';
import FeatursTwo from '../UI/FeatursTwo';
import FindPlace from '../UI/FindPlace';
import UpCommingEvent from '../UI/UpcomingEvent';
import VideoCard from '../UI/VidoeCarousal';

import Section1 from './Section1';

const Home = () => {
  return (
    <div>
      <Section1 />
      <Featurs />
      <VideoCard />
      <FeatursTwo />
      <UpCommingEvent />
      <FindPlace />
    </div>
  );
};

export default Home;
