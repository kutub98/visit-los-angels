// import React, { useState } from 'react';
// import { Input, Option, Select } from '@material-tailwind/react';
// import { FaCloudUploadAlt } from 'react-icons/fa';

// const categoriesWithSubcategories = {
//   'things-To-Do': [
//     'Attractions & Tours',
//     'Arts & Cultures',
//     'Outdoors & Wellness',
//     'Shopping',
//     'Budget',
//     'Family',
//     'Hidden Gems',
//     'Luxury',
//     'Pet-friendly'
//   ],
//   ' eat-And-Drink': ['Bars', 'Clubs', 'LA Restaurants', 'Business Spotlight'],
//   'find-event': [],
//   Itineraries: [],
//   'where-To-Stay': [],
//   'celebrate-la-heritage': ['AAPI Heritage', 'Black LA', 'Latino Heritage'],
//   'tourist-information': [],
//   Meeting: [],
//   'About-La-Tourism': [
//     'About LA Tourism',
//     'Travel Trade',
//     'Membership',
//     'Business Spotlight',
//     'Media',
//     'Research',
//     'Careers'
//   ]
// };

// const   AddData = () => {
//   const [selectedCategory, setSelectedCategory] = useState('');

//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//   };
//   return (
//     <div className="w-full">
//       <form className="mb-2 w-full p-10 bg-white shadow-xl">
//         <div className="grid grid-cols-12 gap-6 mb-1 w-full">
//           {/* First column */}
//           <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
//             <h1 className="mb-5">Headline</h1>
//             <div className="w-full">
//               <Input label="Headline" className="w-full" />
//             </div>
//           </div>

//           {/* Second column */}
//           <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
//             <h1 className="mb-5">Headline Short Description</h1>
//             <div className="w-full">
//               <textarea size="sm" placeholder="Headline Short Description" className="w-full" />
//             </div>
//           </div>

//           {/* Third column */}
//           <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
//             <h1 className="mb-5">Date and Time</h1>
//             <div className="w-full">
//               <Input label="Date and Time" className="w-full" />
//             </div>
//           </div>

//           {/* Fourth column */}
//           <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
//             <h1 className="mb-5">Headline Image</h1>
//             <div className="w-full flex items-center">
//               <Input type="file" label="Headline Image" className="w-full" />
//               <img src="" alt="Headline Preview" />
//             </div>
//           </div>

//           {/* Fifth column - Category */}
//           <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
//             <h1 className="mb-5">Category</h1>
//             <select
//               className="w-full px-2 py-2 border bg-none rounded border-gray-400"
//               value={selectedCategory}
//               onChange={handleCategoryChange}>
//               <option value="">Select Category</option>
//               {Object.keys(categoriesWithSubcategories).map((category) => (
//                 <option key={category} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Sixth column - Subcategory */}
//           {selectedCategory && categoriesWithSubcategories[selectedCategory]?.length > 0 && (
//             <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
//               <h1 className="mb-5">Sub Category</h1>
//               <select className="w-full px-2 py-2 rounded  border  border-gray-400 bg-blue-gray-50">
//                 <option value="">Select Subcategory</option>
//                 {categoriesWithSubcategories[selectedCategory].map((subcategory, index) => (
//                   <option key={index} value={subcategory}>
//                     {subcategory}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           )}
//           {/* Seventh column */}
//           <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
//             <h1 className="mb-5">Category Title</h1>
//             <div className="w-full">
//               <Input label="Category Title" className="w-full" />
//             </div>
//           </div>

//           {/* Eighth column */}
//           <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
//             <h1 className="mb-5">Category Description</h1>
//             <div className="w-full">
//               <textarea size="sm" placeholder="Category Description" className="w-full" />
//             </div>
//           </div>

//           {/* Ninth column */}
//           <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
//             <h1 className="mb-5">Category Image</h1>
//             <div className="w-full flex items-center">
//               <Input type="file" label="Category Image" className="w-full" />
//               <img src="" alt="Category Preview" />
//             </div>
//           </div>

//           {/* Tenth column */}
//           <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
//             <h1 className="mb-5">Subcategory Image</h1>
//             <div className="w-full flex items-center">
//               <Input type="file" label="Subcategory Image" className="w-full" />
//               <img src="" alt="Subcategory Preview" />
//             </div>
//           </div>

//           {/* Eleventh column */}
//           <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
//             <h1 className="mb-5">Category Type</h1>
//             <Select color="teal" label="Select Category Type">
//               <Option value="">Material Tailwind HTML</Option>
//               <Option value="">Material Tailwind React</Option>
//               <Option value="">Material Tailwind Vue</Option>
//               <Option value="">Material Tailwind Angular</Option>
//               <Option value="">Material Tailwind Svelte</Option>
//             </Select>
//           </div>

//           {/* Twelfth column */}
//           <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
//             <h1 className="mb-5">Type Image</h1>
//             <div className="w-full flex items-center">
//               <label className="cursor-pointer shadow-md border items-center px-3 py-2 rounded-full flex justify-center text-center">
//                 <FaCloudUploadAlt className="mr-2" />
//                 Upload Type Image
//                 <input type="file" className="hidden" />
//               </label>
//             </div>
//           </div>
//           {/* thirteen column */}
//           {/* <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
//             <h1 className="mb-5">Contact Details</h1>
//             <div className="w-full  h-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
//               <div className="mb-2">
//                 <Input type="text" label="Contact Number" className=" mb-10" />
//               </div>
//               <div className="mb-2">
//                 <Input type="text" label="Locations" className=" mb-10" />
//               </div>
//               <div className="mb-2">
//                 <Input type="text" label="Start Date" className=" mb-10" />
//               </div>
//               <div className="mb-2">
//                 <Input type="text" label="End Date" className=" mb-10" />
//               </div>
//             </div>
//           </div> */}

