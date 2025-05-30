import React from 'react';

const BiodataCard = ({ label, value, icons, link }) => {
    return (
        <div className="flex items-center bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:bg-teal-600">
            {icons && <div className="text-3xl mr-4 text-teal-400">{icons}</div>} {/* Menampilkan ikon hanya jika tersedia */}
            <div className="flex flex-col text-left">
                <span className="text-lg font-semibold text-white">{label}</span>
                {link ? (
                    // Jika link adalah link CV, tambahkan atribut download
                    label === "CV" ? (
                        <a
                            href={link}
                            className="text-gray-300 hover:text-teal-200 transition duration-300"
                            target="_blank" // Membuka link di tab baru
                            rel="noopener noreferrer"
                            download="CV_Carlo_Sembiring.pdf" // Menambahkan download untuk CV
                        >
                            {value}
                        </a>
                    ) : (
                        <a
                            href={link}
                            className="text-gray-300 hover:text-teal-200 transition duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {value}
                        </a>
                    )
                ) : (
                    <span className="text-gray-400">{value}</span>
                )}
            </div>
        </div>
    );
}

export default BiodataCard;
