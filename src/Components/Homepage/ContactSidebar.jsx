import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactSidebar = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const icons = [
    { id: "whatsapp", text: "Chat on WhatsApp", icon: <FaWhatsapp />, bgColor: "bg-green-500" },
    { id: "email", text: "Send an Email", icon: <FaEnvelope />, bgColor: "bg-blue-500" },
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
            width: hoveredIcon === id ? "200px" : "50px", // Control the strip width
            height: "40px",
          }}
        >
          {/* Text on the left side */}
          <span
            className={`absolute left-2 text-sm whitespace-nowrap transition-opacity duration-300 ${
              hoveredIcon === id ? "opacity-100" : "opacity-0"
            }`}
          >
            {text}
          </span>

          {/* Icon on the right side */}
          <div
            className="absolute right-3 rounded-full text-2xl"
            style={{
              transition: "transform 0.3s ease",
              transform: hoveredIcon === id ? "translateX(0)" : "translateX(0)",
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
