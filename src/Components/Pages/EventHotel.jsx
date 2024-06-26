/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import img from '../../assets/image/myfile/OccasionMarketing-WebBanner.webp';

const EventHotel = () => {
  const hotelData = [
    {
      id: 1,
      name: 'Hotel Villa',
      location: 'Los Angeles',
      img: 'https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/air-in-venice-hotel/c_fit-w_1920-h_1440-crm-la-business_palms_1920x14400-820885405056a36_82088604-5056-a36f-231d9aaa382d7977.jpg?itok=LrYco1n5',
      region: 'Beach Cities/LAX',
      road_name: '6399 Wilshire Blvd, Los Angeles 90048'
    },
    {
      id: 2,
      name: 'Aventura Hotel',
      location: 'Los Angeles',
      img: 'https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/aventura-hotel/c_fit-w_1920-h_1440-crm-la-aventura-hotel-ccab65cc5056a36_ccab6699-5056-a36f-23bb72d05c6df1ee.jpg?itok=xIqQLdSQ',
      region: 'Downtown LA',
      road_name: '5 Rose Ave, Venice 90291'
    },
    {
      id: 3,
      name: 'Avenue Hotel LA',
      location: 'Los Angeles',
      img: 'https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/avenue-hotel-la/c_fit-w_1920-h_1440-crm-la-avenue-hotel-la-cc98a2eb5056a36_cc98a3e4-5056-a36f-2384f5bdee4ffdd3.jpg?itok=rR5WNzpu',
      region: 'Hollywood',
      road_name: '5 Rose Ave, Venice 90291'
    },
    {
      id: 4,
      name: 'Best Western Plus Dragon Gate Inn',
      location: 'Los Angeles',
      img: 'https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/best-western-plus-dragon-gate-inn/c_fit-w_1920-h_1440-crm-la-60845772_4k_4414ebac-d2b4-4781-bc2337eecd06b3b7_c5e01a54-1b08-4778-9cb2bf6da0349ebe.jpg?itok=qmjY2xjk',
      region: 'Chinatown',
      road_name: '818 N Hill St, Los Angeles 90012'
    },
    {
      id: 5,
      name: 'Best Western Plus San Pedro Hotel & Suites',
      location: 'Los Angeles',
      img: 'https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/best-western-plus-san-pedro-hotel-suites/c_fit-w_1920-h_1440-crm-la-bestwesternsp0-78131b1b5056a36_78131cea-5056-a36f-231ebb35e6b10a29.jpg?itok=oCBLfQhd',
      region: 'West Side',
      road_name: '111 S Gaffey St, San Pedro 90731'
    },
    {
      id: 6,
      name: 'Hollywood Hotel',
      location: 'Los Angeles',
      img: 'https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/aventura-hotel/c_fit-w_1920-h_1440-crm-la-aventura-hotel-ccab65cc5056a36_ccab6699-5056-a36f-23bb72d05c6df1ee.jpg?itok=xIqQLdSQ',
      region: 'Hollywood',
      road_name: '1160 North Vermont Avenue, Los Angeles 90029'
    },
    {
      id: 7,
      name: 'Sunset Tower Hotel',
      location: 'Los Angeles',
      img: 'https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/avenue-hotel-la/c_fit-w_1920-h_1440-crm-la-avenue-hotel-la-cc98a2eb5056a36_cc98a3e4-5056-a36f-2384f5bdee4ffdd3.jpg?itok=rR5WNzpu',
      region: 'West Hollywood',
      road_name: '8358 Sunset Blvd, Los Angeles 90069'
    },
    {
      id: 8,
      name: 'The Beverly Hills Hotel',
      location: 'Los Angeles',
      img: 'https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/best-western-plus-san-pedro-hotel-suites/c_fit-w_1920-h_1440-crm-la-bestwesternsp0-78131b1b5056a36_78131cea-5056-a36f-231ebb35e6b10a29.jpg?itok=oCBLfQhd',
      region: 'Beverly Hills',
      road_name: '9641 Sunset Blvd, Beverly Hills 90210'
    },
    {
      id: 9,
      name: 'Loews Hollywood Hotel',
      location: 'Los Angeles',
      img: 'https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/best-western-plus-dragon-gate-inn/c_fit-w_1920-h_1440-crm-la-60845772_4k_4414ebac-d2b4-4781-bc2337eecd06b3b7_c5e01a54-1b08-4778-9cb2bf6da0349ebe.jpg?itok=qmjY2xjk',
      region: 'Hollywood',
      road_name: '1755 N Highland Ave, Los Angeles 90028'
    },
    {
      id: 10,
      name: 'InterContinental Los Angeles Downtown',
      location: 'Los Angeles',
      img: 'https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/air-in-venice-hotel/c_fit-w_1920-h_1440-crm-la-business_palms_1920x14400-820885405056a36_82088604-5056-a36f-231d9aaa382d7977.jpg?itok=LrYco1n5',
      region: 'Downtown LA',
      road_name: '900 Wilshire Blvd, Los Angeles 90017'
    },
    {
      id: 11,
      name: 'W Hollywood',
      location: 'Los Angeles',
      img: 'https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/best-western-plus-san-pedro-hotel-suites/c_fit-w_1920-h_1440-crm-la-bestwesternsp0-78131b1b5056a36_78131cea-5056-a36f-231ebb35e6b10a29.jpg?itok=oCBLfQhd',
      region: 'Hollywood',
      road_name: '6250 Hollywood Blvd, Los Angeles 90028'
    },
    {
      id: 12,
      name: 'The Ritz-Carlton, Los Angeles',
      location: 'Los Angeles',
      img: 'https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/avenue-hotel-la/c_fit-w_1920-h_1440-crm-la-avenue-hotel-la-cc98a2eb5056a36_cc98a3e4-5056-a36f-2384f5bdee4ffdd3.jpg?itok=rR5WNzpu',
      region: 'Downtown LA',
      road_name: '900 W Olympic Blvd, Los Angeles 90015'
    },
    {
      id: 13,
      name: 'The Line Hotel',
      location: 'Los Angeles',
      img: 'https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/aventura-hotel/c_fit-w_1920-h_1440-crm-la-aventura-hotel-ccab65cc5056a36_ccab6699-5056-a36f-23bb72d05c6df1ee.jpg?itok=xIqQLdSQ',
      region: 'Koreatown',
      road_name: '3515 Wilshire Blvd, Los Angeles 90010'
    },
    {
      id: 14,
      name: 'Sheraton Grand Los Angeles',
      location: 'Los Angeles',
      img: 'https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/air-in-venice-hotel/c_fit-w_1920-h_1440-crm-la-business_palms_1920x14400-820885405056a36_82088604-5056-a36f-231d9aaa382d7977.jpg?itok=LrYco1n5',
      region: 'Downtown LA',
      road_name: '711 S Hope St, Los Angeles 90017'
    },
    {
      id: 15,
      name: 'The London West Hollywood at Beverly Hills',
      location: 'Los Angeles',
      img: 'https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/air-in-venice-hotel/c_fit-w_1920-h_1440-crm-la-business_palms_1920x14400-820885405056a36_82088604-5056-a36f-231d9aaa382d7977.jpg?itok=LrYco1n5',
      region: 'West Hollywood',
      road_name: '1020 N San Vicente Blvd, West Hollywood 90069'
    },
    {
      id: 16,
      name: 'The Standard, Downtown LA',
      location: 'Los Angeles',
      img: 'https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/avenue-hotel-la/c_fit-w_1920-h_1440-crm-la-avenue-hotel-la-cc98a2eb5056a36_cc98a3e4-5056-a36f-2384f5bdee4ffdd3.jpg?itok=rR5WNzpu',
      region: 'Downtown LA',
      road_name: '550 S Flower St, Los Angeles 90071'
    },
    {
      id: 17,
      name: 'The Garland',
      location: 'Los Angeles',
      img: 'https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/air-in-venice-hotel/c_fit-w_1920-h_1440-crm-la-business_palms_1920x14400-820885405056a36_82088604-5056-a36f-231d9aaa382d7977.jpg?itok=LrYco1n5',
      region: 'North Hollywood',
      road_name: '4222 Vineland Ave, North Hollywood 91602'
    },
    {
      id: 18,
      name: 'The Westin Bonaventure Hotel & Suites',
      location: 'Los Angeles',
      img: 'https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/best-western-plus-dragon-gate-inn/c_fit-w_1920-h_1440-crm-la-60845772_4k_4414ebac-d2b4-4781-bc2337eecd06b3b7_c5e01a54-1b08-4778-9cb2bf6da0349ebe.jpg?itok=qmjY2xjk',
      region: 'Downtown LA',
      road_name: '404 S Figueroa St, Los Angeles 90071'
    },
    {
      id: 19,
      name: 'Hotel Indigo Los Angeles Downtown',
      location: 'Los Angeles',
      img: 'https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/avenue-hotel-la/c_fit-w_1920-h_1440-crm-la-avenue-hotel-la-cc98a2eb5056a36_cc98a3e4-5056-a36f-2384f5bdee4ffdd3.jpg?itok=rR5WNzpu',
      region: 'Downtown LA',
      road_name: '899 Francisco St, Los Angeles 90017'
    },
    {
      id: 20,
      name: 'Four Seasons Hotel Los Angeles at Beverly Hills',
      location: 'Los Angeles',
      img: 'https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/aventura-hotel/c_fit-w_1920-h_1440-crm-la-aventura-hotel-ccab65cc5056a36_ccab6699-5056-a36f-23bb72d05c6df1ee.jpg?itok=xIqQLdSQ',
      region: 'Beverly Hills',
      road_name: '300 S Doheny Dr, Los Angeles 90048'
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const filteredHotels = hotelData.filter((hotel) => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === 'All' || hotel.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const uniqueRegions = [...new Set(hotelData.map((hotel) => hotel.region))];

  const handleSearch = () => {
    // No need to implement anything for search button as filtering is already done in filteredHotels
  };

  const handleClear = () => {
    setSearchQuery('');
    setSelectedRegion('All');
  };

  return (
    <div>
      {/* part 1 */}
      <div>
        <img src={img} className="w-full" alt="" />
      </div>
      {/* part 2 */}
      <div className="p-6">
        <div className="md:flex justify-center gap-4 border mb-6">
          <div className="">
            <input
              type="text"
              placeholder="Search by hotel name"
              className="border border-gray-400 p-2 flex-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="mt-2 md:mt-0">
            <select
              className="border border-gray-400 p-2"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              <option value="All">All Regions</option>
              {uniqueRegions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-2 mt-2 md:mt-0">
            <button className="bg-[#783A9C] px-5 py-2 text-white" onClick={handleSearch}>
              Search
            </button>
            <button className="bg-[#302f2f] px-5 py-2 text-white" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>

        {filteredHotels.map((m) => (
          <div className="grid md:grid-cols-4 p-6 mt-5 border border-gray-400 " key={m.id}>
            <div>
              <img src={m.img} className="w-full md:w-40 md:h-40 bg-blue-gray-400" alt="" />
            </div>
            <div className="mt-2 md:mt-0">
              <h2 className="text-xl font-semibold">{m.name}</h2>
              <h2 className="mt-3 flex gap-2 items-center text-[#783A9C]">
                <FaLocationArrow /> {m.road_name}
              </h2>
            </div>
            <div>
              <h2 className="mt-2 md:mt-0">{m.region}</h2>
            </div>
            <div>
              <button className="bg-[#783A9C] px-5 mt-2 md:mt-0 py-2 text-white">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventHotel;
