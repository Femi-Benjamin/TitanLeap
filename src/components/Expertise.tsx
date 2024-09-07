import contentcreation from "../assets/contentcreation.png";
import onlinebrand from "../assets/onlinebrand.png";
import productdesign from "../assets/productdesign.png";
import searchengine from "../assets/searchengine.png";

const Expertise = () => {
  return (
    <div>
      <div className="text-center textbalance p-12 leading-normal">
        <h1 className="font-bold text-7xl pb-10">
          Our <span className="font-title text-primary">Expertise</span>
        </h1>
        <p className="font-normal text-2xl">
          Delivering Innovative Digital Marketing Solutions to Elevate Your
          Brand
        </p>
      </div>

      {/*///////////////////////////////////////////////
        //////////////////////////////////////////////*/}

      <div className="flex justify-center">
        <div className="space-y-8">
          {/* First Image with Hover Text */}
          <div className="relative">
            <img src={onlinebrand} alt="Online Brand" className="mb-4" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl ">
              <span className="text-white text-xl">Online Brand Building</span>
            </div>
          </div>

          {/* Second Image with Hover Text */}
          <div className="relative">
            <img src={productdesign} alt="Product Design" className="mb-4" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl ">
              <span className="text-white text-xl">Product Design</span>
            </div>
          </div>
        </div>

        {/*///////////////////////////////////////////////
        ////////////////////////////////////////////// */}

        <div className="space-y-8 ml-8">
          {/* Third Image with Hover Text */}
          <div className="relative">
            <img
              src={searchengine}
              alt="Search Engine Optimization"
              className="mb-4"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl ">
              <span className="text-white text-xl">
                Search Engine Optimization
              </span>
            </div>
          </div>

          {/* Fourth Image with Hover Text */}
          <div className="relative">
            <img
              src={contentcreation}
              alt="Content Creation"
              className="mb-4"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl ">
              <span className="text-white text-xl">Content Creation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
