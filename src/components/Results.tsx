import Insert1 from "../MiniComponents/Insert1";
import Insert2 from "../MiniComponents/Insert2";
import ContactForm from "../MiniComponents/ContactForm";
import CardMany from "../MiniComponents/CardMany";
import Footer from "../MiniComponents/Footer";

const Results = () => {
  return (
    <div>
      <div className="text-center text-balance p-6 md:p-20 leading-normal">
        <h1 className="font-bold textxl text-4xl md:text-7xl pb5 md:pb-10 md:py-0 py-10">
          How <span className="font-title text-primary">Titan leap</span> helps
          you get the best results
        </h1>
      </div>
      {/* IMPORTS */}
      <Insert1 />
      <Insert2 />
      <div className="flex flex-col md:flex-row mb-12 md:mb-36 gap-8">
        <ContactForm />
        <CardMany />
      </div>
      <Footer />
    </div>
  );
};

export default Results;
