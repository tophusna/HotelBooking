import Present from "../../components/containers/Present";
import MultiSearch from "../../components/containers/Search";
import Newhotels from "../../components/containers/NewHotels";
import Getaways from "../../components/containers/Getaways";
import BestHotels from "../../components/containers/BestHotels";
import ForthComing from "../../components/containers/ForthComing";
import Working from "../../components/containers/Working";
import LatestNews from "../../components/containers/LatestNews";
import Present1 from "../../components/containers/Present1";
import GeneralNews from "../../components/containers/GeneralNews";
import Exclusive from "../../components/containers/Exclusive";
import Newsletter from "../../components/containers/Newsletter";

const HomePage = () => {
  return (
    <div className="flex flex-col">
        <Present />
        <MultiSearch />
        <Newhotels />
        <Getaways />
        <Working />
        <BestHotels />
        <ForthComing />
        <LatestNews />
        <Present1 />
        <GeneralNews />
        <Exclusive />
        <Newsletter />
    </div>
  );
};

export default HomePage;
