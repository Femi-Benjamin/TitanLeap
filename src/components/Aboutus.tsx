import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import group from "../assets/group.png";

const Aboutus = () => {
  return (
    <div>
      <div className="text-center text-balance p-20 leading-normal">
        <h1 className="font-bold text-7xl pb-10">
          About <span className="font-title text-primary">Us</span>
        </h1>
      </div>

      <div className="flex justify-around items-center flex-wrap">
        <div className="text-center leading-normal max-w-xl">
          <h1 className="font-Roboto text-5xl text-primary font-bold mb-6">
            Discover Titan Leap
          </h1>
          <p className="font-Inter text-lg leading-normal font-normal mx-auto mb-6 text-center max-w-lg">
            At Titan Leap, we elevate brands to new heights through cutting-edge
            digital marketing strategies and innovative solutions. Our team of
            passionate experts is dedicated to crafting impactful brand
            experiences that resonate with audiences and drive results. From
            online brand management to SEO and content creation, we are
            committed to helping our clients achieve their business goals and
            stand out in a competitive market. Join us on a journey of
            creativity, excellence, and success.
          </p>
          <div className="flex gap-8 items-center justify-center">
            <button className="bg-primary p-3 px-7 rounded-xl text-white font-Inter font-medium">
              Contact Us
            </button>
            {/* LEARN MORE ACTION */}
            <div className="flex items-center cursor-pointer">
              <p className="mr-1 relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-primary before:transition-all hover:before:h-1 before:content-['']">
                Learn More
              </p>
              {/* <p className="mr-1 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary after:w-0 hover:after:w-full after:transition-width after:duration-300">
                Learn More
              </p> */}
              <ArrowLongRightIcon className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>

        <div>
          <img src={group} alt="" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
