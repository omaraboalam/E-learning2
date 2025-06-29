import SecHeader from "./SecHeader";
import achievements from "../constants/achievements";
import AboutCard from "./AboutCard";
const AchievementsSec = () => {
  return (
    <section className="flex flex-col gap-20">
      <SecHeader
        title="Achievements"
        description={
          "Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements"
        }
      />
      <div className="grid grid-cols-2 gap-8">
        {achievements.map((achievement) => (
          <AboutCard
            Icon={achievement.icon}
            title={achievement.title}
            description={achievement.description}
          />
        ))}
      </div>
    </section>
  );
};

export default AchievementsSec;
