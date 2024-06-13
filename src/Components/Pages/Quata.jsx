// import img from "../../assets/image/dave.webp";

// const Quata = () => {
//   return (
//     <div className=" border p-4">
//       <div className="border">
//         <img src={img} alt="" className="border w-full h-3/4" />
//       </div>
//       <div className="border relative bottom-64 md:bottom-[400px]  md:w-[70%] mx-auto ">

//         <h2 className="flex justify-center items-center text-pink-400 text-xl md:text-2xl lg:text-4xl font-semibold text-center">If most American cities are about the consumption of culture, Los Angeles and New York are about the production of culture – not only national culture but global culture.</h2>
//         <p className="font-medium mt-3">- BARBARA KRUGER</p>
//       </div>
//     </div>
//   );
// };

// export default Quata;
import img from "../../assets/image/dave.webp";

const Quata = () => {
  return (
    <div className=" p-4 mt-5 mb-5 relative">
      <div className=" relative">
        <img src={img} alt="" className="w-full h-full object-cover" />

        <div className="absolute inset-0 flex items-center justify-center p-4  bg-opacity-50">
          <div className="text-center md:w-[70%] mx-auto">

            <h2 className=" text-xl md:text-2xl lg:text-4xl font-semibold bg-gradient-to-r from-pink-300 to-blue-500 bg-clip-text text-transparent space-x-3.5 ">
              <span className="text-7xl text-left">“</span>
              If most American cities are about the consumption of culture, Los
              Angeles and New York are about the production of culture – not
              only national culture but global culture.
            </h2>
            <p className="font-medium mt-3">- BARBARA KRUGER</p>
            <span className="text-7xl text-right">“</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quata;
