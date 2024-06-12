/* eslint-disable react/prop-types */

const Featurss = ({ img, button1, button2, title, author, spanClass }) => {
  return (
    <div className={`col-span-12 ${spanClass} relative cursor-pointer spnaBox`}>
      <div className="w-full h-[450px] relative imgBox">
        <img src={img} alt="Feature" />
      </div>

      {/* text box */}
      <div className="absolute inset-0 CustomBg"></div>
      <div className="absolute bottom-10 left-0 w-full p-4 text-left">
        <div className="flex">
          <button className="bg-black tracking-widest text-white px-8 py-1 text-sm text-justify hover:underline">
            {button1}
          </button>
          <button className="text-white px-4 py-1 tracking-widest hover:underline">
            {button2}
          </button>
        </div>
        <h1 className="text-3xl text-white font-bold mt-4 hover:underline">
          {title}
        </h1>
        <h1 className="text-lg mt-3">
          by
          <span className="text-lg text-white hover:underline ml-2">
            {author}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Featurss;
