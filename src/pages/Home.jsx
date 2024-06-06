import React from "react";
import { FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";
import carloImage from '../assets/carlo.jpg';
import '../components/home.css';

export default function Home() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center p-8 bg-gray-800 text-slate-400">
            <div className="flex flex-col items-center">
                <div className="my-8 relative flex flex-col items-center">
                <div className="w-[505px] h-[503px] rounded-full bg-cover bg-center w-80 h-80 rounded-full border-6 border[-slate]-400 overflow-hidden">
                <img src={carloImage} alt="Carlo Sembiring" className="w-full h-full object-cover" />
                </div>

                <div className="border-slate-400 border-[6px] rounded-full w-[530px] h-[530px] absolute -top-[15px]"></div>
                </div>
                <div className="mt-8 text-center">
                    <h1 className="text-5xl font-semibold mb-2">Hello</h1>
                    <h1 className="text-5xl font-semibold mb-2 p-2 typing">Saya Carlo Sembiring</h1>  
                                      <p className="text-lg font-light mb-4">Seorang Web Developer</p>
                    <div className="flex btnss justify-center">
                        <Link to={'/biodata'} className="w-16 h-16 bg-slate-400 text-gray-800 btns rounded-full flex justify-center items-center">
                            <FiPlay className="text-2xl" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
