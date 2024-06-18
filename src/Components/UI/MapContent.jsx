/* eslint-disable react/prop-types */
import image1 from '../../assets/image/image (5).jpeg';
import LoginShare from '../lib/loginShare';
import { TbLocation } from 'react-icons/tb';
import { IoCallOutline } from 'react-icons/io5';
import { BiWorld } from 'react-icons/bi';
const MapContent = ({ className }) => {
  const RestaurantDetails = [
    {
      src: image1,
      LoginShare: <LoginShare />,
      title: 'AL & BEA’S MEXICAN FOOD',
      locationLink: 'https://www.google.com/maps?daddr=5120+Peck+Road+++91732',
      locationName: '5120 Peck Road, El Monte 91732',
      phNumber: '626-350-8286',
      phNumberLink: 'tel:626-350-8286',
      readMoreLink:
        'https://www.discoverlosangeles.com/eat-drink/al-bea%E2%80%99s-mexican-food',
      details:
        'In his LA Times review of Burritos La Palma, the late Jonathan Gold described the birria burrito as captivating and months later named it one of the five best burritos in  LA. A spotlight in the burrito episode of Netflix is Taco Chronicles (Season 2) re-ignited the fervor for Burritos La   Palma. The Zacatecan-style birria burrito is elegant in its   simplicity - spicy shredded beef is wrapped in a handmade,buttery flour tortilla and crisped to a golden brown. That is  it. The compact burritos are smaller than the behemoths   typically served around town, so two or three is a typical   order. You can ask for the burrito con todo, which adds refried beans and cheese. The Platillo Especial features two   birria burritos covered in green chile pork sauce and  cheese, served with refried beans, lettuce and tomato on the side.',
    },
    {
      src: image1,
      LoginShare: <LoginShare />,
      title: 'ALL DAY BABY',
      locationLink:
        'https://www.google.com/maps?daddr=3200+W.+Sunset+Blvd+++90026',
      locationName: '3200 W. Sunset Blvd, Los Angeles 90026',
      phNumber: '323-741-0082',
      phNumberLink: 'tel:323-741-0082',
      websiteName: 'Visit Website',
      websiteIcon: <BiWorld className="h-6 w-8 mr-2" />,
      websiteLink: 'https://www.alldaybabyla.com/',
      readMoreLink:
        'https://www.discoverlosangeles.com/eat-drink/al-bea%E2%80%99s-mexican-food',
      details:
        "'In November 2019, the Here's Looking at You dynamic duo of Lien Ta and Chef Jonathan Whitener opened All Day Baby at the corner of Sunset and Descanso. The nouveau diner quickly became a hit with the diverse Silver Lake neighborhood, from Day Menu favorites like Thessa Diadem's pastries and biscuit breakfast sandwiches; to the Tet-A-Tet dinner menu, featuring Vietnamese cuisine with a Latin flair from Whitener Available on the Day Menu from 9am to 3pm, the ADB Breakfast Burrito 2.0 is made with smoked longaniza sausage, refried beans, fried eggs, jack cheese, and salsa roja from HLAY's Tacos Drama pop-up.'",
    },
    {
      src: image1,
      LoginShare: <LoginShare />,
      title: 'ALL DAY BABY',
      locationLink:
        'https://www.google.com/maps?daddr=3200+W.+Sunset+Blvd+++90026',
      locationName: '3200 W. Sunset Blvd, Los Angeles 90026',
      phNumber: '323-741-0082',
      phNumberLink: 'tel:323-741-0082',
      websiteName: 'Visit Website',
      websiteIcon: <BiWorld className="h-6 w-8 mr-2" />,
      websiteLink: 'https://www.alldaybabyla.com/',
      readMoreLink:
        'https://www.discoverlosangeles.com/eat-drink/al-bea%E2%80%99s-mexican-food',
      details:
        "'In November 2019, the Here's Looking at You dynamic duo of Lien Ta and Chef Jonathan Whitener opened All Day Baby at the corner of Sunset and Descanso. The nouveau diner quickly became a hit with the diverse Silver Lake neighborhood, from Day Menu favorites like Thessa Diadem's pastries and biscuit breakfast sandwiches; to the Tet-A-Tet dinner menu, featuring Vietnamese cuisine with a Latin flair from Whitener Available on the Day Menu from 9am to 3pm, the ADB Breakfast Burrito 2.0 is made with smoked longaniza sausage, refried beans, fried eggs, jack cheese, and salsa roja from HLAY's Tacos Drama pop-up.'",
    },
    {
      src: image1,
      LoginShare: <LoginShare />,
      title: 'ALL DAY BABY',
      locationLink:
        'https://www.google.com/maps?daddr=3200+W.+Sunset+Blvd+++90026',
      locationName: '3200 W. Sunset Blvd, Los Angeles 90026',
      phNumber: '323-741-0082',
      phNumberLink: 'tel:323-741-0082',
      websiteName: 'Visit Website',
      websiteIcon: <BiWorld className="h-6 w-8 mr-2" />,
      websiteLink: 'https://www.alldaybabyla.com/',
      readMoreLink:
        'https://www.discoverlosangeles.com/eat-drink/al-bea%E2%80%99s-mexican-food',
      details:
        "'In November 2019, the Here's Looking at You dynamic duo of Lien Ta and Chef Jonathan Whitener opened All Day Baby at the corner of Sunset and Descanso. The nouveau diner quickly became a hit with the diverse Silver Lake neighborhood, from Day Menu favorites like Thessa Diadem's pastries and biscuit breakfast sandwiches; to the Tet-A-Tet dinner menu, featuring Vietnamese cuisine with a Latin flair from Whitener Available on the Day Menu from 9am to 3pm, the ADB Breakfast Burrito 2.0 is made with smoked longaniza sausage, refried beans, fried eggs, jack cheese, and salsa roja from HLAY's Tacos Drama pop-up.'",
    },
    {
      src: image1,
      LoginShare: <LoginShare />,
      title: 'ALL DAY BABY',
      locationLink:
        'https://www.google.com/maps?daddr=3200+W.+Sunset+Blvd+++90026',
      locationName: '3200 W. Sunset Blvd, Los Angeles 90026',
      phNumber: '323-741-0082',
      phNumberLink: 'tel:323-741-0082',
      websiteName: 'Visit Website',
      websiteIcon: <BiWorld className="h-6 w-8 mr-2" />,
      websiteLink: 'https://www.alldaybabyla.com/',
      readMoreLink:
        'https://www.discoverlosangeles.com/eat-drink/al-bea%E2%80%99s-mexican-food',
      details:
        "'In November 2019, the Here's Looking at You dynamic duo of Lien Ta and Chef Jonathan Whitener opened All Day Baby at the corner of Sunset and Descanso. The nouveau diner quickly became a hit with the diverse Silver Lake neighborhood, from Day Menu favorites like Thessa Diadem's pastries and biscuit breakfast sandwiches; to the Tet-A-Tet dinner menu, featuring Vietnamese cuisine with a Latin flair from Whitener Available on the Day Menu from 9am to 3pm, the ADB Breakfast Burrito 2.0 is made with smoked longaniza sausage, refried beans, fried eggs, jack cheese, and salsa roja from HLAY's Tacos Drama pop-up.'",
    },
    {
      src: image1,
      LoginShare: <LoginShare />,
      title: 'ALL DAY BABY',
      locationLink:
        'https://www.google.com/maps?daddr=3200+W.+Sunset+Blvd+++90026',
      locationName: '3200 W. Sunset Blvd, Los Angeles 90026',
      phNumber: '323-741-0082',
      phNumberLink: 'tel:323-741-0082',
      websiteName: 'Visit Website',
      websiteIcon: <BiWorld className="h-6 w-8 mr-2" />,
      websiteLink: 'https://www.alldaybabyla.com/',
      readMoreLink:
        'https://www.discoverlosangeles.com/eat-drink/al-bea%E2%80%99s-mexican-food',
      details:
        "'In November 2019, the Here's Looking at You dynamic duo of Lien Ta and Chef Jonathan Whitener opened All Day Baby at the corner of Sunset and Descanso. The nouveau diner quickly became a hit with the diverse Silver Lake neighborhood, from Day Menu favorites like Thessa Diadem's pastries and biscuit breakfast sandwiches; to the Tet-A-Tet dinner menu, featuring Vietnamese cuisine with a Latin flair from Whitener Available on the Day Menu from 9am to 3pm, the ADB Breakfast Burrito 2.0 is made with smoked longaniza sausage, refried beans, fried eggs, jack cheese, and salsa roja from HLAY's Tacos Drama pop-up.'",
    },
    {
      src: image1,
      LoginShare: <LoginShare />,
      title: 'ALL DAY BABY',
      locationLink:
        'https://www.google.com/maps?daddr=3200+W.+Sunset+Blvd+++90026',
      locationName: '3200 W. Sunset Blvd, Los Angeles 90026',
      phNumber: '323-741-0082',
      phNumberLink: 'tel:323-741-0082',
      websiteName: 'Visit Website',
      websiteIcon: <BiWorld className="h-6 w-8 mr-2" />,
      websiteLink: 'https://www.alldaybabyla.com/',
      readMoreLink:
        'https://www.discoverlosangeles.com/eat-drink/al-bea%E2%80%99s-mexican-food',
      details:
        "'In November 2019, the Here's Looking at You dynamic duo of Lien Ta and Chef Jonathan Whitener opened All Day Baby at the corner of Sunset and Descanso. The nouveau diner quickly became a hit with the diverse Silver Lake neighborhood, from Day Menu favorites like Thessa Diadem's pastries and biscuit breakfast sandwiches; to the Tet-A-Tet dinner menu, featuring Vietnamese cuisine with a Latin flair from Whitener Available on the Day Menu from 9am to 3pm, the ADB Breakfast Burrito 2.0 is made with smoked longaniza sausage, refried beans, fried eggs, jack cheese, and salsa roja from HLAY's Tacos Drama pop-up.'",
    },
    {
      src: image1,
      LoginShare: <LoginShare />,
      title: 'ALL DAY BABY',
      locationLink:
        'https://www.google.com/maps?daddr=3200+W.+Sunset+Blvd+++90026',
      locationName: '3200 W. Sunset Blvd, Los Angeles 90026',
      phNumber: '323-741-0082',
      phNumberLink: 'tel:323-741-0082',
      websiteName: 'Visit Website',
      websiteIcon: <BiWorld className="h-6 w-8 mr-2" />,
      websiteLink: 'https://www.alldaybabyla.com/',
      readMoreLink:
        'https://www.discoverlosangeles.com/eat-drink/al-bea%E2%80%99s-mexican-food',
      details:
        "'In November 2019, the Here's Looking at You dynamic duo of Lien Ta and Chef Jonathan Whitener opened All Day Baby at the corner of Sunset and Descanso. The nouveau diner quickly became a hit with the diverse Silver Lake neighborhood, from Day Menu favorites like Thessa Diadem's pastries and biscuit breakfast sandwiches; to the Tet-A-Tet dinner menu, featuring Vietnamese cuisine with a Latin flair from Whitener Available on the Day Menu from 9am to 3pm, the ADB Breakfast Burrito 2.0 is made with smoked longaniza sausage, refried beans, fried eggs, jack cheese, and salsa roja from HLAY's Tacos Drama pop-up.'",
    },
    {
      src: image1,
      LoginShare: <LoginShare />,
      title: 'ALL DAY BABY',
      locationLink:
        'https://www.google.com/maps?daddr=3200+W.+Sunset+Blvd+++90026',
      locationName: '3200 W. Sunset Blvd, Los Angeles 90026',
      phNumber: '323-741-0082',
      phNumberLink: 'tel:323-741-0082',
      websiteName: 'Visit Website',
      websiteIcon: <BiWorld className="h-6 w-8 mr-2" />,
      websiteLink: 'https://www.alldaybabyla.com/',
      readMoreLink:
        'https://www.discoverlosangeles.com/eat-drink/al-bea%E2%80%99s-mexican-food',
      details:
        "'In November 2019, the Here's Looking at You dynamic duo of Lien Ta and Chef Jonathan Whitener opened All Day Baby at the corner of Sunset and Descanso. The nouveau diner quickly became a hit with the diverse Silver Lake neighborhood, from Day Menu favorites like Thessa Diadem's pastries and biscuit breakfast sandwiches; to the Tet-A-Tet dinner menu, featuring Vietnamese cuisine with a Latin flair from Whitener Available on the Day Menu from 9am to 3pm, the ADB Breakfast Burrito 2.0 is made with smoked longaniza sausage, refried beans, fried eggs, jack cheese, and salsa roja from HLAY's Tacos Drama pop-up.'",
    },
  ];

  return (
    <div>
      <div>
        <div className={`grid grid-cols-12 gap-2 px-4 ${className}`}>
          <button className="px-4 mx-3 py-2 hover:underline uppercase border border-gray-900 lg:col-span-6 xl:col-span-4 col-span-6 md:col-span-6 sm:text-xs w-full">
            Restaurant
          </button>
          <button className="px-4 mx-3 py-2 hover:underline uppercase border border-gray-900 lg:col-span-6 xl:col-span-4 col-span-6 md:col-span-6 sm:text-xs w-full">
            Dine LA
          </button>
          <button className="px-4 mx-3 py-2 hover:underline uppercase border border-gray-900 lg:col-span-6 xl:col-span-4 col-span-6 md:col-span-6 sm:text-xs w-full">
            Food & Drinks
          </button>
        </div>
        <div className={`w-full mx-auto my-10 px-4 ${className}`}>
          <h1 className="text-gray-700  space-x-1">
            The burrito, a beloved Mexican food item featuring a flour tortilla
            and a range of fillings, has origins in northern Mexico, with most
            people pointing toward the border town of Ciudad Juárez. Los Angeles
            is not t bound by any particular traditions, so you’ll find a wide
            variety of burritos, including numerous veg-friendly options. The
            city is most famous burrito may be at El Tepeyac Café in Boyle
            Heights, but there are many more options besides the ginormous
            Manuel is Special Burrito. From classics to new school variations,
            read on for the best burritos in LA.
          </h1>
        </div>

        {RestaurantDetails.map((item, key) => (
          <div key={key}>
            <img
              src={item.src}
              className="w-full h-[600px] object-cover"
              alt=""
            />

            <div>{item.LoginShare}</div>

            <div className={`${className}`}>
              <div className="px-4">
                <h1 className="font-bold lg:text-4xl text-xl my-4">
                  {item.title}
                </h1>
                <div className="grid grid-cols-12   border-b-2 border-t-2 py-4 mb-16">
                  <p className="col-span-6 flex">
                    <TbLocation className="h-6 w-8 mr-2" />
                    <a href={item.locationLink}>{item.locationName}</a>
                  </p>
                  <p className="col-span-6 flex">
                    <IoCallOutline className="h-6 w-8 mr-2" />
                    <a href={item.phNumberLink} type="tel">
                      {item.phNumber}
                    </a>
                  </p>
                  <p className=" col-span-6 flex">
                    <p>{item.websiteIcon}</p>
                    <a href={item.websiteLink} type="tel">
                      {item.websiteName}
                    </a>
                  </p>
                </div>
                <div className="">
                  <h1 className="text-gray-700  space-x-1">{item.details}</h1>
                  <button className="px-4 py-2 bg-gray-900 text-white my-4">
                    <a href={item.readMoreLink}>Read More</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapContent;
