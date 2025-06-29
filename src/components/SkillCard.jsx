import CardDescription from "./CardDiscription";

const SkillCard = ({ id, title, description }) => {
  return (
    <div className="flex flex-col gap-12 bg-white p-8 rounded-lg shadow">
      <span className="text-7xl font-semibold text-right">{id}</span>
      <CardDescription title={title} description={description} />
    </div>
  );
};

export default SkillCard;
