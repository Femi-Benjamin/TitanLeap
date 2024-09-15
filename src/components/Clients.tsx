"use client";
import { useState } from "react";
import CardReview from "../MiniComponents/CardReview";
import Button from "../CustomButton/Button";

const Clients = () => {
  const [showAllCards, setShowAllCards] = useState(false);
  const [buttonText, setButtonText] = useState("Check full case");

  // Number of cards
  const cardCount = 2;

  const toggleCards = () => {
    setShowAllCards(!showAllCards);
    setButtonText(showAllCards ? "Check full case" : "Close full case");
  };

  return (
    <div>
      <div className="text-center text-balance p-20 leading-normal">
        <h1 className="font-bold text-7xl pb-10">
          What our <span className="font-title text-primary">Clients</span> say
        </h1>
      </div>
      <div className="bg-gradient-to-t from-[#F3F5F6] to-gray-100 h-auto py-10">
        <div className="flex flex-wrap justify-center gap-0">
          {[...Array(cardCount)].map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                showAllCards
                  ? "opacity-100 max-h-[1000px]"
                  : "opacity-0 max-h-0 overflow-hidden"
              } ${index === 0 ? "opacity-100 max-h-[1000px]" : ""}`}
            >
              <CardReview />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Button
          className="bg-[#411697] text-lg text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-[#5a1fd1]"
          onClick={toggleCards}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Clients;

// import { useState } from "react";
// import CardReview from "../layouts/CardReview";
// import Button from "../layouts/Button";

// const Clients = () => {
//   // State to track if the full case (all cards) is visible
//   const [isFullCaseVisible, setIsFullCaseVisible] = useState(false);

//   // Handler to toggle visibility
//   const toggleFullCase = () => {
//     setIsFullCaseVisible(!isFullCaseVisible);
//   };

//   return (
//     <div>
//       <div className="text-center text-balance p-20 leading-normal">
//         <h1 className="font-bold text-7xl pb-10">
//           What our <span className="font-title text-primary">Clients</span> say
//         </h1>
//       </div>

//       {/* Card section */}
//       <div className="bg-gradient-to-t from-[#F3F5F6] to-gray-100 h-auto py-10">
//         <div className="flex justify-center">
//           <div>
//             {/* Conditionally render all cards based on the state */}
//             {isFullCaseVisible ? (
//               <>
//                 {/* Render multiple CardReview components (up to 100) */}
//                 {[...Array(2)].map((_, index) => (
//                   <CardReview key={index} />
//                 ))}
//               </>
//             ) : (
//               <CardReview /> // Display only one card when not expanded
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Button to toggle the full case */}
//       <div className="flex justify-center">
//         <Button
//           className="bg-[#411697] text-lg text-white"
//           onClick={toggleFullCase}
//         >
//           {isFullCaseVisible ? "Close full case" : "Check full case"}
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Clients;
