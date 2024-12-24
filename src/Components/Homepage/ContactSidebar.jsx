import React, { useState } from "react";
import { FaWhatsapp, FaRegEnvelope } from "react-icons/fa";

const ContactSidebar = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const icons = [
    { id: "whatsapp", text: "+917039920000", icon: <FaWhatsapp />, bgColor: "bg-gradient-to-r from-blue-500 to-blue-900" },
    { id: "email", text: "consumercare@bajajelectricals.com", icon: <FaRegEnvelope />, bgColor: "bg-gradient-to-r from-[#03D764] to-[#008D48]" },
  ];

  return (
    <div
      className="fixed top-1/2 left-0 transform -translate-y-1/2 space-y-2"
      style={{ zIndex: 100 }}
    >
      {icons.map(({ id, text, icon, bgColor }) => (
        <div
          key={id}
          className={`relative ${bgColor} text-white flex items-center rounded-r-full transition-all duration-300 cursor-pointer overflow-hidden`}
          onMouseEnter={() => setHoveredIcon(id)}
          onMouseLeave={() => setHoveredIcon(null)}
          style={{
            width: hoveredIcon === id ? (id === "whatsapp" ? "200px" : "270px") : "50px",
            height: "40px",
          }}
        >
          {/* Text on the left side */}
          <span
            className={`absolute left-2 text-[12px] whitespace-nowrap transition-opacity duration-300 ${
              hoveredIcon === id ? "opacity-100" : "opacity-0"
            }`}
          >
            <a
              href={id === "whatsapp" ? `https://wa.me/${text.replace("+", "")}` : `mailto:${text}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              {text}
            </a>
          </span>

          {/* Icon on the right side */}
          <div
            className="absolute right-3 rounded-full text-2xl"
            style={{
              transition: "transform 0.3s ease",
              transform: hoveredIcon === id ? "translateX(-10px)" : "translateX(0)",
            }}
          >
            {icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactSidebar;
