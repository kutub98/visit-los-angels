import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TouristInformation = () => {
  const [touristInfo, setTouristInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/api/v1/events');
        const filteredInfo = response.data.events.filter(event => event.category === 'tourist_information');
        setTouristInfo(filteredInfo);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>This is the Tourist Information page</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {touristInfo.length > 0 ? (
            touristInfo.map(info => (
              <div key={info._id} className="border  m-5 p-5">
                <h2>{info.event_title}</h2>
                <p>{info.event_description}</p>
                <a href={info.event_link} target="_blank" rel="noopener noreferrer">
                  Event Link
                </a>
                <img className='w-[500px] h-[250px] ' src={info.event_image} alt={info.event_title} />
                <p>Location: {info.location}</p>
              </div>
            ))
          ) : (
            <p>No tourist information found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TouristInformation;
