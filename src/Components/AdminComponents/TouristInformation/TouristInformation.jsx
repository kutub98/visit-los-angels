import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-tailwind/react';
import Swal from 'sweetalert2';

const TouristInformation = () => {
  const [touristInfos, setTouristInfos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/v1/events');
      const filteredTouristInfos = response.data.events.filter(
        (event) => event.category === 'tourist_information'
      );
      setTouristInfos(filteredTouristInfos);
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
      <h1>All Tourist Information Here</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid lg:grid-cols-2">
          {touristInfos.length > 0 ? (
            touristInfos.map((info) => (
              <div key={info._id} className="border m-5 p-5">
                <h2 className="font-bold">{info.event_title}</h2>
                <p>{info.event_description}</p>
                <a
                  className="text-blue-500"
                  href={info.event_link}
                  target="_blank"
                  rel="noopener noreferrer">
                  Event Link
                </a>
                <img
                  src={info.event_image}
                  className="w-[500px] h-[250px]"
                  alt={info.event_title}
                />
                <p>Location: {info.location}</p>
                <div className="flex justify-between mt-2">
                  <Button
                    // onClick={() => handleEditEvent(info)}
                    className="bg-[#1cacb1]">
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteEvent(info._id)}
                    className="bg-red-500">
                    Delete
                  </Button>
                </div>
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
