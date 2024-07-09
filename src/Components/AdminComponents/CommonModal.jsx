/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Dialog, DialogBody, DialogFooter, Input, Button } from '@material-tailwind/react';
import axios from 'axios';
import Swal from 'sweetalert2';

const CommonModal = ({ isOpen, handleClose, eventData, fetchEvents }) => {
  const [formData, setFormData] = useState({
    headline: '',
    short_headline_description: '',
    event_link: '',
    headline_image: '',
    location: ''
  });

  useEffect(() => {
    if (eventData) {
      setFormData({
        headline: eventData.headline,
        short_headline_description: eventData.short_headline_description,
        event_link: eventData.event_link,
        headline_image: eventData.headline_image,
        location: eventData.location
      });
    }
  }, [eventData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://visitlos-server.vercel.app/api/v1/menu/${eventData._id}`, formData);
      fetchEvents();
      handleClose();
      Swal.fire({
        title: 'Updated!',
        text: 'Event updated successfully!',
        icon: 'success'
      });
    } catch (error) {
      console.error('Error updating event:', error);
      Swal.fire('Error', 'Error updating event', 'error');
    }
  };

  return (
    <Dialog open={isOpen} handler={handleClose} size="lg">
      <form onSubmit={handleSubmit}>
        <DialogBody className="space-y-4">
          <Input
            label="Headline"
            name="headline"
            value={formData.headline}
            onChange={handleChange}
          />
          <Input
            label="Short Headline Description"
            name="short_headline_description"
            value={formData.short_headline_description}
            onChange={handleChange}
          />
          <Input
            label="Event Link"
            name="event_link"
            value={formData.event_link}
            onChange={handleChange}
          />
          <Input
            label="Headline Image URL"
            name="headline_image"
            value={formData.headline_image}
            onChange={handleChange}
          />
          <Input
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </DialogBody>
        <DialogFooter>
          <Button type="button" className="mr-2" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" className="bg-[#1cacb1]">
            Save
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
};

export default CommonModal;
