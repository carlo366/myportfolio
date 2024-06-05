import React, { useState } from "react"
import { FiMenu } from "react-icons/fi"
import {Link} from "react-router-dom"

export default function ModalMenu(){

    const [show, setShow] = useState(false)

    const handleShowModal = ()=>{
        setShow(!show)
    }
 
    return (
        <>
            {show && (
                <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-800 fixed top-0 left-0 z-[200]">
                    
                    <Link to={'/biodata'} className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        Biodata
                    </Link>

                    <Link to={'/projek'} className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        Projek
                    </Link>
                    <Link to={'/skill'} className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        Skill
                    </Link>
                    <a href={'https://wa.me/+6282283314904'} target="_blank" className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        Contact
                    </a>

                    <a href={'https://www.linkedin.com/in/carlo-sembiring-75000827a/'} target="_blank" className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        linkedin
                    </a>

                    <a href={'https://github.com/carlo366'} target="_blank" className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        github
                    </a>



                </div>
            )}
        
            <button className="w-[100px] h-[40px] bg-slate-400 text-gray-800 rounded-full fixed -right-4 flex justify-center items-center z-[250]" onClick={handleShowModal}>
                <FiMenu />
            </button>
        </>
    )
}