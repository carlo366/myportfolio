import React from "react";
import BiodataCard from "../components/BiodataCard";
import Header from "../components/Header";
import { FiUser, FiPhone, FiMail, FiLinkedin, FiMap, FiWifi,FiInstagram } from "react-icons/fi";
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
            return null; // Mengembalikan null jika tidak ada ikon yang sesuai
    }
};

export default function Biodata() {
    return (
        <div className="w-screen min-h-screen flex flex-col items-center p-8 bg-gray-800 text-gray-400 overflow-hidden">
            <Header title={'Biodata'} />
            <div className="flex flex-col items-center mt-8">
                <div className="relative w-48 h-48 md:w-60 md:h-60 lg:w-80 lg:h-80">
                    <img src={carloImage} alt="Carlo Sembiring" className="rounded-full w-full h-full object-cover" />
                    <div className="w-full h-full border-zinc-50 border-8 border-double border-slate-900 rounded-full absolute top-0 left-0"></div>
                </div>
            </div>
            <div className="flex flex-col gap-8 w-full max-w-screen-sm mt-10">
                {dataBio.map((item) => (
                    <BiodataCard
                        label={item.label}
                        value={item.value}
                        icons={handleIcon(item.icons)} // Tidak perlu menggunakan '&&' karena 'handleIcon' akan mengembalikan null jika tidak ada ikon yang sesuai
                        link={item.link}
                        key={item.id}
                    />
                ))}
            </div>
            <ModalMenu />
        </div>
    );
}
