import React from "react";

export default function KemampuanCard({ title, image, content }) {
    return (
        <div className="bg-inherit flex flex-col gap-2 w-full p-[20px] rounded-lg shadow-lg">
            <h1 className="text-[16px] font-bold capitalize"> {title} </h1>
            <img src={image} alt={title} className="w-full h-[300px] object-cover rounded-lg" />
            <p className="font-light"> {content} </p>
        </div>
    );
}
