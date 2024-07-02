import React, { useState, useEffect } from 'react';
import { Input, Option, Select } from '@material-tailwind/react';

const categoriesWithSubcategories = {
  thingsToDo: [
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
  eatAndDrink: ['Bars', 'Clubs', 'LA Restaurants', 'Business Spotlight'],
  'find-event': [],
  itineraries: [],
  whereToStay: [],
  'celebrate-la-heritage': ['AAPI Heritage', 'Black LA', 'Latino Heritage'],
  'tourist-information': [],
  meeting: [],
  aboutLaTourism: [
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

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <div className="w-full">
      <form className="mb-2 w-full p-10 bg-white shadow-xl">
        <div className="grid grid-cols-12 gap-6 mb-1 w-full">
          {/* First column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Headline</h1>
            <div className="w-full">
              <Input label="Headline" className="w-full" />
            </div>
          </div>

          {/* Second column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Headline Short Description</h1>
            <div className="w-full">
              <textarea size="sm" placeholder="Headline Short Description" className="w-full" />
            </div>
          </div>

          {/* Third column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Date and Time</h1>
            <div className="w-full">
              <Input label="Date and Time" className="w-full" />
            </div>
          </div>

          {/* Fourth column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Headline Image</h1>
            <div className="w-full flex items-center">
              <Input type="file" label="Headline Image" className="w-full" />
              <img src="" alt="Headline Preview" />
            </div>
          </div>

          {/* Fifth column - Category */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Category</h1>
            <select
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
          </div>

          {/* Sixth column - Subcategory */}
          {selectedCategory && categoriesWithSubcategories[selectedCategory]?.length > 0 && (
            <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
              <h1 className="mb-5">Sub Category</h1>
              <select className="w-full px-2 py-2 rounded  border  border-gray-400 bg-blue-gray-50">
                <option value="">Select Subcategory</option>
                {categoriesWithSubcategories[selectedCategory].map((subcategory, index) => (
                  <option key={index} value={subcategory}>
                    {subcategory}
                  </option>
                ))}
              </select>
            </div>
          )}
          {/* Seventh column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Category Title</h1>
            <div className="w-full">
              <Input label="Category Title" className="w-full" />
            </div>
          </div>

          {/* Eighth column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Category Description</h1>
            <div className="w-full">
              <textarea size="sm" placeholder="Category Description" className="w-full" />
            </div>
          </div>

          {/* Ninth column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Category Image</h1>
            <div className="w-full flex items-center">
              <Input type="file" label="Category Image" className="w-full" />
              <img src="" alt="Category Preview" />
            </div>
          </div>

          {/* Tenth column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Subcategory Image</h1>
            <div className="w-full flex items-center">
              <Input type="file" label="Subcategory Image" className="w-full" />
              <img src="" alt="Subcategory Preview" />
            </div>
          </div>

          {/* Eleventh column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Category Type</h1>
            <Select color="teal" label="Select Category Type">
              <Option value="">Material Tailwind HTML</Option>
              <Option value="">Material Tailwind React</Option>
              <Option value="">Material Tailwind Vue</Option>
              <Option value="">Material Tailwind Angular</Option>
              <Option value="">Material Tailwind Svelte</Option>
            </Select>
          </div>

          {/* Twelfth column */}
          <div className="lg:col-span-6 col-span-12 flex flex-col bg-gray-50 shadow-sm p-3">
            <h1 className="mb-5">Type Image</h1>
            <div className="w-full flex items-center">
              <Input type="file" label="Type Image" className="w-full" />
              <img src="" alt="Type Preview" />
            </div>
          </div>

          {/* Last column */}
          <div className="col-span-12 flex flex-col justify-end">
            <div className="flex justify-end">
              <button className="w-full lg:w-2/5 md:w-3/5 p-2 text-white font-bold hover:bg-[#893a9c] transition rounded bg-green-500">
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
