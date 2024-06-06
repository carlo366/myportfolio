import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ModalMenu from "../components/ModalMenu";
import SkillCard from "../components/SkillCard";
import dataDetailSkill from "../constant/dataDetailSkill";

export default function DetailSkill() {
  const { item } = useParams();

  // Handle case when item is not found in dataDetailSkill
  const skillDetail = dataDetailSkill[item];

  if (!skillDetail) {
    return (
      <div className="w-screen min-h-screen flex flex-col p-6 bg-gray-900 overflow-hidden max-w-4xl mx-auto">
        <Header title="Skill Not Found" />
        <p className="mt-12 text-center text-gray-400 text-lg">
          The skill you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen flex flex-col p-6 bg-gray-800 overflow-hidden max-w-8xl mx-auto">
      <Header title={item} />

      <div className="mt-8 flex flex-col gap-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <img
            src={skillDetail.bannerImage}
            alt={item}
            className="w-full md:w-2/5 h-96 object-cover rounded-lg shadow-lg"
          />

          <div className="text-white flex-1">
            <p className="text-lg leading-relaxed text-justify">
              {skillDetail.description}
            </p>
            <div className="mt-4">
              <a href={skillDetail.url} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-6">
          {skillDetail.data.map((v) => (
            <div key={v.id} className="flex flex-row gap-6 items-start bg-gray-800 p-6 rounded-lg shadow-md">
              <img
                src={v.image}
                alt={v.title}
                className="w-46 h-56 object-cover rounded-lg"
              />
              <div className="text-white text-lg flex-1 text-justify">
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p>{v.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ModalMenu />
    </div>
  );
}
