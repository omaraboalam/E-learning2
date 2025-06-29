const SecondaryButton = ({ children }) => {
  return (
    <button className="bg-white97 text-gray15 py-4 rounded-lg border-white95 hover:bg-gray-300">
      {children}
    </button>
  );
};

export default SecondaryButton;
