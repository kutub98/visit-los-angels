import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import img from "../../assets/image/myfile/OccasionMarketing-WebBanner.webp";

Modal.setAppElement("#root");

const Events = () => {
  const [category, setCategory] = useState("all");
  const [region, setRegion] = useState("all");
  const [date, setDate] = useState("");
  const [eventData, setEventData] = useState([
    {
      category: "technology",
      event_title: "Tech Conference 2024",
      location: "Las Vegas Convention Center",
      time: "2024-06-25",
      event_image: "https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/air-in-venice-hotel/c_fit-w_1920-h_1440-crm-la-business_palms_1920x14400-820885405056a36_82088604-5056-a36f-231d9aaa382d7977.jpg?itok=LrYco1n5",
    },
    {
      category: "health",
      event_title: "Health Expo",
      location: "Las Vegas Medical Center",
      time: "2024-07-10",
      event_image: "https://www.discoverlosangeles.com/sites/default/files/images/2024-05/The%20Dolphin%20I%20Loved_1.png?width=480&fit=bound&quality=100&auto=webp",
    },
    {
      category: "comedy",
      event_title: "Comedy Night",
      location: "Las Vegas Comedy Club",
      time: "2024-07-20",
      event_image: "https://www.discoverlosangeles.com/sites/default/files/images/2024-03/Comedy-Night_Key-Art-Sq-sm_0.jpg?width=480&fit=bound&quality=100&auto=webp",
    },
    {
      category: "sports",
      event_title: "Basketball Championship",
      location: "Las Vegas Arena",
      time: "2024-08-05",
      event_image: "https://www.discoverlosangeles.com/sites/default/files/images/2024-06/men-in-blazers-tickets_06-19-24_17_6660e9e86fa90.png?width=480&fit=bound&quality=100&auto=webp",
    },
    {
      category: "music",
      event_title: "Jazz Festival",
      location: "Las Vegas Park",
      time: "2024-08-15",
      event_image: "https://www.discoverlosangeles.com/sites/default/files/images/2024-06/largotakeover.jpg?width=480&fit=bound&quality=100&auto=webp",
    },
    {
      category: "theater",
      event_title: "Broadway Show",
      location: "Las Vegas Theater",
      time: "2024-08-25",
      event_image: "https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/air-in-venice-hotel/c_fit-w_1920-h_1440-crm-la-business_palms_1920x14400-820885405056a36_82088604-5056-a36f-231d9aaa382d7977.jpg?itok=LrYco1n5",
    },
    {
      category: "film",
      event_title: "Film Festival",
      location: "Las Vegas Cinema",
      time: "2024-09-05",
      event_image: "https://www.discoverlosangeles.com/sites/default/files/images/2024-05/The%20Dolphin%20I%20Loved_1.png?width=480&fit=bound&quality=100&auto=webp",
    },
    {
      category: "science",
      event_title: "Science Expo",
      location: "Las Vegas Science Center",
      time: "2024-09-15",
      event_image: "https://www.discoverlosangeles.com/sites/default/files/images/2024-03/Comedy-Night_Key-Art-Sq-sm_0.jpg?width=480&fit=bound&quality=100&auto=webp",
    },
    {
      category: "dance",
      event_title: "Dance Competition",
      location: "Las Vegas Dance Hall",
      time: "2024-09-25",
      event_image: "https://www.discoverlosangeles.com/sites/default/files/images/2024-06/men-in-blazers-tickets_06-19-24_17_6660e9e86fa90.png?width=480&fit=bound&quality=100&auto=webp",
    },
    {
      category: "family",
      event_title: "Family Fun Day",
      location: "Las Vegas Park",
      time: "2024-10-05",
      event_image: "https://www.discoverlosangeles.com/sites/default/files/images/2024-06/largotakeover.jpg?width=480&fit=bound&quality=100&auto=webp",
    },
    {
      category: "festival",
      event_title: "Food Festival",
      location: "Las Vegas Food Street",
      time: "2024-10-15",
      event_image: "https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/air-in-venice-hotel/c_fit-w_1920-h_1440-crm-la-business_palms_1920x14400-820885405056a36_82088604-5056-a36f-231d9aaa382d7977.jpg?itok=LrYco1n5",
    },
    {
      category: "art",
      event_title: "Art Exhibition",
      location: "Las Vegas Art Gallery",
      time: "2024-10-25",
      event_image: "https://www.discoverlosangeles.com/sites/default/files/images/2024-05/The%20Dolphin%20I%20Loved_1.png?width=480&fit=bound&quality=100&auto=webp",
    },
    {
      category: "education",
      event_title: "Educational Seminar",
      location: "Las Vegas University",
      time: "2024-11-05",
      event_image: "https://www.discoverlosangeles.com/sites/default/files/images/2024-03/Comedy-Night_Key-Art-Sq-sm_0.jpg?width=480&fit=bound&quality=100&auto=webp",
    },
    {
      category: "outdoor",
      event_title: "Hiking Adventure",
      location: "Las Vegas Mountains",
      time: "2024-11-15",
      event_image: "https://www.discoverlosangeles.com/sites/default/files/images/2024-06/men-in-blazers-tickets_06-19-24_17_6660e9e86fa90.png?width=480&fit=bound&quality=100&auto=webp",
    },
    {
      category: "museum",
      event_title: "History Museum Tour",
      location: "Las Vegas Museum",
      time: "2024-11-25",
      event_image: "https://www.discoverlosangeles.com/sites/default/files/images/2024-06/largotakeover.jpg?width=480&fit=bound&quality=100&auto=webp",
    },
    {
      category: "theater",
      event_title: "Drama Play",
      location: "Las Vegas Theater",
      time: "2024-12-05",
      event_image: "https://www.discoverlosangeles.com/sites/default/files/styles/medium/public/business/air-in-venice-hotel/c_fit-w_1920-h_1440-crm-la-business_palms_1920x14400-820885405056a36_82088604-5056-a36f-231d9aaa382d7977.jpg?itok=LrYco1n5",
    },
    {
      category: "technology",
      event_title: "Tech Workshop",
      location: "Las Vegas Tech Hub",
      time: "2024-12-15",
      event_image: "https://www.discoverlosangeles.com/sites/default/files/images/2024-05/The%20Dolphin%20I%20Loved_1.png?width=480&fit=bound&quality=100&auto=webp",
    },
    {
      category: "comedy",
      event_title: "Stand-up Comedy",
      location: "Las Vegas Comedy Club",
      time: "2024-12-25",
      event_image: "https://www.discoverlosangeles.com/sites/default/files/images/2024-03/Comedy-Night_Key-Art-Sq-sm_0.jpg?width=480&fit=bound&quality=100&auto=webp",
    },
  ]);
  const [filteredEvents, setFilteredEvents] = useState(eventData);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    category: "",
    event_title: "",
    location: "",
    time: "",
    event_image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = eventData.filter((event) => {
      const matchesCategory =
        category === "all" || event.category === category;
      const matchesRegion =
        region === "all" || event.location.includes("Las Vegas");
      const matchesDate = date === "" || event.time === date;
      return matchesCategory && matchesRegion && matchesDate;
    });
    setFilteredEvents(filtered);
  };

  const handleClear = () => {
    setCategory("all");
    setRegion("all");
    setDate("");
    setFilteredEvents(eventData);
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    setEventData([...eventData, newEvent]);
    setFilteredEvents([...eventData, newEvent]);
    setNewEvent({
      category: "",
      event_title: "",
      location: "",
      time: "",
      event_image: "",
    });
    setModalIsOpen(false);
  };

  return (
    <div>
      <div>
        <img src={img} className="w-full" alt="" />
      </div>

      {/* part 2 */}
      <div className="m-4 flex justify-center">
        <Link to="/event-hotel">
          <button className="bg-[#f94a62] px-8 py-4 text-white">
            Find a Hotel
          </button>
        </Link>
      </div>

      {/* part 3 */}
      <div className="flex items-center justify-center bg-gray-200 py-5">
        <div className="w-full max-w-2xl">
          <h2 className="text-center text-4xl font-bold mb-4">
            FIND LOS ANGELES EVENTS
          </h2>
          <form onSubmit={handleSubmit} className=" ">
            <div className="flex justify-between gap-3 items-center">
              <div className=" ">
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                >
                  <option value="all">Category (all)</option>
                  <option value="technology">Art & Theater</option>
                  <option value="science">Bookstore Event</option>
                  <option value="health">Comedy</option>
                  <option value="sports">Dance</option>
                  <option value="sports">Educational</option>
                  <option value="sports">Family</option>
                  <option value="sports">Festival</option>
                  <option value="sports">Flim,TV & Redio</option>
                  <option value="sports">Food & Drinks</option>
                  <option value="sports">LQBTQ+</option>
                  <option value="sports">Miscellengenous</option>
                  <option value="sports">Muesomen & Gallaries</option>
                  <option value="sports">Music</option>
                  <option value="sports">Outdoor</option>
                  <option value="sports">Sports</option>
                  {/* Add more categories as needed */}
                </select>
              </div>

              <div className="">
                <select
                  id="region"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                >
                  <option value="all">Region All</option>
                  <option value="las-vegas">Las Vegas</option>
                </select>
              </div>

              <div className=" rounded-lg text-center">
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            <div className="max-w-2xl mx-auto flex justify-center gap-4 mt-3">
              <button
                type="submit"
                className="w-full p-2 bg-purple-400 text-white font-bold rounded hover:bg-purple-500"
              >
                Go
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="w-full p-2 bg-gray-700 text-white font-bold rounded hover:bg-gray-800"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => setModalIsOpen(true)}
                className="w-full p-2 bg-green-500 text-white font-bold rounded hover:bg-green-600"
              >
                Add Event
              </button>
            </div>
          </form>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <h3 className="text-2xl font-bold mb-4">Add New Event</h3>
            <form onSubmit={handleAddEvent} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Category"
                  value={newEvent.category}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, category: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Event Title"
                  value={newEvent.event_title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, event_title: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Location"
                  value={newEvent.location}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, location: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Time"
                  value={newEvent.time}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, time: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Event Image URL"
                  value={newEvent.event_image}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, event_image: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-green-500 text-white font-bold rounded hover:bg-green-600"
              >
                Add Event
              </button>
            </form>
          </Modal>

         
        </div>
      </div>

      {/* part 4 */}
      <div className="max-w-6xl mx-auto p-5">
      <div className="mt-6">
            <h3 className="text-2xl font-bold mb-2">Event List</h3>
            <ul className="space-y-2 grid grid-cols-3">
              {filteredEvents.map((event, index) => (
                <li key={index} className="border p-4 rounded">
                  <img src={event.event_image} alt={event.event_title} className="mb-2 w-[250px] h-[250px]    rounded" />
                  <h4 className="text-xl font-bold">{event.event_title}</h4>
                  <p>{event.category}</p>
                  <p>{event.location}</p>
                  <p>{event.time}</p>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Events;
