import React from "react";
import Header from "../components/Header";
import ModalMenu from "../components/ModalMenu";
import SkillCard from "../components/SkillCard";
import dataSkill from "../constant/dataSkill";

export default function Skill() {
    return (
        <div className="w-screen min-h-screen flex flex-col p-[30px] text-white bg-gray-800 overflow-hidden">
            <Header title={"Projek"} />
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-12 mx-auto max-w-screen-lg">
                {dataSkill.map((item) => (
                    <SkillCard
                        title={item.title}
                        content={item.content}
                        image={item.image}
                        link={item.link}
                        key={item.id}
                    />
                ))}
            </div>
            <ModalMenu />
        </div>
    );
}
