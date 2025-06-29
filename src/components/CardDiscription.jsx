const CardDescription = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-2xl font-semibold text-gray10">{title}</h3>
      <p className=" text-lg text-gray30">{description}</p>
    </div>
  );
};

export default CardDescription;
