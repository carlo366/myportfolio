import React from 'react';

const BiodataCard = ({ label, value, icons, link }) => {
    return (
        <div className="flex items-center bg-gray-900 p-4 rounded-lg shadow-md">
            {icons && <div className="text-2xl mr-4 text-gray-300">{icons}</div>} {/* Menampilkan ikon hanya jika tersedia */}
            <div className="flex flex-col">
                <span className="text-lg font-semibold text-gray-300">{label}</span>
                {link ? (
                    <a href={link} className="text-gray-400 hover:text-yellow-400 transition">
                        {value}
                    </a>
                ) : (
                    <span className="text-gray-400">{value}</span>
                )}
            </div>
        </div>
    );
}

export default BiodataCard;
