const SecHeader = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-5xl font-semibold text-gray-15">{title}</h2>
      <p className="text-lg text-gray35">{description}</p>
    </div>
  );
};

export default SecHeader;
