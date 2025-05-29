import { FiPhone, FiMail, FiLinkedin, FiMap, FiWifi, FiUser, FiInstagram, FiDownload } from "react-icons/fi"; // Impor semua ikon yang dibutuhkan

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
      return <FiDownload />; // Menambahkan ikon download
    default:
      return null;
  }
};

export default handleIcon; // Pastikan untuk mengeksport fungsi handleIcon
