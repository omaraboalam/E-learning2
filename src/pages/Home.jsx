import FaqSec from "../components/FaqSec";
import HeroSec from "../components/HeroSec";
import SkillsSec from "../components/SkillsSec";
import TrendyTechnologySec from "../components/TrendyTechnologySec";

const Home = () => {
  return (
    <div className="flex flex-col gap-36">
      <HeroSec />
      <TrendyTechnologySec />
      <SkillsSec />
      <FaqSec />
    </div>
  );
};

export default Home;
