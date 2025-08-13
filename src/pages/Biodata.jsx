import React from "react";
import BiodataCard from "../components/BiodataCard";
import Header from "../components/Header";
import dataBio from "../constant/dataBio";
import handleIcon from "../utils/handleIcon";
import ModalMenu from "../components/ModalMenu";
import carloImage from '../assets/carlo.jpg';

export default function Biodata() {
  return (
    <div className="w-screen flex flex-col justify-center items-center p-8 bg-gradient-to-br from-indigo-900 bg-gray-800 text-white overflow-hidden">
      
      {/* Header Section */}
      <Header title={'Biodata'} />

      {/* Profile Image Section */}
      <div className="flex flex-col items-center mt-16 mb-12">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 overflow-hidden rounded-full shadow-lg hover:scale-105 transition-all duration-300">
          <img src={carloImage} alt="Carlo Sembiring" className="w-full h-full object-cover rounded-full border-4 border-teal-500" />
        </div>
        <h2 className="text-3xl font-semibold mt-6 text-teal-200">Carlo Sembiring</h2>

        {/* CV Button */}
        <a
          href="https://drive.google.com/file/d/1p0PpVY27TrB0wcJunuA31mfuU-ar3UL1/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-teal-500 hover:bg-teal-400 text-white font-semibold py-2 px-6 rounded transition duration-300"
        >
          Lihat CV
        </a>
      </div>

      {/* Biodata Cards */}
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
