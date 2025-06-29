const TermsCheckbox = ({ agreeToTerms, setAgreeToTerms, error }) => (
  <div className="flex items-start">
    <input
      type="checkbox"
      checked={agreeToTerms}
      onChange={(e) => setAgreeToTerms(e.target.checked)}
      className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 mt-1"
    />
    <div className="ml-2">
      <label className="text-sm text-gray-700">
        I agree with{" "}
        <button className="text-orange-600 hover:text-orange-700 underline">
          Terms of Use
        </button>{" "}
        and{" "}
        <button className="text-orange-600 hover:text-orange-700 underline">
          Privacy Policy
        </button>
      </label>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  </div>
);
export default TermsCheckbox;
