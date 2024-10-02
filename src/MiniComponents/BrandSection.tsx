import React from "react";

interface BrandSectionProps {
  imageSrc: string;
  headerText: string;
  mainText: string;
  capabilities: string[];
}

const BrandSection: React.FC<BrandSectionProps> = ({
  imageSrc,
  headerText,
  mainText,
  capabilities,
}) => {
  const isRightAligned =
    headerText === "Product Design(Branding)" ||
    headerText === "Content Creation";

  return (
    <div className="flex justify-center items-center gap-12">
      <div
        className={`flex flex-col lg:flex-row justify-center md:gap-10 gap-7 ${
          isRightAligned ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* IMAGE */}
        <img
          className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px]"
          src={imageSrc}
          alt={headerText}
        />
        <div className="bg-primary w-full sm:w-[400px] md:w-[500px] lg:w-[600px] rounded-3xl text-white md:p-10 p-7">
          {/* HEADER TEXT */}
          <h1 className="text-lg md:text-4xl leading-[76.5%] font-Inter font-semibold pb-12 xl:mt-10">
            {headerText}
          </h1>
          {/* MAIN TEXT */}
          <p className="md:text-lg xl:text-xl text-sm text-center textjustify pb-10">
            {mainText}
          </p>
          <h2 className="font-semibold text-md md:text-lg mt-4">
            IN-HOUSE CAPABILITIES
          </h2>
          {/* Capabilities Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {capabilities.map((capability, index) => (
              <span
                key={index}
                className="px-4 py-2 border rounded-full text-sm"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
