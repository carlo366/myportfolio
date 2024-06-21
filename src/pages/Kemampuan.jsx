import React from "react";
import Header from "../components/Header";
import ModalMenu from "../components/ModalMenu";
import dataKemampuan from "/src/constant/dataKemampuan"; // Import dataKemampuan dari file yang benar

const MAX_SKILLS = 17;  // Batasi jumlah skill yang ditampilkan

export default function Kemampuan() {
    return (
        <div className="w-screen min-h-screen flex flex-col text-white p-[30px] bg-gray-800 overflow-hidden">
            <Header title={"Skill"} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-5 mt-12 mx-auto max-w-screen-lg">
                {dataKemampuan.slice(0, MAX_SKILLS).map((item) => (
                    <div key={item.id} className="bg-inherit flex flex-col items-center text-center p-[10px] rounded-lg shadow-lg">
                        <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
                        <h1 className="text-[16px] font-bold capitalize mt-2"> {item.title} </h1>
                        <p className="font-light"> {item.content} </p>
                    </div>
                ))}
            </div>
            <ModalMenu />
        </div>
    );
}
