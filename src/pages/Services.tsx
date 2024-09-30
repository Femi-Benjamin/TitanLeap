import ServiceNavbar from "@/MiniComponents/ServiceNavbar";
import TeamWorking from "../assets/TeamWorking.png";


const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans items-center">
      <ServiceNavbar />
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-8">
          <span className="text-black">Our </span>
          <span className="text-primary font-title">Services</span>
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 mb-12 leading-relaxed">
          Our services combine technical expertise, creative excellence, and
          strategic vision. We equip your business with a website and digital
          identity that is both highly functional and visually captivating,
          telling your brand's story in a compelling way.
        </p>
        <div className="flex justify-center items-center pb-20">
          <button className="bg-primary text-white rounded-2xl px-10 py-3 text-lg font-semibold">
            Reach out
          </button>
          <div className="bg-yellow w-12 h-12 rounded-xl flex items-center justify-center ml4 py-6 cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white transform rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
        <div>
          <img src={TeamWorking} alt="" />
          <div className="">

          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
