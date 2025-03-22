import React, { useState } from "react";
import LandingLayout from "../../layout/LandingLayout";
import { FiLogIn, FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router";
// import { Dialog } from "@headlessui/react";

const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <LandingLayout>
            {/* Centered Main Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-white text-6xl font-extrabold tracking-wide drop-shadow-lg">
                    Universal Stationery Suppliers
                </h1>
                <p className="text-gray-300 text-xl mt-3 font-medium">
                    Your one-stop wholesale destination
                </p>
                <p className="text-gray-300 text-xl mt-3 font-medium">
                    The Only Place Where Buying in Bulk Feels Like a Steal!
                </p>
                <p className="text-gray-300 text-xl mt-3 font-medium">
                    Balambu || Kathmandu
                </p>
                <button className="mt-6 px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300">
                    Scale with Us!
                </button>
            </div>

            {/* Right Top Menu - Hidden in Mobile */}
            <div className="hidden lg:flex absolute top-5 right-5 text-white text-right space-x-4">
                <p className="cursor-pointer px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 shadow-lg text-sm">
                    About Us
                </p>
                <p className="cursor-pointer px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 shadow-lg text-sm">
                    Products
                </p>
                <p className="cursor-pointer px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 shadow-lg text-sm">
                    Partners
                </p>
                <p className="cursor-pointer px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 shadow-lg text-sm">
                    Testimonials
                </p>
            </div>

            {/* Mobile View - Burger Menu */}
            <div className="lg:hidden absolute top-5 right-5 text-white">
                <button
                    className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 shadow-lg"
                    onClick={() => setIsOpen(true)}
                >
                    <FiMenu size={24} />
                </button>
            </div>

            {/* Mobile Drawer/Menu Dialog */}
            {/* <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black bg-opacity-50" />
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-xl w-64">
                        <button className="absolute top-3 right-3 text-white" onClick={() => setIsOpen(false)}>
                            ✖
                        </button>
                        <p className="cursor-pointer py-2 border-b border-gray-700">About Us</p>
                        <p className="cursor-pointer py-2 border-b border-gray-700">Products</p>
                        <p className="cursor-pointer py-2 border-b border-gray-700">Partners</p>
                        <p className="cursor-pointer py-2">Testimonials</p>
                    </div>
                </div>
            </Dialog> */}

            {/* Bottom Right - Login & Powered By */}
            <div className="absolute bottom-5 right-5 text-white text-right">
                <button className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 shadow-lg" onClick={() => navigate("/login")}>
                    <FiLogIn size={24} />
                </button>
                <p className="text-sm mt-2 text-gray-400">Powered By: Bivek Joshi</p>
            </div>
        </LandingLayout>
    );
};

export default LandingPage;
