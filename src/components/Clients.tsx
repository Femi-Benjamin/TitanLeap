import CardReview from "../layouts/CardReview";


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
          <div className="">
            <CardReview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
