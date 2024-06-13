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
    <div className=" p-4 relative">
      <div className=" relative">
        <img src={img} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center p-4  bg-opacity-50">
          <div className="text-center md:w-[70%] mx-auto">
            <h2 className="text-pink-400 text-xl md:text-2xl lg:text-4xl font-semibold">
              If most American cities are about the consumption of culture, Los Angeles and New York are about the production of culture – not only national culture but global culture.
            </h2>
            <p className="font-medium mt-3 text-white">
              - BARBARA KRUGER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quata;
