import SecHeader from "./SecHeader";
import AboutCard from "./AboutCard";
import goals from "../constants/goals";
const OurGoalsSec = () => {
  return (
    <section className="flex flex-col gap-20">
      <SecHeader
        title="Our Goals"
        description={
          "At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact. Through our carefully crafted courses, we aim to"
        }
      />
      <div className="grid grid-cols-2 gap-8">
        {goals.map((goal) => (
          <AboutCard
            Icon={goal.icon}
            title={goal.title}
            description={goal.description}
          />
        ))}
      </div>
    </section>
  );
};

export default OurGoalsSec;
