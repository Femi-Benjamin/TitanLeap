import Insert1 from "../MiniComponents/Insert1";
import Insert2 from "../MiniComponents/Insert2";
import ContactForm from "../MiniComponents/ContactForm";
import CardMany from "../MiniComponents/CardMany";
import Footer from '../MiniComponents/Footer';

const Results = () => {
  return (
    <div>
      <div className="text-center text-balance p-20 leading-normal">
        <h1 className="font-bold text-7xl pb-10">
          How <span className="font-title text-primary">Titan leap</span> helps
          you get the best results
        </h1>
      </div>
      {/* IMPORTS */}
      <Insert1 />
      <Insert2 />
      <div className="flex mb-36">
        <ContactForm />
        <CardMany />
      </div>
      <Footer/>
    </div>
  );
};

export default Results;
