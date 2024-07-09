/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Pages/Home';
import Rootlayout from '../Components/Layouts/Rootlayout';
import GuideToLosAnglesPark from '../Components/Pages/GuideToLosAnglesPark';
import ThingsToDo from '../Components/Pages/ThingsToDo';
import EventHotel from '../Components/Pages/EventHotel';
import Visit from '../Components/Pages/Visit';
import Events from '../Components/Pages/Events';
import AdminLayout from '../Components/Layouts/AdminLayout';
import AddBanner from '../Components/AdminComponents/Banner/AddBanner';
import Login from '../Components/Pages/Login';
import AddData from '../Components/AdminComponents/AddData/AddData';
import Quota from '../Components/AdminComponents/Quota/Quota';
import VideoStreaming from '../Components/AdminComponents/VideoStreaming/VideoStreaming';
import AdvertiseImg from '../Components/AdminComponents/AdvertiseImg/AdvertiseImg';
import CreateEvents from '../Components/AdminComponents/CreateEvents/CreateEvents';
import WhereToStay from '../Components/AdminComponents/WhereToStay/WhereToStay';

import Itineraries from '../Components/AdminComponents/Itineraries/Itineraries';
import TouristInformation from '../Components/AdminComponents/TouristInformation/TouristInformation';
import Meeting from '../Components/AdminComponents/Meeting/Meeting';
import Bar from '../Components/AdminComponents/Eat&Drink/Bar';
import Clubs from '../Components/AdminComponents/Eat&Drink/Clubs';
import DineLaRestaurantsWeek from '../Components/AdminComponents/Eat&Drink/DineLaRestaurantsWeek';
import BusinessSpotLight from '../Components/AdminComponents/Eat&Drink/BusinessSpotLight';
import AttractionsTours from '../Components/AdminComponents/ThingsToDo/Attractions&Tours';
import OutDoorWellness from '../Components/AdminComponents/ThingsToDo/OutDoorWellness';
import Shopping from '../Components/AdminComponents/ThingsToDo/Shopping';
import ArtsCulture from '../Components/AdminComponents/ThingsToDo/ArtsCulture';
import PetFriendly from '../Components/AdminComponents/ThingsToDo/PetFriendly';
import Luxury from '../Components/AdminComponents/ThingsToDo/Luxury';
import HiddenGems from '../Components/AdminComponents/ThingsToDo/HiddenGems';
import Family from '../Components/AdminComponents/ThingsToDo/Family';
import Budge from '../Components/AdminComponents/ThingsToDo/Budge';
import AapiHeritage from '../Components/AdminComponents/CelebrateLaHeritage/AapiHeritage';
import BlackLa from '../Components/AdminComponents/CelebrateLaHeritage/BlackLa';
import LatinoHeritage from '../Components/AdminComponents/CelebrateLaHeritage/LatinoHeritage';
import AboutLATourism from '../Components/AdminComponents/AboutTourism/AboutLATourism';
import TravelTrade from '../Components/AdminComponents/AboutTourism/TravelTrade';
import Carres from '../Components/AdminComponents/AboutTourism/Carres';
import Research from '../Components/AdminComponents/AboutTourism/Research';
import Media from '../Components/AdminComponents/AboutTourism/Media';
import BusinessSpotlight from '../Components/AdminComponents/AboutTourism/BusinessSpotlight';
import MemberShip from '../Components/AdminComponents/AboutTourism/MemberShip';
import SignUp from '../Components/Pages/SignIn';



const route = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayout></Rootlayout>,

    children: [
      { path: '/', element: <Home></Home> },
      { path: '/Home', element: <Home></Home> },
      { path: '/login', element: <Login></Login> },
      { path: '/events', element: <Events /> },
      { path: '/event-hotel', element: <EventHotel /> },
      { path: '/eventHotel', element: <EventHotel /> },
      { path: '/guideForPark', element: <GuideToLosAnglesPark /> },
      { path: '/thingstodo', element: <ThingsToDo /> },
      { path: '/signUp', element: <SignUp /> },
      { path: '/visit', element: <Visit /> }
    ]
  },
  {
    path: '/admin',

    element: <AdminLayout />,
    children: [
      {
        index: 'admin/addData',
        element: <AddData />
      },

      {
        path: '/admin/slider',
        element: <AddBanner />
      },
      {
        path: '/admin/addData',
        element: <AddData />
      },
      {
        path: '/admin/VideoStreaming',
        element: <VideoStreaming />
      },
      {
        path: '/admin/advertisement',
        element: <AdvertiseImg />
      },
      {
        path: '/admin/quota',
        element: <Quota />
      },
      {
        path: '/admin/createEvent',
        element: <CreateEvents />
      },
      {
        path: '/admin/whereToStay',
        element: <WhereToStay />
      },
      {
        path: '/admin/itineraries',
        element: <Itineraries />
      },
      {
        path: '/admin/touristInformation',
        element: <TouristInformation />
      },
      {
        path: '/admin/meeting',
        element: <Meeting />
      },
      {
        path: '/admin/Eat&Drink/bars',
        element: <Bar />
      },
      {
        path: '/admin/Eat&Drink/clubs',
        element: <Clubs />
      },
      {
        path: '/admin/Eat&Drink/dineLaRestaurantsWeek',
        element: <DineLaRestaurantsWeek />
      },
      {
        path: '/admin/Eat&Drink/dineLaRestaurantsWeek',
        element: <DineLaRestaurantsWeek />
      },
      {
        path: '/admin/Eat&Drink/businessSpotlight',
        element: <BusinessSpotLight />
      },
      {
        path: '/admin/thingsTodo/attractionsTours',
        element: <AttractionsTours />
      },
      {
        path: '/admin/thingsTodo/outdoorsWellness',
        element: <OutDoorWellness />
      },
      {
        path: '/admin/thingsTodo/shopping',
        element: <Shopping />
      },
      {
        path: '/admin/thingsTodo/artsCultures',
        element: <ArtsCulture />
      },
      {
        path: '/admin/thingsTodo/petFriendly',
        element: <PetFriendly />
      },
      {
        path: '/admin/thingsTodo/luxury',
        element: <Luxury />
      },
      {
        path: '/admin/thingsTodo/hiddenGems',
        element: <HiddenGems />
      },
      {
        path: '/admin/thingsTodo/family',
        element: <Family />
      },
      {
        path: '/admin/thingsTodo/budget',
        element: <Budge />
      },
      {
        path: '/admin/CelebrateLAHeritage/aapiHeritage',
        element: <AapiHeritage />
      },
      {
        path: '/admin/CelebrateLAHeritage/blackLA',
        element: <BlackLa />
      },
      {
        path: '/admin/CelebrateLAHeritage/latinoHeritage',
        element: <LatinoHeritage />
      },
      {
        path: '/admin/AboutLATourism/aboutLATourism',
        element: <AboutLATourism />
      },
      {
        path: '/admin/AboutLATourism/travelTrade',
        element: <TravelTrade />
      },
      {
        path: '/admin/AboutLATourism/careers',
        element: <Carres />
      },
      {
        path: '/admin/AboutLATourism/research',
        element: <Research />
      },
      {
        path: '/admin/AboutLATourism/media',
        element: <Media />
      },
      {
        path: '/admin/AboutLATourism/businessSpotlight',
        element: <BusinessSpotlight />
      },
      {
        path: '/admin/AboutLATourism/memberShip',
        element: <MemberShip />
      }
    ]
  }
]);
export default route;
