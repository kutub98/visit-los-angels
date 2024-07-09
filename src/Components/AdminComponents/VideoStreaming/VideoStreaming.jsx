/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
import { Button, Dialog, DialogBody, Input } from '@material-tailwind/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const VideoStreaming = () => {
  const [open, setOpen] = useState(false);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    video_title: '',
    video_description: '',
    video_link: ''
  });
  const [playingVideo, setPlayingVideo] = useState(null);

  const handleOpen = () => setOpen((cur) => !cur);

  const fetchVideos = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://visitlos-server.vercel.app/api/v1/video');
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDeleteVideo = async (id) => {
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
          await axios.delete(`https://visitlos-server.vercel.app/api/v1/video/${id}`);
          fetchVideos();
          Swal.fire({
            title: 'Deleted!',
            text: 'Your video has been deleted.',
            icon: 'success'
          });
        } catch (error) {
          console.error('Error deleting video:', error);
          Swal.fire('Error', 'Error deleting video', 'error');
        }
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://visitlos-server.vercel.app/api/v1/video', form);
      Swal.fire('Success', 'Video added successfully', 'success');
      fetchVideos();
      handleClose();
    } catch (error) {
      Swal.fire('Error', 'Error adding video', 'error');
      console.error('Error adding video:', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setForm({
      video_title: '',
      video_description: '',
      video_link: ''
    });
  };

  const handleVideoClick = (videoLink) => {
    setPlayingVideo(videoLink);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-5">
      <div className="bg-white shadow-xl p-5 rounded relative">
        <div className="sticky top-20 w-full flex justify-between">
          <Button className="bg-[#1cacb1]">Total Video</Button>

          <div className="flex gap-3">
            <Button onClick={handleOpen} className="bg-[#1cacb1]">
              Add Video
            </Button>
          </div>
        </div>

        <Dialog open={open} size="lg" handler={handleOpen}>
          <div className="text-center justify-center items-center my-4">
            <h1 className="font-semibold text-2xl">Add a video youtube link</h1>
          </div>
          <DialogBody className="overflow-y-scroll max-h-[90vh] w-full p-5">
            <form className="mt-8 mb-2" onSubmit={handleSubmit}>
              <div className="grid grid-cols-12 gap-2">
                <div className="w-full lg:col-span-6 col-span-12">
                  <Input
                    label="Video Title"
                    name="video_title"
                    value={form.video_title}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full lg:col-span-6 col-span-12">
                  <Input
                    label="Video Short Description"
                    name="video_description"
                    value={form.video_description}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full lg:col-span-6 col-span-12">
                  <Input
                    label="Video Link"
                    name="video_link"
                    value={form.video_link}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex w-full text-center items-center justify-end">
                <button
                  type="submit"
                  className="bg-[#1cacb1] w-56 items-center my-auto text-white px-4 py-2 mt-4 rounded justify-end">
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
        videos.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mt-10 mb-5">All Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {videos.map((video) => (
                <div
                  key={video._id}
                  className="relative cursor-pointer"
                  onClick={() => handleVideoClick(video.video_link)}>
                  <iframe
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/${new URL(video.video_link).searchParams.get('v')}?autoplay=${playingVideo === video.video_link ? 1 : 0}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.video_title}></iframe>
                  <div className="mt-2">
                    <h3 className="font-semibold">{video.video_title}</h3>
                    <p>{video.video_description}</p>
                  </div>
                  <button
                    type="button"
                    className="absolute top-0 right-0 h-6 w-6 text-center flex justify-center items-center bg-red-500 text-white rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteVideo(video._id);
                    }}>
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default VideoStreaming;
