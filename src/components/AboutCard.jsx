import CardDescription from "./CardDiscription";

const AboutCard = ({ Icon, title, description }) => {
  return (
    <div className="flex flex-col items-start gap-7 bg-white rounded-xl p-12">
      <span className="p-4 bg-orange95 border border-[#FFEACC]  rounded-lg">
        <Icon className="text-[#FF9500]  w-8 h-8 " />
      </span>

      <CardDescription title={title} description={description} />
    </div>
  );
};

export default AboutCard;
