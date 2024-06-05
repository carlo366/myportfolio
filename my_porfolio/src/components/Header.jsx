import React from "react"

export default function Header({title}){


    return (
        <div className="w-full px-[30px] flex items-center bg-slate-900 h-[50px] mb-5 fixed top-0 left-0 z-[100]">
            <h1 className="text-[30px] font-bold text-white-800 capitalize">
                {title}
            </h1>
        </div>
    )
}