import React from 'react';
import { useForm } from 'react-hook-form';

const SubmitForm = () => {
  const { handleSubmit, register, setValue, getValues } = useForm();

  // Initialize form values based on heroImg structure
  React.useEffect(() => {
    setValue('mainImg[0].src', ''); // Replace with default values or leave empty
    setValue('mainImg[1].src', '');
    setValue('passKey[0].src', '');
    setValue('passKey[0].list[0]', '');
    setValue('passKey[0].list[1]', '');
    setValue('passKey[0].list[2]', '');
    setValue('passKey[0].list[3]', '');
    setValue('howPassWork.step[0].stepNum', '');
    setValue('howPassWork.step[0].src', '');
    setValue('howPassWork.step[0].details', '');
    setValue('howPassWork.step[1].stepNum', '');
    setValue('howPassWork.step[1].src', '');
    setValue('howPassWork.step[1].details', '');
    setValue('howPassWork.step[2].stepNum', '');
    setValue('howPassWork.step[2].src', '');
    setValue('howPassWork.step[2].details', '');
    setValue('VenuDetails[0].title', '');
    setValue('VenuDetails[1].expirationDate', '');
    setValue('VenuDetails[2].description', '');
    setValue('VenuDetails[3].includeVenuMapLink', '');
    setValue('VenuDetails[4].hotelDetails[0].hotelImg', '');
    setValue('VenuDetails[4].hotelDetails[1].offerName', '');
    setValue('VenuDetails[4].hotelDetails[2].websiteLink', '');
    setValue('VenuDetails[4].hotelDetails[3].details', '');
    setValue('VenuDetails[4].hotelDetails[4].included', '');
  }, [setValue]);

  const onSubmit = (data) => {
    console.log(data); // Replace with your actual submission logic (e.g., API call)
  };

  return (
    <div className="mx-auto">
      <h1 className="text-xl font-semibold mb-4">Submit Data Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Main Images */}
        <div>
          <label htmlFor="mainImg0" className="block font-medium text-gray-700">
            Main Image 1
          </label>
          <input
            type="text"
            id="mainImg0"
            {...register('mainImg[0].src', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="mainImg1" className="block font-medium text-gray-700">
            Main Image 2
          </label>
          <input
            type="text"
            id="mainImg1"
            {...register('mainImg[1].src', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Pass Key */}
        <div>
          <label htmlFor="passKeySrc" className="block font-medium text-gray-700">
            Pass Key Image
          </label>
          <input
            type="text"
            id="passKeySrc"
            {...register('passKey[0].src', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="passKeyList0" className="block font-medium text-gray-700">
            Pass Key List Item 1
          </label>
          <input
            type="text"
            id="passKeyList0"
            {...register('passKey[0].list[0]', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="passKeyList1" className="block font-medium text-gray-700">
            Pass Key List Item 2
          </label>
          <input
            type="text"
            id="passKeyList1"
            {...register('passKey[0].list[1]', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="passKeyList2" className="block font-medium text-gray-700">
            Pass Key List Item 3
          </label>
          <input
            type="text"
            id="passKeyList2"
            {...register('passKey[0].list[2]', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="passKeyList3" className="block font-medium text-gray-700">
            Pass Key List Item 4
          </label>
          <input
            type="text"
            id="passKeyList3"
            {...register('passKey[0].list[3]', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* How Pass Work Steps */}
        <div>
          <label htmlFor="stepNum0" className="block font-medium text-gray-700">
            Step 1 - Step Number
          </label>
          <input
            type="text"
            id="stepNum0"
            {...register('howPassWork.step[0].stepNum', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="stepDetails0" className="block font-medium text-gray-700">
            Step 1 - Details
          </label>
          <textarea
            id="stepDetails0"
            {...register('howPassWork.step[0].details', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            rows="4"
            required
          />
        </div>
        <div>
          <label htmlFor="stepNum1" className="block font-medium text-gray-700">
            Step 2 - Step Number
          </label>
          <input
            type="text"
            id="stepNum1"
            {...register('howPassWork.step[1].stepNum', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="stepDetails1" className="block font-medium text-gray-700">
            Step 2 - Details
          </label>
          <textarea
            id="stepDetails1"
            {...register('howPassWork.step[1].details', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            rows="4"
            required
          />
        </div>
        <div>
          <label htmlFor="stepNum2" className="block font-medium text-gray-700">
            Step 3 - Step Number
          </label>
          <input
            type="text"
            id="stepNum2"
            {...register('howPassWork.step[2].stepNum', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="stepDetails2" className="block font-medium text-gray-700">
            Step 3 - Details
          </label>
          <textarea
            id="stepDetails2"
            {...register('howPassWork.step[2].details', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            rows="4"
            required
          />
        </div>

        {/* Venue Details */}
        <div>
          <label htmlFor="venuTitle" className="block font-medium text-gray-700">
            Venue Title
          </label>
          <input
            type="text"
            id="venuTitle"
            {...register('VenuDetails[0].title', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="expirationDate" className="block font-medium text-gray-700">
            Expiration Date
          </label>
          <input
            type="text"
            id="expirationDate"
            {...register('VenuDetails[1].expirationDate', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            {...register('VenuDetails[2].description', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            rows="6"
            required
          />
        </div>
        <div>
          <label htmlFor="iframeSrc" className="block font-medium text-gray-700">
            Venue Map iFrame Source
          </label>
          <input
            type="text"
            id="iframeSrc"
            {...register('VenuDetails[3].includeVenuMapLink', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="hotelImg" className="block font-medium text-gray-700">
            Hotel Image
          </label>
          <input
            type="text"
            id="hotelImg"
            {...register('VenuDetails[4].hotelDetails[0].hotelImg', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="offerName" className="block font-medium text-gray-700">
            Offer Name
          </label>
          <input
            type="text"
            id="offerName"
            {...register('VenuDetails[4].hotelDetails[1].offerName', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="websiteLink" className="block font-medium text-gray-700">
            Website Link
          </label>
          <input
            type="text"
            id="websiteLink"
            {...register('VenuDetails[4].hotelDetails[2].websiteLink', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="hotelDetails" className="block font-medium text-gray-700">
            Hotel Details
          </label>
          <textarea
            id="hotelDetails"
            {...register('VenuDetails[4].hotelDetails[3].details', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            rows="6"
            required
          />
        </div>
        <div>
          <label htmlFor="included" className="block font-medium text-gray-700">
            Included Details
          </label>
          <input
            type="text"
            id="included"
            {...register('VenuDetails[4].hotelDetails[4].included', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitForm;
