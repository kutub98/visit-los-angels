import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Meeting = () => {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/api/v1/events');
        console.log(response.data.events);
        const filteredMeetings = response.data.events.filter(event => event.category === 'Meeting');
        setMeetings(filteredMeetings);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>All meeting Here</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className='grid lg:grid-cols-2'>
          {meetings.length > 0 ? (
            meetings.map(meeting => (

              <div key={meeting._id} className="border  m-5 p-5">
                <h2 className='font-bold'>{meeting.event_title}</h2>
                <p>{meeting.event_description}</p>
                <a className='text-blue-500' href={meeting.event_link} target="_blank" rel="noopener noreferrer">
                  Event Link
                </a>
                <img src={meeting.event_image} className='w-[500px] h-[250px] ' alt={meeting.event_title} />
                <p>Location: {meeting.location}</p>
              </div>
            ))
          ) : (
            <p>No meetings found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Meeting;
