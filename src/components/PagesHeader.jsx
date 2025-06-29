const PagesHeader = ({ title, description }) => {
  return (
    <div className="grid grid-cols-2 gap-10">
      <h2 className="text-4xl font-semibold text-gray-15">{title}</h2>
      <p className="text-lg text-gray35">{description}</p>
    </div>
  );
};

export default PagesHeader;
