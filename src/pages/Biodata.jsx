import React from "react";
import BiodataCard from "../components/BiodataCard";
import Header from "../components/Header";
import { FiUser, FiPhone, FiMail, FiLinkedin, FiMap, FiWifi, FiInstagram } from "react-icons/fi";
import dataBio from "../constant/dataBio";
import ModalMenu from "../components/ModalMenu";
import carloImage from '../assets/carlo.jpg';

const handleIcon = (name) => {
    switch (name) {
        case "phone":
            return <FiPhone />;
        case "email":
            return <FiMail />;
        case "linkedin":
            return <FiLinkedin />;
        case "map":
            return <FiMap />;
        case "web":
            return <FiWifi />;
        case "avatar":
            return <FiUser />;
        case "instagram":
            return <FiInstagram />;
        default:
            return null;
    }
};

export default function Biodata() {
    return (
        <div className="w-screen flex flex-col justify-center items-center p-8 bg-gradient-to-br from-indigo-900 w-screen p-[30px] bg-gray-800  text-white overflow-hidden">
            {/* Header Section */}
            <Header title={'Biodata'} />

            {/* Profile Image Section */}
            <div className="flex flex-col items-center mt-16 mb-12">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 overflow-hidden rounded-full shadow-lg hover:scale-105 transition-all duration-300">
                    <img src={carloImage} alt="Carlo Sembiring" className="w-full h-full object-cover rounded-full border-4 border-teal-500" />
                </div>
                <h2 className="text-3xl font-semibold mt-6 text-teal-200">Carlo Sembiring</h2>
            </div>

            {/* Biodata Cards Section */}
            <div className="flex flex-col gap-6 w-full max-w-screen-lg mt-10">
                {dataBio.map((item) => (
                    <BiodataCard
                        label={item.label}
                        value={item.value}
                        icons={handleIcon(item.icons)}
                        link={item.link}
                        key={item.id}
                    />
                ))}
            </div>

            <ModalMenu />
        </div>
    );
}
