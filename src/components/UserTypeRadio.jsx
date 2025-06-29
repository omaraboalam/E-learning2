const UserTypeRadio = ({ userType, setUserType }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      I'm a
    </label>
    <div className="flex gap-4">
      <label className="flex items-center">
        <input
          type="radio"
          name="userType"
          value="Student"
          checked={userType === "Student"}
          onChange={(e) => setUserType(e.target.value)}
          className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
        />
        <span className="ml-2 text-sm text-gray-700">Student</span>
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="userType"
          value="Instructor"
          checked={userType === "Instructor"}
          onChange={(e) => setUserType(e.target.value)}
          className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
        />
        <span className="ml-2 text-sm text-gray-700">Instructor</span>
      </label>
    </div>
  </div>
);
export default UserTypeRadio;
