import Featurs from '../UI/Featurs';
import VideoCard from '../UI/VidoeCarousal';
import NewslaterUp from './NewslaterUp';
import Newslatter from './Newslatter';
import Quata from './Quata';

import Section1 from './Section1';

const Home = () => {
  return (
    <div >
      <Section1 />
      <Quata/>
      <Featurs />
      <VideoCard />
      <NewslaterUp/>
      <Newslatter/>
    </div>
  );
};

export default Home;