//           {/* Last column */}
//           <div className="col-span-12 flex flex-col justify-end">
//             <div className="flex justify-end">
//               <button className="w-full lg:w-2/5 md:w-3/5 p-2 text-white font-bold hover:bg-[#893a9c] transition rounded bg-green-500">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddData;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input, Select, Option } from '@material-tailwind/react';
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
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const onSubmit = async (data) => {
    const {
      headline,
      headline_image,
      short_headline_description,
      category,
      sub_category,
      category_description,
      category_title,
      category_image,
      sub_category_image,
      category_type,
      type_image,
      date_and_time
    } = data;
    // console.log(data);
    // console.log(headline_image);
    const formData = new FormData();
    formData.append('headline', headline);
    formData.append('short_headline_description', short_headline_description);
    formData.append('category', category);
    formData.append('sub_category', sub_category);
    formData.append('category_description', category_description);
    formData.append('category_title', category_title);
    formData.append('category_type', category_type);
    formData.append('date_and_time', date_and_time);
    formData.append('headline_image', headline_image[0]);
    formData.append('category_image', category_image[0]);
    formData.append('sub_category_image', sub_category_image[0]);
    formData.append('type_image', type_image[0]);
    // console.log(formData);

    try {
      const res = await axios.post('http://localhost:5000/api/v1/menu', formData);
      console.log(res);

      Swal.fire({
        position: 'top',
        icon: 'success',
        title: ' Signed up successfully',
        showConfirmButton: false,
        timer: 1500
      })
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
      <form className="mb-2 w-full p-10 bg-white shadow-xl" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12 gap-6 mb-1 w-full">
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
              {errors.headlineShortDescription && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>

          {/* Third column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Date and Time</h1>
            <div className="w-full">
              <Input {...register('date_and_time')} label="Date and Time" className="w-full" />
              {errors.dateAndTime && <span className="text-red-600">This field is required</span>}
            </div>
          </div>

          {/* Fourth column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Headline Image</h1>
            <div className="w-full flex items-center">
              <Input
                type="file"
                id="file-upload"
                {...register('headline_image')}
                label="Headline Image"
                className="w-full"
              />
              <img src="" alt="Headline Preview" />
              {errors.headlineImage && <span className="text-red-600">This field is required</span>}
            </div>
          </div>

          {/* Fifth column - Category */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Category</h1>
            <select
              {...register('category')}
              className="w-full px-2 py-2 border bg-none rounded border-gray-400"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
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
              {errors.subcategory && <span className="text-red-600">This field is required</span>}
            </div>
          )}

          {/* Seventh column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Category Title</h1>
            <div className="w-full">
              <Input {...register('categoryTitle')} label="Category Title" className="w-full" />
              {errors.categoryTitle && <span className="text-red-600">This field is required</span>}
            </div>
          </div>

          {/* Eighth column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Category Description</h1>
            <div className="w-full">
              <textarea
                {...register('category_description')}
                placeholder="Category Description"
                className="w-full"
              />
              {errors.categoryDescription && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>

          {/* Ninth column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Category Image</h1>
            <div className="w-full flex items-center">
              <Input
                type="file"
                {...register('category_image')}
                label="Category Image"
                className="w-full"
              />
              <img src="" alt="Category Preview" />
              {errors.categoryImage && <span className="text-red-600">This field is required</span>}
            </div>
          </div>

          {/* Tenth column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Subcategory Image</h1>
            <div className="w-full flex items-center">
              <Input
                type="file"
                {...register('sub_category_image')}
                label="Subcategory Image"
                className="w-full"
              />
              <img src="" alt="Subcategory Preview" />
              {errors.subcategoryImage && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>

          {/* Eleventh column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Category Type</h1>
            <Select color="teal" label="Select Category Type" {...register('category_type')}>
              <Option value="Material Tailwind HTML">Material Tailwind HTML</Option>
              <Option value="Material Tailwind React">Material Tailwind React</Option>
              <Option value="Material Tailwind Vue">Material Tailwind Vue</Option>
              <Option value="Material Tailwind Angular">Material Tailwind Angular</Option>
              <Option value="Material Tailwind Svelte">Material Tailwind Svelte</Option>
            </Select>
            {errors.categoryType && <span className="text-red-600">This field is required</span>}
          </div>

          {/* Twelfth column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Type Image</h1>
            <div className="w-full flex items-center">
              <label className="cursor-pointer shadow-md border items-center px-3 py-2 rounded-full flex justify-center text-center">
                <FaCloudUploadAlt className="mr-2" />
                Upload Type Image
                <input type="file" className="hidden" {...register('type_image')} />
              </label>
              {errors.typeImage && <span className="text-red-600">This field is required</span>}
            </div>
          </div>

          {/* Last column */}
          <div className="col-span-12 flex flex-col justify-end">
            <div className="flex justify-end">
              <button
                className="w-full lg:w-2/5 md:w-3/5 p-2 text-white font-bold hover:bg-[#893a9c] transition rounded bg-green-500"
                type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddData;
