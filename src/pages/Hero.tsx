import Navbar from "../layouts/Navbar";
import brandvideo from "../assets/branding video.mp4";

const Hero = () => {
  return (
    <div className="">
      <div className="relative h-screen">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={brandvideo}
          autoPlay
          loop
          muted
        />

        {/* Overlay to ensure content visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-5"></div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <div className="text-balance text-[#131426] text-center leading-normal p-4 sm:p-6 md:p-8 lg:p-11">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-4 sm:pb-6 md:pb-9 fonttitle">
              We are Titan Leap : A Growth Focused
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
              Digital Marketing Agency
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
