import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@material-tailwind/react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import axios from 'axios';
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
  const [categoryImagePreview, setCategoryImagePreview] = useState('');
  const [subcategoryImagePreview, setSubcategoryImagePreview] = useState('');
  const [typeImagePreview, setTypeImagePreview] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleImagePreview = (file, setImagePreview) => {
    if (file.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file[0]);
    }
  };

  const uploadImageToImgBB = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post(
        'https://api.imgbb.com/1/upload?key=b504fdc0413e90ad6bab3f779b918d1d',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      return response.data.data.url; // Ensure response structure matches ImgBB API
    } catch (error) {
      console.error('Error uploading image to imgBB:', error);
      throw new Error('Image upload failed');
    }
  };

  const onSubmit = async (data) => {
    const {
      headline,
      short_headline_description,
      category,
      sub_category,
      category_description,
      category_title,
      category_type,
      date_and_time,
      headline_image,
      category_image,
      sub_category_image,
      type_image
    } = data;

    try {
      const headlineImageUrl = await uploadImageToImgBB(headline_image[0]);
      const categoryImageUrl = await uploadImageToImgBB(category_image[0]);
      const subcategoryImageUrl = await uploadImageToImgBB(sub_category_image[0]);
      const typeImageUrl = await uploadImageToImgBB(type_image[0]);

      const formData = {
        headline,
        short_headline_description,
        category,
        sub_category,
        category_description,
        category_title,
        category_type,
        date_and_time,
        headline_image_url: headlineImageUrl,
        category_image_url: categoryImageUrl,
        sub_category_image_url: subcategoryImageUrl,
        type_image_url: typeImageUrl
      };

      console.log(formData);
      // Replace 'http://localhost:5000/api/v1/menu' with your backend endpoint
      const res = await axios.post('http://localhost:5000/api/v1/menu', formData);
      console.log(res);

      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Signed up successfully',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      console.error('Error during signup:', error);
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Add Data failed',
        text: error.message || 'Please try again later',
        showConfirmButton: true
      });
    }
  };

  return (
    <div className="w-full">
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

        {/* Fourth column */}
        <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
          <h1 className="mb-5">Headline Image</h1>
          <div className="w-full lg:flex items-center">
            <label className="w-full p-4 shadow-lg shrink text-center rounded-full border block lg:flex items-center">
              <input
                type="file"
                id="headline-image"
                {...register('headline_image', { required: true })}
                label="Headline Image"
                className="w-full hidden"
                onChange={(e) => handleImagePreview(e.target.files, setHeadlinePreview)}
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
            {errors.headline_image && <span className="text-red-600">This field is required</span>}
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
              className="w-full px-2 py-2 rounded  border  border-gray-400 bg-blue-gray-50">
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
            {errors.category_title && <span className="text-red-600">This field is required</span>}
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

        {/* Tenth column */}
        <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
          <h1 className="mb-5">Category Image</h1>
          <div className="w-full lg:flex items-center">
            <label className="w-full p-4 shadow-lg shrink text-center rounded-full border block lg:flex items-center">
              <input
                type="file"
                id="category-image"
                {...register('category_image', { required: true })}
                label="Category Image"
                className="w-full hidden"
                onChange={(e) => handleImagePreview(e.target.files, setCategoryImagePreview)}
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
            {errors.category_image && <span className="text-red-600">This field is required</span>}
          </div>
        </div>

        {/* Eleventh column */}
        <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
          <h1 className="mb-5">Subcategory Image</h1>
          <div className="w-full lg:flex items-center">
            <label className="w-full p-4 shadow-lg shrink text-center rounded-full border block lg:flex items-center">
              <input
                type="file"
                id="subcategory-image"
                {...register('sub_category_image', { required: true })}
                label="Subcategory Image"
                className="w-full hidden"
                onChange={(e) => handleImagePreview(e.target.files, setSubcategoryImagePreview)}
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

        {/* Twelfth column */}
        <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
          <h1 className="mb-5">Type Image</h1>
          <div className="w-full lg:flex items-center">
            <label className="w-full p-4 shadow-lg shrink text-center rounded-full border block lg:flex items-center">
              <input
                type="file"
                id="type-image"
                {...register('type_image', { required: true })}
                label="Type Image"
                className="w-full hidden"
                onChange={(e) => handleImagePreview(e.target.files, setTypeImagePreview)}
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

        {/* Submit button */}
        <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
          <button
            type="submit"
            className="py-2 px-3 bg-green-500 text-white rounded hover:bg-green-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddData;
