import SkillCard from "./SkillCard";
import skills from "../constants/skills";
import SecHeader from "./SecHeader";

const SkillsSec = () => {
  return (
    <section className="flex flex-col gap-20">
      <SecHeader
        title="Skills"
        description="Skills gained from learning programming include logical thinking, problem-solving, writing code in languages like Python and Java, and understanding algorithms and data structures. It also develops teamwork, use of development tools, and the ability to build real-world applications and software."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
        {skills.map((skill) => (
          <SkillCard
            id={skill.id}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSec;
