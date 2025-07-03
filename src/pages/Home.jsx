import React from "react";
import { FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";
import carloImage from '../assets/carlo.jpg';
import '../components/home.css';

export default function Home() {
    return (
        <div className="h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-br from-indigo-900 w-screen p-[30px] bg-gray-800 text-white overflow-hidden">
            <div className="w-full max-w-4xl flex flex-col items-center text-center p-8 space-y-8 bg-opacity-80 bg-gray-900 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-500">
                
                {/* Profile Image with Animation */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-teal-400 overflow-hidden animate__animated animate__fadeIn animate__delay-1s">
                    <img src={carloImage} alt="Carlo Sembiring" className="w-full h-full object-cover rounded-full" />
                </div>

                {/* Name and Description with Animation */}
                <div className="text-white px-6 space-y-4 animate__animated animate__fadeIn animate__delay-2s">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
                        Welcome to My Space
                    </h1>
                    <h2 className="text-3xl sm:text-4xl font-semibold text-teal-500 typing-effect">
                        I am Carlo Sembiring
                    </h2>
                    <p className="text-lg sm:text-xl font-light mb-6 text-gray-400">
                        A passionate Web Developer with a love for creating clean, user-friendly, and innovative applications.
                    </p>

                    {/* Action Button */}
                    <div className="flex justify-center w-full mt-8">
                        <Link 
                            to="/biodata"
                            className="w-20 h-20 sm:w-24 sm:h-24 bg-teal-500 rounded-full flex justify-center items-center shadow-2xl transform hover:scale-125 transition-all duration-300 hover:bg-teal-400">
                            <FiPlay className="text-3xl text-white" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
