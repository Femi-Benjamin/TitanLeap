import ServiceNavbar from "@/MiniComponents/ServiceNavbar";
import BrandSection from "@/MiniComponents/BrandSection";
import TeamWorking from "../assets/TeamWorking.png";
import Seo from "../assets/Seo.png";
import Content from "../assets/Content.png";
import Link from "../assets/Link.png";

const Services = () => {
  const brandInfo = [
    {
      imageSrc: TeamWorking,
      headerText: "Online Brand Management",
      mainText:
        "Our Online Brand Management service is designed to help you build, monitor, and enhance your brand's reputation across all digital platforms. We leverage advanced strategies to ensure your brand stands out, engages effectively with your audience, and fosters lasting relationships. Whether it's social media, review sites, or other online channels, we manage every aspect to keep your brand's image consistent, positive, and impactful.",
      capabilities: [
        "Brand Strategy Development",
        "Social Media Management",
        "Brand Identity Design",
        "Reputation Management",
      ],
    },

    {
      imageSrc: Link,
      headerText: "Product Design(Branding)",
      mainText:
        "Our Product Design and Branding service focuses on creating a cohesive and captivating brand identity for your products. We combine innovative design principles with strategic branding techniques to ensure your product not only looks appealing but also resonates with your target audience. From logo creation to packaging design, we craft every element to reflect your brand’s essence and values, making your product stand out in the market.",
      capabilities: [
        "Logo Design",
        "Packaging Design",
        "Brand Guidelines",
        "Visual Identity Systems",
      ],
    },
    {
      imageSrc: Seo,
      headerText: "Search Engine Optimization",
      mainText:
        "Our Search Engine Optimization (SEO) service is designed to boost your online visibility and drive organic traffic to your website. By employing advanced SEO strategies, we ensure your website ranks higher on search engine results pages, making it easier for potential customers to find you. From keyword research and on-page optimization to link building and content creation, our comprehensive approach helps improve your search rankings and enhances your online presence.",
      capabilities: [
        "Technical SEO",
        "Local SEO",
        "SEO Audits",
        "On-page SEO",
        "Off-page SEO",
      ],
    },
    {
      imageSrc: Content,
      headerText: "Content Creation",
      mainText:
        "Our Content Creation service is all about crafting compelling, high-quality content that resonates with your audience. From engaging blog posts and informative articles to eye-catching videos and captivating social media updates, we produce content that not only attracts attention but also drives engagement and conversions. Our team of skilled writers, designers, and videographers work together to create content that aligns with your brand voice and marketing goals, ensuring your message is delivered effectively across all platforms.",
      capabilities: [
        "Flyers",
        "Promotional Videos",
        "SEO Audits",
        "Write-ups",
        "Animations",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans items-center">
      <ServiceNavbar />
      <main className="container mx-auto px-6 py-16 text-center">
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
          <div className="bg-yellow w-12 h-12 rounded-xl flex items-center justify-center py-6 cursor-pointer ">
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

        {/* Props to the BrandSection component */}
        <div className="flex flex-wrap justify-center gap-10">
          {brandInfo.map((info, index) => (
            <BrandSection
              key={index}
              imageSrc={info.imageSrc}
              headerText={info.headerText}
              mainText={info.mainText}
              capabilities={info.capabilities}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Services;

// import ServiceNavbar from "@/MiniComponents/ServiceNavbar";
// import TeamWorking from "../assets/TeamWorking.png";

// const Services = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen font-sans items-center">
//       <ServiceNavbar />
//       <main className="container mx-auto px-6 py-16 text-center">
//         <h1 className="text-6xl md:text-7xl font-bold mb-8">
//           <span className="text-black">Our </span>
//           <span className="text-primary font-title">Services</span>
//         </h1>
//         <p className="max-w-3xl mx-auto text-gray-600 mb-12 leading-relaxed">
//           Our services combine technical expertise, creative excellence, and
//           strategic vision. We equip your business with a website and digital
//           identity that is both highly functional and visually captivating,
//           telling your brand's story in a compelling way.
//         </p>
//         <div className="flex justify-center items-center pb-20">
//           <button className="bg-primary text-white rounded-2xl px-10 py-3 text-lg font-semibold">
//             Reach out
//           </button>
//           <div className="bg-yellow w-12 h-12 rounded-xl flex items-center justify-center ml4 py-6 cursor-pointer ">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 text-white transform rotate-45"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M14 5l7 7m0 0l-7 7m7-7H3"
//               />
//             </svg>
//           </div>
//         </div>

//         {/* SECTION BRAND */}
//         <div className="flex justify-center items-center">
//           <div className="flex flex-col lg:flex-row justify-center md:gap-10 gap-7">
//             {/* IMAGE */}
//             <img
//               className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px]"
//               src={TeamWorking}
//               alt=""
//             />
//             <div className="bg-primary w-full sm:w-[400px] md:w-[500px] lg:w-[600px] rounded-3xl text-white md:p-10 p-7">
//               {/* HEADER TEXT */}
//               <h1 className="text-lg md:text-4xl leading-[76.5%] font-Inter font-semibold pb-12 xl:mt-10">
//                 Online Brand Management
//               </h1>
//               {/* MAIN TEXT */}
//               <p className="md:text-lg xl:text-xl text-sm text-center textjustify pb-10">
//                 Our Online Brand Management service is designed to help you
//                 build, monitor, and enhance your brand's reputation across all
//                 digital platforms. We leverage advanced strategies to ensure
//                 your brand stands out, engages effectively with your audience,
//                 and fosters lasting relationships. Whether it's social media,
//                 review sites, or other online channels, we manage every aspect
//                 to keep your brand's image consistent, positive, and impactful.
//               </p>
//               <h2 className="font-semibold text-md md:text-lg mt4">
//                 IN-HOUSE CAPABILITIES
//               </h2>
//               {/* Capabilities Buttons */}
//               <div className="flex flex-wrap justify-center gap-4 mt-10">
//                 <span className="px-4 py-2 border rounded-full text-sm">
//                   Brand Strategy Development
//                 </span>
//                 <span className="px-4 py-2 border rounded-full text-sm">
//                   Social Media Management
//                 </span>
//                 <span className="px-4 py-2 border rounded-full text-sm">
//                   Brand Identity Design
//                 </span>
//                 <span className="px-4 py-2 border rounded-full text-sm">
//                   Reputation Management
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Services;
