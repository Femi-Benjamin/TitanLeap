"use client";
import { useState } from "react";
import CardReview from "../MiniComponents/CardReview";
import Button from "../CustomButton/Button";

const Clients = () => {
  const [showAllCards, setShowAllCards] = useState(false);
  const [buttonText, setButtonText] = useState("Read More");

  // Number of cards
  const cardCount = 2;

  const toggleCards = () => {
    setShowAllCards(!showAllCards);
    setButtonText(showAllCards ? "Read More" : "Read Less");
  };

  return (
    <div id="clients">
      <div className="text-center text-balance p-10 md:p-20 leading-normal">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl">
          What our <span className="font-title text-primary">Clients</span> say
        </h1>
      </div>
      <div className="bg-gradient-to-t from-[#F3F5F6] to-gray-100 h-auto md:py-10">
        <div className="flex flex-wrap justify-center gap-0">
          {[...Array(cardCount)].map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-500  ${
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
      <div className="flex justify-center my-8">
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
