import contentcreation from "../assets/contentcreation.png";
import onlinebrand from "../assets/onlinebrand.png";
import productdesign from "../assets/productdesign.png";
import searchengine from "../assets/searchengine.png";

export default function Expertise() {
  const expertiseItems = [
    { image: onlinebrand, alt: "Online Brand", text: "Online Brand Building" },
    { image: productdesign, alt: "Product Design", text: "Product Design" },
    {
      image: searchengine,
      alt: "Search Engine Optimization",
      text: "Search Engine Optimization",
    },
    {
      image: contentcreation,
      alt: "Content Creation",
      text: "Content Creation",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl pb-6">
          Our <span className="font-title text-primary">Expertise</span>
        </h1>
        <p className="font-normal text-lg md:text-xl lg:text-2xl">
          Delivering Innovative Digital Marketing Solutions to Elevate Your
          Brand
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {expertiseItems.map((item, index) => (
          <div key={index} className="relative group">
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-auto rounded-3xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
              <span className="text-white text-lg md:text-xl text-center px-4">
                {item.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
