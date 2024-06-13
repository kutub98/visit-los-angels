/* eslint-disable react/no-unknown-property */
const Newslatter = () => {
  return (
    <div className="bg-[#f94a62] p-5 ">
      <h2 className="text-3xl font-black text-center text-white">
        DISCOVER LA NEWSLETTER
      </h2>
      <div>
        <div className="mt-5 relative   flex justify-end  mx-auto gap-2  pb-2">
          <div className=" md:flex relative mx-auto">
            <input
              type="email"
              className="pr-20 px-5 py-3 w-[200px] sm:w-[300px] md:w-[600px] text-black bg-white"
              placeholder="Enter Your Email"
            />
            <button size="md" className="px-5 py-3  text-white bg-[#333333]">
              Get Update
            </button>
          </div>
        </div>
        <div className="mt-3">
          <div class="inline-flex items-center">
            <label
              class="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor="check"
            >
              <input
                type="checkbox"
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-900 checked:bg-blue-900 checked:before:bg-blue-900 hover:before:opacity-10"
                id="blue"
              />
              <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              class="mt-px font-light text-white text-sm cursor-pointer select-none"
              htmlFor="check"
            >
              I consent to receive the Discover LA newsletter. You can learn
              more by reading our privacy policy, and you can opt out at any
              time.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newslatter;
