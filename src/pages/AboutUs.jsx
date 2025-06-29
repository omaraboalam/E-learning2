import AchievementsSec from "../components/AchievementsSec";
import OurGoalsSec from "../components/OurGoalsSec";
import PagesHeader from "../components/PagesHeader";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-32">
      <PagesHeader
        title="About E-Learning"
        description="Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape."
      />

      <AchievementsSec />
      <OurGoalsSec />
    </div>
  );
};

export default AboutUs;
