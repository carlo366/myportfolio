import React from "react";
import Header from "../components/Header";
import ModalMenu from "../components/ModalMenu";
import dataKemampuan from "../constant/datakemampuan"; // Import dataKemampuan dari file yang benar

const MAX_SKILLS = 18;  // Batasi jumlah skill yang ditampilkan

export default function Kemampuan() {
    return (
        <div className="w-screen flex flex-col justify-center items-center p-8 bg-gradient-to-br from-indigo-900 w-screen p-[30px] bg-gray-800  text-white overflow-hidden">
            <Header title={"Skill"} />
            <div className="mt-12 mx-auto max-w-screen-xl">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-10">
                    My Skills and Expertise
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {dataKemampuan.slice(0, MAX_SKILLS).map((item) => (
                        <div key={item.id} className="bg-gray-900 p-6 rounded-lg shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                            />
                            <h1 className="text-xl font-semibold text-white text-center capitalize mb-2">
                                {item.title}
                            </h1>
                            <p className="text-gray-300 text-center">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            <ModalMenu />
        </div>
    );
}
