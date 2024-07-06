import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-tailwind/react';
import Swal from 'sweetalert2';

const Itineraries = () => {
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/v1/events');
      const filteredItineraries = response.data.events.filter(
        (event) => event.category === 'itineraries'
      );
      setItineraries(filteredItineraries);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDeleteEvent = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5000/api/v1/events/${id}`);
          fetchEvents(); // Fetch events again to update the list after deletion
          Swal.fire({
            title: 'Deleted!',
            text: 'Event deleted successfully!',
            icon: 'success',
          });
        } catch (error) {
          console.error('Error deleting event:', error);
          Swal.fire('Error', 'Error deleting event', 'error');
        }
      }
    });
  };

  return (
    <div>
      <h1>All Itineraries Here</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid lg:grid-cols-2">
          {itineraries.length > 0 ? (
            itineraries.map((itinerary) => (
              <div key={itinerary._id} className="border m-5 p-5">
                <h2 className="font-bold">{itinerary.event_title}</h2>
                <p>{itinerary.event_description}</p>
                <a
                  className="text-blue-500"
                  href={itinerary.event_link}
                  target="_blank"
                  rel="noopener noreferrer">
                  Event Link
                </a>
                <img
                  src={itinerary.event_image}
                  className="w-[500px] h-[250px]"
                  alt={itinerary.event_title}
                />
                <p>Location: {itinerary.location}</p>
                <div className="flex justify-between mt-2">
                  <Button
                    // onClick={() => handleEditEvent(itinerary)}
                    className="bg-[#1cacb1]">
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteEvent(itinerary._id)}
                    className="bg-red-500">
                    Delete
                  </Button>
                </div>
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
