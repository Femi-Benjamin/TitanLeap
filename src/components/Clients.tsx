import ReviewCard from "../components/ReviewCard";

const Clients = () => {
  return (
    <div>
      <div className="text-center text-balance p-20 leading-normal">
        <h1 className="font-bold text-7xl pb-10">
          What our <span className="font-title text-primary">Clients</span> say
        </h1>
      </div>
      <div className="bg-gradient-to-t from-[#F3F5F6] to-gray-100 h-auto py-10">
        <div className="flex justify-center">

        <div className="grid grid-cols-3 justify-center gap-10">
          <ReviewCard
            imageUrl="https://via.placeholder.com/150"
            name="Loren Doherty"
            username="tease"
            reviewText="There’s no other program that walks you through exactly what you need to know to start an online store fast.There’s no other program that walks you through exactly what you need to know to start an online store fastThere’s no other program that walks you through exactly what you need to know to start an online store fast  "
            date="22.03.2021"
          />
          <ReviewCard
            imageUrl="https://via.placeholder.com/150"
            name="Loren Doherty"
            username="tease"
            reviewText="There’s no other program that walks you through exactly what you need to know to start an online store fast."
            date="22.03.2021"
          />
          <ReviewCard
            imageUrl="https://via.placeholder.com/150"
            name="Loren Doherty"
            username="tease"
            reviewText="There’s no other program that walks you through exactly what you need to know to start an online store fast."
            date="22.03.2021"
          />
          <ReviewCard
            imageUrl="https://via.placeholder.com/150"
            name="Loren Doherty"
            username="tease"
            reviewText="There’s no other program that walks you through exactly what you need to know to start an online store fast."
            date="22.03.2021"
          />
          <ReviewCard
            imageUrl="https://via.placeholder.com/150"
            name="John Doe"
            username="john_doe"
            reviewText="This program helped me scale my business to 7 figures in under a year!"
            date="15.07.2022"
          />
          <ReviewCard
            imageUrl="https://via.placeholder.com/150"
            name="John Doe"
            username="john_doe"
            reviewText="This program helped me scale my business to 7 figures in under a year!"
            date="15.07.2022"
          />
          <ReviewCard
            imageUrl="https://via.placeholder.com/150"
            name="John Doe"
            username="john_doe"
            reviewText="This program helped me scale my business to 7 figures in under a year!"
            date="15.07.2022"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
