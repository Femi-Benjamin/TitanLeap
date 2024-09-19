export interface WorkItem {
  video: string;
  image: string;
}
export interface OurworkProps {
  works: WorkItem[];
}
const Ourwork = ({ works }: OurworkProps) => {
  return (
    <div>
      <div className="text-center text-balance p-10 sm:p-20 leading-normal">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl pb-6 sm:pb-10">
          Our <span className="font-title text-primary">Work</span>
        </h1>
      </div>
      <div className="md:space-y-10 space-y-7">
        {works.map((work, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center"
          >
            <video
              className="w-full hfull h-auto objectcover rounded-3xl"
              src={work.video}
              autoPlay
              loop
              muted
            />
            {/* Logo top-left */}
            <div className="absolute top-0 left-0 p-2 sm:p-4">
              <img className="w-20 sm:w-40" src={work.image} alt="Logo" />
            </div>
            {/* Text bottom-right */}
            <div className="absolute bottom-0 right-0 p-4 sm:p-10 text-white text-left max-w-lg font-Inter text-xs sm:text-lg leading-5 sm:leading-7">
              <div className="md:block hidden ">
                <div className="flex flex-wrap gap-4 sm:gap-6 pb-2 sm:pb-4">
                  <p className="border p-1 px-4 sm:px-10 rounded-3xl">Motion</p>
                  <p className="border p-1 px-4 sm:px-6 rounded-3xl">Fintech</p>
                  <p className="border p-1 px-4 sm:px-6 rounded-3xl">UI/UX</p>
                </div>
              </div>
              <h1 className="text-sm md:text-xl fontbold md:mb-4 mb-1 md:text-left text-justify">
                Future Pay is an innovative platform designed to simplify the
                conversion of cryptocurrencies into fiat currencies. As the
                world of digital finance continues to evolve, Future Pay aims to
                provide a seamless, secure, and user-friendly solution for
                individuals and businesses looking to bridge the gap between
                digital assets and traditional money.
              </h1>
              <button className="bg-white text-black rounded-2xl md:p-3 p-2 font-medium md:px-4 px-5">
                Check full case
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Ourwork;

// export interface WorkItem {
//   video: string;
//   image: string;
// }

// export interface OurworkProps {
//   works: WorkItem[];
// }

// const Ourwork = ({ works }: OurworkProps) => {
//   return (
//     <div>
//       <div className="text-center text-balance p-20 leading-normal">
//         <h1 className="font-bold text-7xl pb-10">
//           Our <span className="font-title text-primary">Work</span>
//         </h1>
//       </div>

//       <div className="space-y-10">
//         {works.map((work, index) => (
//           <div
//             key={index}
//             className="relative flex justify-center items-center"
//           >
//             <video
//               className="w-full h-full object-cover rounded-3xl"
//               src={work.video}
//               autoPlay
//               loop
//               muted
//             />

//             {/* Logo top-left */}
//             <div className="absolute top-0 left-0 p-4">
//               <img className="w-40" src={work.image} alt="Logo" />
//             </div>

//             {/* Text bottom-right */}
//             <div className="absolute bottom-0 right-0 p-10 text-white text-left max-w-lg font-Inter text-lg leading-7">
//               <div className="flex gap-6 pb-4">
//                 <p className="border p-2 px-10 rounded-3xl">Motion</p>
//                 <p className="border p-2 px-6 rounded-3xl">Fintech</p>
//                 <p className="border p-2 px-6 rounded-3xl">UI/UX</p>
//               </div>
//               <h1 className="text4xl fontbold mb-4">
//                 Future Pay is an innovative platform designed to simplify the
//                 conversion of cryptocurrencies into fiat currencies. As the
//                 world of digital finance continues to evolve, Future Pay aims to
//                 provide a seamless, secure, and user-friendly solution for
//                 individuals and businesses looking to bridge the gap between
//                 digital assets and traditional money.
//               </h1>
//               <button className="bg-white text-black rounded-2xl p-3 font-medium hover:font-bold px-10">
//                 Check full case
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Ourwork;
