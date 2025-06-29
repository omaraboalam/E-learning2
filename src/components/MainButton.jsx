const MainButton = ({ children }) => {
  return (
    <button className="flex items-center gap-2 bg-primary text-white py-3 px-5 rounded-lg">
      {children}
    </button>
  );
};

export default MainButton;
