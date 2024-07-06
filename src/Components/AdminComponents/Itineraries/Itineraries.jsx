import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Itineraries = () => {
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/api/v1/events');
        const filteredItineraries = response.data.events.filter(event => event.category === 'itineraries');
        setItineraries(filteredItineraries);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>This is the Itineraries page</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className='grid lg:grid-cols-2'>
          {itineraries.length > 0 ? (
            itineraries.map(itinerary => (
              <div key={itinerary._id} className="border  m-5 p-5">
                <h2 className='font-bold'>{itinerary.event_title}</h2>
                <p>{itinerary.event_description}</p>
                <a href={itinerary.event_link} target="_blank" rel="noopener noreferrer">
                  Event Link
                </a>
                <img className='w-[500px] h-[250px] ' src={itinerary.event_image} alt={itinerary.event_title} />
                <p>Location: {itinerary.location}</p>
              </div>
            ))
          ) : (
            <p>No itineraries found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Itineraries;
