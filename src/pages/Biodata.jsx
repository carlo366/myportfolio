import React, { useEffect } from "react";
import BiodataCard from "../components/BiodataCard";
import Header from "../components/Header";
import dataBio from "../constant/dataBio"; // Data biodata
import handleIcon from "../utils/handleIcon"; // Fungsi untuk menangani ikon dinamis
import ModalMenu from "../components/ModalMenu";
import carloImage from '../assets/carlo.jpg'; // Gambar profil

export default function Biodata() {
  useEffect(() => {
    // Membuka link CV secara otomatis ketika komponen dimuat
    const cvLink = "https://drive.google.com/file/d/16_Vetpo_xfnnWx6LDdgXowVgiX8DbQ-E/view?usp=sharing";
    window.open(cvLink, "_blank"); // Membuka link di tab baru
  }, []); // Hanya dijalankan sekali ketika komponen pertama kali dimuat

  return (
    <div className="w-screen flex flex-col justify-center items-center p-8 bg-gradient-to-br from-indigo-900 w-screen p-[30px] bg-gray-800 text-white overflow-hidden">
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
            icons={handleIcon(item.icons)} // Menggunakan handleIcon untuk mendapatkan ikon
            link={item.link}
            key={item.id}
          />
        ))}
      </div>

      <ModalMenu />
    </div>
  );
}
