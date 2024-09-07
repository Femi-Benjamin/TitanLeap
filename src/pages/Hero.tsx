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
          <div className="text-balance text-[#131426] text-center leading-normal p-11">
            <h1 className="text-5xl font-bold pb-9 fonttitle">
              We are Titan Leap : A Growth Focused
            </h1>
            <h1 className="text-8xl font-bold fonttitle">
              Digital Marketing Agency
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
