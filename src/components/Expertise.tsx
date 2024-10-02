import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import contentcreation from "../assets/contentcreation.png";
import onlinebrand from "../assets/onlinebrand.png";
import productdesign from "../assets/productdesign.png";
import searchengine from "../assets/searchengine.png";

export default function Expertise() {
  const expertiseItems = [
    {
      image: onlinebrand,
      alt: "Online Brand",
      text: "Online Brand Management",
      tags: [
        "Brand Strategy Development",
        "Social Media Management",
        "Brand Identity Design",
        "Reputation Management",
      ],
    },
    {
      image: productdesign,
      alt: "Product Design",
      text: "Product Design(Branding)",
      tags: [
        "Logo Design",
        "Packaging Design",
        "Brand Guidelines",
        "Visual Identity Systems",
      ],
    },
    {
      image: searchengine,
      alt: "Search Engine Optimization",
      text: "Search Engine Optimization",
      tags: [
        "Technical SEO",
        "Local SEO",
        "SEO Audits",
        "On-page SEO",
        "Off-page SEO",
      ],
    },
    {
      image: contentcreation,
      alt: "Content Creation",
      text: "Content Creation",
      tags: ["Flyers", "Promotional Videos", "Write-ups", "Animations"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl pb-6">
          Our <span className="text-primary font-title">Expertise</span>
        </h1>
        <p className="font-normal text-lg md:text-xl lg:text-2xl">
          Delivering Innovative Digital Marketing Solutions to Elevate Your
          Brand
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-6">
        {expertiseItems.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-3xl"
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <Link to="/services">
              <div className="absolute inset-0 hover:bg-black hover:bg-opacity-30 flex flex-col justify-between md:p-6 md:px-5 px-3 text-white">
                <div className="flex justify-between itemsstart items-center">
                  <h2 className="md:font-medium font-normal md:text-2xl text-lg">
                    {item.text}
                  </h2>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex flex-wrap gap-2 mt4">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="border xl:px-3 md:px-2 md:py-1 md:p-0 p-1 rounded-full xl:text-lg md:text-sm text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
