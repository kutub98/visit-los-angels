import React, { useState } from 'react';
import { Input } from '@material-tailwind/react';
import { useForm } from 'react-hook-form';
import { FaCloudUploadAlt } from 'react-icons/fa';
import axios from 'axios';
import FormData from 'form-data';
import Swal from 'sweetalert2';

const categoriesWithSubcategories = {
  'things-To-Do': [
    'Attractions & Tours',
    'Arts & Cultures',
    'Outdoors & Wellness',
    'Shopping',
    'Budget',
    'Family',
    'Hidden Gems',
    'Luxury',
    'Pet-friendly'
  ],
  'eat-And-Drink': ['Bars', 'Clubs', 'LA Restaurants', 'Business Spotlight'],
  'find-event': [],
  Itineraries: [],
  'where-To-Stay': [],
  'celebrate-la-heritage': ['AAPI Heritage', 'Black LA', 'Latino Heritage'],
  'tourist-information': [],
  Meeting: [],
  'About-La-Tourism': [
    'About LA Tourism',
    'Travel Trade',
    'Membership',
    'Business Spotlight',
    'Media',
    'Research',
    'Careers'
  ]
};

const AddData = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [headlinePreview, setHeadlinePreview] = useState('');
  const [headlineImageUrl, setHeadlineImageUrl] = useState('');
  const [categoryImagePreview, setCategoryImagePreview] = useState('');
  const [categoryImageUrl, setCategoryImageUrl] = useState('');
  const [subcategoryImagePreview, setSubcategoryImagePreview] = useState('');
  const [subcategoryImageUrl, setSubcategoryImageUrl] = useState('');
  const [typeImagePreview, setTypeImagePreview] = useState('');
  const [typeImageUrl, setTypeImageUrl] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleImagePreview = async (file, setImagePreview, setImageUrl) => {
    if (file.length > 0) {
      const formData = new FormData();
      formData.append('image', file[0]);

      try {
        const response = await axios.post(
          'https://api.imgbb.com/1/upload?key=f38e45febf287b0c4bc835d28ec2cb8c',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );

        if (response.data && response.data.data && response.data.data.image) {
          setImagePreview(response.data.data.display_url);
          setImageUrl(response.data.data.image.url);
        }
      } catch (error) {
        console.error('Error uploading image to imgBB:', error);
        // Handle error as needed
      }
    }
  };

  const onSubmit = async (data) => {
    try {
      const formData = {
        ...data,
        headline_image: headlineImageUrl,
        category_image: categoryImageUrl,
        sub_category_image: subcategoryImageUrl,
        type_image: typeImageUrl
      };

      console.log(formData);
      const res = await axios.post('http://localhost:5000/api/v1/menu', formData);
      console.log(res);

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Signed up successfully',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      console.error('Error during signup:', error);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Add Data failed',
        text: error.message || 'Please try again later',
        showConfirmButton: true
      });
    }
  };

  return (
    <div>
      <div>
        <form
          className="mb-2 w-full grid grid-cols-12 gap-4 p-10 bg-white shadow-xl"
          onSubmit={handleSubmit(onSubmit)}>
          {/* First column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Headline</h1>
            <div className="w-full">
              <Input
                {...register('headline', { required: true })}
                label="Headline"
                className="w-full"
              />
              {errors.headline && <span className="text-red-600">This field is required</span>}
            </div>
          </div>

          {/* Second column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Headline Short Description</h1>
            <div className="w-full">
              <textarea
                {...register('short_headline_description')}
                placeholder="Headline Short Description"
                className="w-full"
              />
              {errors.short_headline_description && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>

          {/* Third column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Date and Time</h1>
            <div className="w-full">
              <Input {...register('date_and_time')} label="Date and Time" className="w-full" />
              {errors.date_and_time && <span className="text-red-600">This field is required</span>}
            </div>
          </div>

          {/* Fifth column - Category */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Category</h1>
            <select
              {...register('category')}
              className="w-full px-2 py-2 border bg-none rounded border-gray-400"
              value={selectedCategory}
              onChange={handleCategoryChange}>
              <option value="">Select Category</option>
              {Object.keys(categoriesWithSubcategories).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && <span className="text-red-600">This field is required</span>}
          </div>

          {/* Sixth column - Subcategory */}
          {selectedCategory && categoriesWithSubcategories[selectedCategory]?.length > 0 && (
            <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
              <h1 className="mb-5">Sub Category</h1>
              <select
                {...register('sub_category')}
                className="w-full px-2 py-2 rounded border border-gray-400 bg-blue-gray-50">
                <option value="">Select Subcategory</option>
                {categoriesWithSubcategories[selectedCategory].map((subcategory, index) => (
                  <option key={index} value={subcategory}>
                    {subcategory}
                  </option>
                ))}
              </select>
              {errors.sub_category && <span className="text-red-600">This field is required</span>}
            </div>
          )}

          {/* Seventh column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Category Description</h1>
            <div className="w-full">
              <Input
                {...register('category_description', { required: true })}
                label="Category Description"
                className="w-full"
              />
              {errors.category_description && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>

          {/* Eighth column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Category Title</h1>
            <div className="w-full">
              <Input
                {...register('category_title', { required: true })}
                label="Category Title"
                className="w-full"
              />
              {errors.category_title && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>

          {/* Ninth column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Category Type</h1>
            <div className="w-full">
              <Input
                {...register('category_type', { required: true })}
                label="Category Type"
                className="w-full"
              />
              {errors.category_type && <span className="text-red-600">This field is required</span>}
            </div>
          </div>

          {/* Tenth column - Headline Image */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Headline Image</h1>
            <div className="w-full flex items-center">
              <label className="w-full p-4 shadow-lg shrink text-center rounded-full border block flex items-center">
                <input
                  type="file"
                  id="headline-image"
                  {...register('headline_image', { required: true })}
                  className="w-full hidden"
                  onChange={(e) =>
                    handleImagePreview(e.target.files, setHeadlinePreview, setHeadlineImageUrl)
                  }
                />
                <FaCloudUploadAlt className="mr-2" />
                Upload Headline Image
              </label>
              {headlinePreview && (
                <img
                  src={headlinePreview}
                  alt="Headline Preview"
                  className="mt-2 sm:order-1 md:order-1"
                  style={{ maxWidth: '120px' }}
                />
              )}
              {errors.headline_image && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>

          {/* Eleventh column - Category Image */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Category Image</h1>
            <div className="w-full flex items-center">
              <label className="w-full p-4 shadow-lg shrink text-center rounded-full border block flex items-center">
                <input
                  type="file"
                  id="category-image"
                  {...register('category_image', { required: true })}
                  className="w-full hidden"
                  onChange={(e) =>
                    handleImagePreview(e.target.files, setCategoryImagePreview, setCategoryImageUrl)
                  }
                />
                <FaCloudUploadAlt className="mr-2" />
                Upload Category Image
              </label>
              {categoryImagePreview && (
                <img
                  src={categoryImagePreview}
                  alt="Category Preview"
                  className="mt-2 sm:order-1 md:order-1"
                  style={{ maxWidth: '120px' }}
                />
              )}
              {errors.category_image && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>

          {/* Twelfth column - Subcategory Image */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Subcategory Image</h1>
            <div className="w-full flex items-center">
              <label className="w-full p-4 shadow-lg shrink text-center rounded-full border block flex items-center">
                <input
                  type="file"
                  id="subcategory-image"
                  {...register('sub_category_image', { required: true })}
                  className="w-full hidden"
                  onChange={(e) =>
                    handleImagePreview(
                      e.target.files,
                      setSubcategoryImagePreview,
                      setSubcategoryImageUrl
                    )
                  }
                />
                <FaCloudUploadAlt className="mr-2" />
                Upload Subcategory Image
              </label>
              {subcategoryImagePreview && (
                <img
                  src={subcategoryImagePreview}
                  alt="Subcategory Preview"
                  className="mt-2 sm:order-1 md:order-1"
                  style={{ maxWidth: '120px' }}
                />
              )}
              {errors.sub_category_image && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>

          {/* Thirteenth column - Type Image */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Type Image</h1>
            <div className="w-full flex items-center">
              <label className="w-full p-4 shadow-lg shrink text-center rounded-full border block flex items-center">
                <input
                  type="file"
                  id="type-image"
                  {...register('type_image', { required: true })}
                  className="w-full hidden"
                  onChange={(e) =>
                    handleImagePreview(e.target.files, setTypeImagePreview, setTypeImageUrl)
                  }
                />
                <FaCloudUploadAlt className="mr-2" />
                Upload Type Image
              </label>
              {typeImagePreview && (
                <img
                  src={typeImagePreview}
                  alt="Type Preview"
                  className="mt-2 sm:order-1 md:order-1"
                  style={{ maxWidth: '120px' }}
                />
              )}
              {errors.type_image && <span className="text-red-600">This field is required</span>}
            </div>
          </div>

          {/* submit button */}
          <div className="col-span-12 flex justify-end text-center items-center">
            <button
              type="submit"
              className="py-2 px-3 bg-green-500 lg:w-1/3 md:w-1/2 w-full text-white rounded hover:bg-green-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddData;
