import React from "react";
import { FiArrowLeft } from "react-icons/fi"; // Import the back arrow icon
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

export default function Header({ title }) {
    const navigate = useNavigate(); // Initialize navigate function

    const handleBackClick = () => {
        navigate("/"); // Navigate back to the home route
    };

    return (
        <div className="w-full flex items-center justify-between px-6 py-4 bg-slate-900 fixed top-0 left-0 z-[100] shadow-md">
            {/* Back button */}
            <button 
                onClick={handleBackClick} 
                className="text-white text-3xl hover:text-teal-400 transition duration-300"
            >
                <FiArrowLeft />
            </button>

            {/* Title */}
            <h1 className="text-3xl font-bold text-white capitalize text-center flex-1">
                {title}
            </h1>
        </div>
    );
}
