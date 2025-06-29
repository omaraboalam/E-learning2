import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import MainButton from "./components/mainButton";

export default function ErrorPage() {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className="min-h-screen rounded-lg bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col items-center sm:flex-row gap-3 justify-center">
          <Link to="/">
            <MainButton>
              <Home className="w-4 h-4" />
              Go Home
            </MainButton>
          </Link>

          <button
            onClick={handleGoBack}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
