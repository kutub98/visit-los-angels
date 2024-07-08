/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-tailwind/react';
import Swal from 'sweetalert2';
import CommonModal from './CommonModal';

const SubCommonManu = ({ datak }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/v1/menu');
      //   console.log(response.data);
      const filteredBars = response.data.filter((event) => event.sub_category === datak);
      setData(filteredBars);
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
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5000/api/v1/menu/${id}`);
          fetchEvents(); // Fetch events again to update the list after deletion
          Swal.fire({
            title: 'Deleted!',
            text: 'Event deleted successfully!',
            icon: 'success'
          });
        } catch (error) {
          console.error('Error deleting event:', error);
          Swal.fire('Error', 'Error deleting event', 'error');
        }
      }
    });
  };

  const handleEditEvent = (event) => {
    setSelectedEvent(event);
    setEditModalOpen(true);
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid lg:grid-cols-2">
          {data.length > 0 ? (
            data.map((d) => (
              <div key={d._id} className="border m-5 p-5">
                <h2 className="font-bold">{d.headline}</h2>
                <p>{d.short_headline_description}</p>
                <a
                  className="text-blue-500"
                  href={d.event_link}
                  target="_blank"
                  rel="noopener noreferrer">
                  Event Link
                </a>
                <img src={d.headline_image} className="w-[500px] h-[250px]" alt={'d'} />
                <p>Location: {d.location}</p>
                <p>Category: {d.category}</p>
                <p>Sub Category: {d.sub_category}</p>
                <div className="flex justify-between mt-2">
                  <Button onClick={() => handleEditEvent(d)} className="bg-[#1cacb1]">
                    Edit
                  </Button>
                  <Button onClick={() => handleDeleteEvent(d._id)} className="bg-red-500">
                    Delete
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p>No Data found</p>
          )}
        </div>
      )}
      <CommonModal
        isOpen={editModalOpen}
        handleClose={() => setEditModalOpen(false)}
        eventData={selectedEvent}
        fetchEvents={fetchEvents}
      />
    </div>
  );
};

export default SubCommonManu;
