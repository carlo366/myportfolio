import React from "react";
import { Link } from "react-router-dom";

export default function SkillCard({ title, image, content, link, multiLink }) {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl">
            <h1 className="text-2xl text-white text-center font-semibold capitalize mb-4">{title}</h1>
            
            {/* Responsive Image */}
         <img src={image} alt={title} className="w-full h-auto max-h-72 object-cover rounded-lg mb-4" />


            <p className="text-gray-300 text-center mb-4">{content}</p>

            {/* Portfolio Link Button */}
            {link && (
                <Link
                    to={link}
                    className="w-[200px] h-10 bg-orange-400 text-white rounded-full flex justify-center items-center mx-auto transition-transform transform hover:scale-105"
                >
                    Lihat Portfolio
                </Link>
            )}

            {/* Multiple Links */}
            {multiLink && (
                <div className="mt-4 text-sky-500 flex gap-4 justify-center flex-wrap">
                    {multiLink.map((i) => {
                        return (
                            <a
                                href={i.url}
                                key={i.id}
                                target="_blank"
                                className="italic hover:underline"
                            >
                                {i.name}
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
