/* eslint-disable react/prop-types */

const EventFeturs = ({ img, title, type, date, time }) => {
  return (
    <div className={`col-span-12 h-[500px] relative cursor-pointer spnaBox`}>
      <div className="  relative imgBox eventImg">
        <img src={img} alt="Feature" className="h-full w-full object-cover" />
      </div>

      {/* text box */}
      <div className="absolute inset-0 CustomBg"></div>

      <div className="absolute bottom-10 left-0 w-full p-4 text-left">
        <h1 className=" text-sm text-white font-bold mt-4 hover:underline">
          {type}
        </h1>
        <h1 className="text-4xl font-bold mt-3 text-white hover:underline ">
          {title}
        </h1>
        <div className="flex text-xl mt-3 font-semibold text-white ">
          <h1>{date}</h1>
          <h1 className="ml-4">{time}</h1>
        </div>
      </div>
    </div>
  );
};

export default EventFeturs;
