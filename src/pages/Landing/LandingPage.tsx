import React from "react";
import LandingLayout from "../../layout/LandingLayout";
import { FiLogIn } from "react-icons/fi";

const LandingPage: React.FC = () => {
  return (
    <LandingLayout>
      {/* Main content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white text-6xl font-extrabold tracking-wide drop-shadow-lg">
          Universal Stationery Suppliers
        </h1>
        <p className="text-gray-300 text-xl mt-3 font-medium">
          Your one-stop wholesale destination
        </p>
        <button className="mt-6 px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300">
          Shop Now
        </button>
      </div>

      {/* Bottom-right login button */}
      <div className="absolute bottom-5 right-5 text-white text-right">
        <button className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 shadow-lg">
          <FiLogIn size={24} />
        </button>
        <p className="text-sm mt-2 text-gray-400">Powered By: Bivek Joshi</p>
      </div>
    </LandingLayout>
  );
};

export default LandingPage;
