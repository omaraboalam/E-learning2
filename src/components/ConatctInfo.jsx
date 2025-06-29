const ContactInfo = ({ icon, text }) => {
  return (
    <div className="flex border rounded-lg p-7 flex-col items-center text-center">
      {icon}
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );
};

export default ContactInfo;
