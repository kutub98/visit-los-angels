/* eslint-disable react/prop-types */

const FindPlaceCard = ({ img, title, button1, button2 }) => {
  return (
    <div className={`col-span-12 h-[500px] relative cursor-pointer spnaBox`}>
      <div className="  relative imgBox eventImg">
        <img src={img} alt="Feature" className="h-full w-full object-cover" />
      </div>

      {/* text box */}
      <div className="absolute inset-0 CustomBg"></div>

      <div className="absolute bottom-10 left-0 w-full p-4 text-left">
        <div className="flex">
          <button className="bg-black tracking-widest text-white px-8 py-2 uppercase text-lg text-justify hover:underline">
            {button1}
          </button>
          <button className="text-white px-4 py-1 uppercase tracking-widest hover:underline">
            {button2}
          </button>
        </div>

        <h1 className="text-4xl font-bold mt-3 text-white hover:underline ">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default FindPlaceCard;
