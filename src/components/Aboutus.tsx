import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import group from "../assets/group.png";
import { Link } from "react-router-dom";

export default function Aboutus() {
  return (
    <div id="about">
      <div className="container mx-auto px-4">
        <div className="text-center p-6 sm:p-10 md:p-20 leading-normal">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl pb-6 sm:pb-10">
            About <span className="font-title text-primary">Us</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-16">
          <div className="text-center leading-normal max-w-xl">
            <h1 className="font-Roboto text-3xl sm:text-4xl md:text-5xl text-primary font-bold mb-4 sm:mb-6">
              Discover Titan Leap
            </h1>
            <p className="font-Inter text-base sm:text-lg leading-normal font-normal mx-auto mb-6 text-center max-w-lg">
              At Titan Leap, we elevate brands to new heights through
              cutting-edge digital marketing strategies and innovative
              solutions. Our team of passionate experts is dedicated to crafting
              impactful brand experiences that resonate with audiences and drive
              results. From online brand management to SEO and content creation,
              we are committed to helping our clients achieve their business
              goals and stand out in a competitive market. Join us on a journey
              of creativity, excellence, and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center">
              <button className="bg-primary p-3 px-7 rounded-xl text-white font-Inter font-medium w-full sm:w-auto">
                Contact Us
              </button>
              <Link to="/aboutUs">
                <div className="flex items-center cursor-pointer animate-pulse">
                  <p className="mr-1 relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-primary before:transition-all hover:before:h-1 before:content-[''] text-primary font-bold">
                    Learn More
                  </p>
                  {/* <p className="mr-1 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary after:w-0 hover:after:w-full after:transition-width after:duration-300">
                    Learn More
                  </p> */}
                  <ArrowLongRightIcon className="h-5 w-5 text-primary" />
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            <img
              src={group}
              alt="Titan Leap Team"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
