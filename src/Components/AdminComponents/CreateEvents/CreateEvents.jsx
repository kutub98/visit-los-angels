import { Button, Dialog, DialogBody, Input } from '@material-tailwind/react';
import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { CiImageOn } from 'react-icons/ci';
import axios from 'axios';
import Swal from 'sweetalert2';

const CreateEvents = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [events, setEvents] = useState([]);
  // console.log(events);
  const [showEvents, setShowEvents] = useState(false);
  const [editEvent, setEditEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setImage(file);
    }
  };

  const handleDeleteImage = () => {
    setPreviewImage(null);
    setImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', e.target.title.value);
    formData.append('description', e.target.description.value);
    formData.append('date', e.target.date.value);
    formData.append('location', e.target.location.value);
    formData.append('link', e.target.link.value);

    try {
      if (editEvent) {
        await axios.put(
          `https://visitlos-server.vercel.app/api/v1/events/${editEvent._id}`,
          formData
        );
        Swal.fire('Success', 'Event updated successfully', 'success');
      } else {
        await axios.post('https://visitlos-server.vercel.app/api/v1/events', formData);
        Swal.fire('Success', 'Event added successfully', 'success');
      }
      fetchEvents();
      handleClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire('Error', 'Error submitting form', 'error');
    }
  };

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://visitlos-server.vercel.app/api/v1/events');
      setEvents(response.data);
      setShowEvents(true);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
    setLoading(false);
  };

  const handleShowEvents = () => {
    fetchEvents();
  };

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
          await axios.delete(`https://visitlos-server.vercel.app/api/v1/events/${id}`);
          fetchEvents();
          Swal.fire({
            title: 'Deleted!',
            text: 'Event deleted successfully!.',
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
    setEditEvent(event);
    setPreviewImage(`https://visitlos-server.vercel.app/${event.image}`);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPreviewImage(null);
    setImage(null);
    setEditEvent(null);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-5">
      <div className="bg-white shadow-xl p-5 rounded relative">
        <div className="sticky top-20 w-full flex justify-between">
          <Button className="bg-[#1cacb1]" onClick={handleShowEvents}>
            Total Events
          </Button>

          <div className="flex gap-3">
            <Button onClick={handleOpen} className="bg-[#1cacb1]">
              Add Event
            </Button>
          </div>
        </div>

        <Dialog open={open} size="lg" handler={handleOpen}>
          <div className="text-center justify-center items-center my-4">
            <h1 className="font-semibold text-2xl">{editEvent ? 'Edit Event' : 'Add an Event'}</h1>
          </div>
          <DialogBody className="overflow-y-scroll max-h-[90vh] w-full p-5">
            <form
              className="mt-8 mb-2 grid grid-cols-12 gap-6 row-span-full"
              onSubmit={handleSubmit}>
              <div className="col-span-12 lg:col-span-6">
                <Input label="Event Title" name="title" defaultValue={editEvent?.title || ''} />
              </div>
              <div className="col-span-12 lg:col-span-6 row-span-3 ">
                {previewImage ? (
                  <div className="col-span-12 lg:col-span-6 flex justify-center items-center">
                    <div className="relative">
                      <img
                        src={previewImage}
                        alt="preview"
                        className=" w-32 h-32 object-cover rounded"
                      />
                      <button
                        type="button"
                        className="absolute top-0 right-0 h-6 w-6 text-center flex justify-center items-center rounded-full bg-red-500 text-white "
                        onClick={handleDeleteImage}>
                        X
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className=" w-full shadow-inner">
                    <CiImageOn className="w-full h-48 object-cover rounded" />
                  </div>
                )}
                <div className="col-span-12 lg:col-span-6 flex justify-center items-center">
                  <label className="cursor-pointer shadow-md border items-center w-full px-3 py-2 rounded-full flex justify-center text-center">
                    <FaCloudUploadAlt className="mr-2" />
                    Upload Event Image
                    <input type="file" onChange={handleFileChange} className="hidden" />
                  </label>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-6">
                <Input
                  label="Event Short Description"
                  name="description"
                  defaultValue={editEvent?.description || ''}
                />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <Input
                  label="Date and Time"
                  name="date"
                  type="datetime-local"
                  defaultValue={
                    editEvent ? new Date(editEvent.date).toISOString().substring(0, 16) : ''
                  }
                />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <Input
                  label="Location Link"
                  name="location"
                  defaultValue={editEvent?.location || ''}
                />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <Input label="Event Link" name="link" defaultValue={editEvent?.link || ''} />
              </div>

              {/* Submit button */}
              <div className="col-span-12 flex justify-end mt-6">
                <button type="submit" className="bg-[#1cacb1] text-white px-4 py-2 rounded">
                  Submit
                </button>
              </div>
            </form>
          </DialogBody>
        </Dialog>
      </div>

      {loading ? (
        <div className="flex justify-center mt-10">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        showEvents && (
          <div>
            <h2 className="text-2xl font-semibold mt-10">All Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
              {events?.events?.map((event) => (
                <div key={event._id} className="p-4 border rounded shadow">
                  <img
                    src={`${event.event_image}`}
                    alt="Event"
                    className="w-full h-48 object-cover rounded"
                  />
                  <h3 className="mt-2 font-semibold">{event.event_title}</h3>
                  <p className="text-gray-600">{event.event_description}</p>
                  <p className="text-gray-600">{event.date}</p>
                  <a href={event.location} className="text-blue-500">
                    Location
                  </a>
                  <a href={event.link} className="text-blue-500">
                    Event Link
                  </a>
                  <div className="flex justify-between mt-2">
                    <Button onClick={() => handleEditEvent(event)} className="bg-[#1cacb1]">
                      Edit
                    </Button>
                    <Button onClick={() => handleDeleteEvent(event._id)} className="bg-red-500">
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CreateEvents;
