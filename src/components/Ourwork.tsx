// Define the types for a single work item
export interface WorkItem {
  video: string;
  image: string;
}

// Define the props that Ourwork will receive
export interface OurworkProps {
  works: WorkItem[]; // works should be an array of WorkItem objects
}

const Ourwork = ({ works }: OurworkProps) => {
  return (
    <div>
      <div className="text-center text-balance p-20 leading-normal">
        <h1 className="font-bold text-7xl pb-10">
          Our <span className="font-title text-primary">Work</span>
        </h1>
      </div>

      {/* Render the work items */}
      <div className="space-y-10">
        {works.map((work, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center"
          >
            {/* Video */}
            <video
              className="w-full h-full object-cover rounded-3xl"
              src={work.video}
              autoPlay
              loop
              muted
            />

            {/* Logo at top-left */}
            <div className="absolute top-0 left-0 p-4">
              <img className="w-40" src={work.image} alt="Logo" />
            </div>

            {/* Text at bottom-right */}
            <div className="absolute bottom-0 right-0 p-10 text-white text-left max-w-lg font-Inter text-lg leading-7">
              <div className="flex gap-6 pb-4">
                <p className="border p-2 px-10 rounded-3xl">Motion</p>
                <p className="border p-2 px-6 rounded-3xl">Fintech</p>
                <p className="border p-2 px-6 rounded-3xl">UI/UX</p>
              </div>
              <h1 className="text4xl fontbold mb-4">
                Future Pay is an innovative platform designed to simplify the
                conversion of cryptocurrencies into fiat currencies. As the
                world of digital finance continues to evolve, Future Pay aims to
                provide a seamless, secure, and user-friendly solution for
                individuals and businesses looking to bridge the gap between
                digital assets and traditional money.
              </h1>
              <button className="bg-white text-black rounded-2xl p-3 font-medium hover:font-bold px-10">
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
