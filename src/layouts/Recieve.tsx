import Aboutus from "../components/Aboutus";
import Expertise from "../components/Expertise";
import Ourwork from "../components/Ourwork";
import Hero from "../pages/Hero";
import Clients from "../components/Clients";

// videos and images
import future_pay from "../assets/future_pay.mp4";
import AroundUi from "../assets/AroundUI.mp4";
import futurepay_2 from "../assets/futurepay_2.mp4";
import playerhealth from "../assets/playerhealth.png";

const Home = () => {
  const workItems = [
    { video: future_pay, image: playerhealth },
    { video: AroundUi, image: playerhealth },
    { video: futurepay_2, image: playerhealth },
  ];

  return (
    <div className="bg-gray-100 pb-10 h-auto">
      <Hero />
      <div className="px-40">
        <Expertise />
        <Aboutus />
        <Ourwork works={workItems} /> {/* Pass the array of work items */}
        <Clients />
      </div>
    </div>
  );
};

export default Home;
