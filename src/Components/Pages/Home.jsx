/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import Container from '../Shared/Container';
import AboutTown from '../UI/AboutTown';
import Featurs from '../UI/Featurs';
import FeatursTwo from '../UI/FeatursTwo';
import FindPlace from '../UI/FindPlace';
import UpCommingEvent from '../UI/UpcomingEvent';
import VideoCard from '../UI/VidoeCarousal';
import NewslaterUp from './NewslaterUp';
import Newslatter from './Newslatter';
import Quata from './Quata';

import Section1 from './Section1';

const Home = () => {
  return (
    <Container>
      
      <Link to="/admin">Admin</Link>
      <Section1 />
      <Quata />
      <Featurs />
      <VideoCard />
      <FeatursTwo />
      <UpCommingEvent />
      <AboutTown />
      <FindPlace />
      <NewslaterUp />
      <Newslatter />
    </Container>
  );
};

export default Home;
