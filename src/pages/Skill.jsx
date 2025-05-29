import React from "react";
import Header from "../components/Header";
import ModalMenu from "../components/ModalMenu";
import SkillCard from "../components/SkillCard";
import dataSkill from "../constant/dataSkill";

export default function Skill() {
    return (
        <div className="w-screen min-h-screen flex flex-col p-8 text-white bg-gradient-to-br from-indigo-900 via-teal-700 to-blue-800 overflow-hidden">
            <Header title={"Projek"} />
            <div className="mt-12 mx-auto max-w-screen-xl">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-10">
                    Explore My Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {dataSkill.map((item) => (
                        <SkillCard
                            title={item.title}
                            content={item.content}
                            image={item.image}
                            link={item.link}
                            multiLink={item.multiLink}
                            key={item.id}
                        />
                    ))}
                </div>
            </div>
            <ModalMenu />
        </div>
    );
}
