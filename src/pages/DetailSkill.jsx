import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ModalMenu from "../components/ModalMenu";
import dataDetailSkill from "../constant/dataDetailSkill";

export default function DetailSkill() {
  const { item } = useParams();

  // Handle case when item is not found in dataDetailSkill
  const skillDetail = dataDetailSkill[item];

  if (!skillDetail) {
    return (
      <div className="w-screen min-h-screen flex flex-col p-6 bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden max-w-4xl mx-auto">
        <Header title="Skill Not Found" />
        <p className="mt-12 text-center text-gray-300 text-lg">
          The skill you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen flex flex-col p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black overflow-hidden max-w-8xl mx-auto">
      <Header title={item} />

      <div className="mt-8 flex flex-col gap-16">
        {/* Banner Section: Image and Description */}
        <div className="flex flex-col md:flex-row md:gap-12 gap-10 items-center">
          <img
            src={skillDetail.bannerImage}
            alt={item}
            className="w-full md:w-2/5 h-80 object-cover rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          />

          <div className="text-white flex-1">
            <p className="text-lg leading-relaxed text-justify">{skillDetail.description}</p>
            <div className="mt-6">
              <a
                href={skillDetail.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project Details Section */}
        <div className="flex flex-col gap-14 mt-14">
          {skillDetail.data.map((v) => (
            <div
              key={v.id}
              className="flex flex-col md:flex-row gap-10 items-center bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:bg-gray-700"
            >
              <div className="relative w-full md:w-56 h-64 overflow-hidden rounded-lg">
                <img
                  src={v.image}
                  alt={v.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="text-white text-lg flex-1 text-justify">
                <h3 className="font-semibold text-xl mb-3">{v.title}</h3>
                <p className="text-sm md:text-base">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ModalMenu />
    </div>
  );
}
