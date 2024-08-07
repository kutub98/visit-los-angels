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
import SingUp from '../Components/Pages/SignIn';
import Partners from '../Components/AdminComponents/Partners/Partners';
import AboutTown from '../Components/AdminComponents/AboutTown/AboutTown';
import LaPerksPass from '../Components/Pages/LaPerksPass';
import SubmitForm from '../Components/Pages/LaPerksSubmit';
import AttractionsToursHome from '../Components/Pages/ThingsTodo/AttractionsTours';
import ArtCultureHome from '../Components/Pages/ThingsTodo/ArtsCulture';
import OutDoorWellnessHome from '../Components/Pages/ThingsTodo/OutdooWellness';
import ShoppingHome from '../Components/Pages/ThingsTodo/Shopping';
import BudgetHome from '../Components/Pages/ThingsTodo/Budget';
import FamilyHome from '../Components/Pages/ThingsTodo/Family';
import HiddenGemsHome from '../Components/Pages/ThingsTodo/HiddenGems';
import LuxuryHome from '../Components/Pages/ThingsTodo/Luxury';
import PetFriendlyHome from '../Components/Pages/ThingsTodo/PetFriendly';
import ResearchHome from '../Components/Pages/AboutLaHeritage/Research';
import MediaHome from '../Components/Pages/AboutLaHeritage/Media';
import CareersHome from '../Components/Pages/AboutLaHeritage/Careers';
import MembershipHome from '../Components/Pages/AboutLaHeritage/Membership';
import TravelTradeHome from '../Components/Pages/AboutLaHeritage/TravelTrade';
import BusinessSpotlightLaHome from '../Components/Pages/AboutLaHeritage/BusinessSpotlightLaHome';
import AboutLaTourism from '../Components/Pages/AboutLaTourism';
import BusinessSpotlightHome from '../Components/Pages/EatDrink/BusinessSpotlight';
import DineLaRestaurantsHome from '../Components/Pages/EatDrink/DineLaRestaurants';
import ClubsHome from '../Components/Pages/EatDrink/Clubs';
import BarsHome from '../Components/Pages/EatDrink/Bars';
import EatDrink from '../Components/Pages/EatDrink';

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
      { path: '/signUp', element: <SingUp /> },
      { path: '/visit', element: <Visit /> },
      { path: '/about-la-tourism', element: <AboutLaTourism /> },
      { path: '/laPerksPass', element: <LaPerksPass /> },
      { path: '/submit', element: <SubmitForm /> },
      { path: '/thingsToDo/attractions-tours', element: <AttractionsToursHome /> },
      { path: '/thingsToDo/arts-cultures', element: <ArtCultureHome /> },
      { path: '/thingsToDo/outdoor-wellness', element: <OutDoorWellnessHome /> },
      { path: '/thingsToDo/shopping', element: <ShoppingHome /> },
      { path: '/thingsToDo/family', element: <BudgetHome /> },
      { path: '/thingsToDo/attractions-tours', element: <FamilyHome /> },
      { path: '/thingsToDo/hidden-gems', element: <HiddenGemsHome /> },
      { path: '/thingsToDo/luxury', element: <LuxuryHome /> },
      { path: '/thingsToDo/Budget', element: <BudgetHome /> },
      { path: '/thingsToDo/pet-friendly', element: <PetFriendlyHome /> },
      { path: '/about-la-tourism/travel-trade', element: <BusinessSpotlightLaHome /> },
      { path: '/about-la-tourism/business-spotlight', element: <TravelTradeHome /> },
      { path: '/about-la-tourism/membership', element: <MembershipHome /> },
      { path: '/about-la-tourism/careers', element: <CareersHome /> },
      { path: '/about-la-tourism/media', element: <MediaHome /> },
      { path: '/eat-drink/business-spotlight', element: <BusinessSpotlightHome /> },
      { path: '/eat-drink/dine-la-restaurant', element: <DineLaRestaurantsHome /> },
      { path: '/eat-drink/clubs', element: <ClubsHome /> },
      { path: '/eat-drink/bars', element: <BarsHome /> },
      { path: '/about-la-tourism/researches', element: <ResearchHome /> },
      { path: '/eat-drink', element: <EatDrink /> }
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
        path: '/admin/partner',
        element: <Partners />
      },
      {
        path: '/admin/aboutTown',
        element: <AboutTown />
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
