// handleIcon.jsx
import React from "react";
import { FiPhone, FiMail, FiLinkedin, FiMap, FiWifi, FiUser, FiInstagram, FiDownload } from "react-icons/fi";

// Fungsi untuk mengembalikan ikon berdasarkan nama string
const handleIcon = (name) => {
    switch (name) {
        case "phone":
            return <FiPhone />;
        case "email":
            return <FiMail />;
        case "linkedin":
            return <FiLinkedin />;
        case "map":
            return <FiMap />;
        case "web":
            return <FiWifi />;
        case "avatar":
            return <FiUser />;
        case "instagram":
            return <FiInstagram />;
        case "download":
            return <FiDownload />;
        default:
            return null;
    }
};

export default handleIcon;  // Pastikan untuk mengekspor fungsi ini dengan benar
