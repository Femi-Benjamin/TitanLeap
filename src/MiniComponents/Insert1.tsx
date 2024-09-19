import msg from "../assets/msg.png";
import ichelp from "../assets/ichelp.png";
import ictick from "../assets/ictick.png";

export default function Insert1() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0 font-Inter mb-12 md:mb-36 px-4 md:px-0">
      <div className="bg-primary px-6 md:px-10 py-8 md:py-16 rounded-3xl text-white  xl:h-[312px]">
        <img
          src={msg}
          alt="Message icon"
          className="w-12 h-12 md:w-auto md:h-auto"
        />
        <h1 className="text-xl md:text-2xl font-bold pt-3 pb-3">
          Clear <br /> Communication
        </h1>
        <p className="text-sm md:text-base leading-tight md:leading-normal">
          We build relationships based on integrity and trust, deliver on our
          promises, and always maintain clear communication.
        </p>
      </div>

      <div className="bg-white px-6 md:px-10 py-8 md:py-16 rounded-3xl xl:h-[330px]">
        <img
          src={ichelp}
          alt="Help icon"
          className="w-12 h-12 md:w-auto md:h-auto"
        />
        <h1 className="text-xl md:text-2xl font-bold pt-3 pb-3">
          Customer-Centric <br /> Approach
        </h1>
        <p className="text-sm md:text-base leading-tight md:leading-normal">
          We build relationships based on integrity and trust, deliver on our
          promises, and always maintain clear communication.
        </p>
      </div>

      <div className="bg-black px-6 md:px-10 py-8 md:py-16 text-white rounded-3xl xl:h-[340px]">
        <img
          src={ictick}
          alt="Tick icon"
          className="w-12 h-12 md:w-auto md:h-auto"
        />
        <h1 className="text-xl md:text-2xl font-bold pt-3 pb-3">
          Innovation <br /> and Excellence
        </h1>
        <p className="text-sm md:text-base leading-tight md:leading-normal">
          We build relationships based on integrity and trust, deliver on our
          promises, and always maintain clear communication.
        </p>
      </div>
    </div>
  );
}

// import msg from "../assets/msg.png";
// import ichelp from "../assets/ichelp.png";
// import ictick from "../assets/ictick.png";

// const Insert1 = () => {
//   return (
//     <div className="flex font-Inter mb-36">

//       <div className="bg-primary px-10 py-16 rounded-3xl text-white h-[312px]">
//         <img src={msg} alt="" />
//         <h1 className="text-2xl font-bold pt-3 pb-3">
//           Clear <br /> Communication
//         </h1>
//         <p className="text-base leading-24px ">
//           We build relationships based on integrity and trust, deliver on our
//           promises, and always maintain clear communication.
//         </p>
//       </div>

//       <div className="bg-white px-10 py-16  rounded-3xl h-[330px]">
//         <img src={ichelp} alt="" />
//         <h1 className="text-2xl font-bold pt-3 pb-3">Customer-Centric <br /> Approach</h1>
//         <p className='text-base leading-24px'>
//           We build relationships based on integrity and trust, deliver on our
//           promises, and always maintain clear communication.
//         </p>
//       </div>

//       <div className="bg-black px-10 py-16  text-white rounded-3xl h-[340px]">
//         <img src={ictick} alt="" />
//         <h1 className="text-2xl font-bold pt-3 pb-3">Innovation <br /> and Excellence</h1>
//         <p className="text-base leading-24px ">
//           We build relationships based on integrity and trust, deliver on our
//           promises, and always maintain clear communication.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Insert1;
