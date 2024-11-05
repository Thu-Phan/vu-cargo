import React from 'react';
import vnFlag from "./assets/contact/vn.png";
import deFlag from "./assets/contact/de.png";
import zaloIcon from "./assets/contact/Icon_of_Zalo.svg.png";
import facebookIcon from "./assets/contact/facebook_icon.png";

interface ContactButtonProps {
  imgSrc: string;
  text: string;
  color: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ imgSrc, text, color }) => {
  return (
    <button 
      className={`w-12 h-12 rounded-lg ${color} p-2 hover:opacity-90 transition-opacity relative group`}
    >
      <img 
        src={imgSrc} 
        alt={text}
        className="w-full h-full object-contain"
      />
      <span className="opacity-0 group-hover:opacity-100 absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-800 text-white text-sm px-2 py-1 rounded transition-opacity z-50">
        {text}
      </span>
    </button>
  );
};

const ContactSidebar = () => {
  return (
    <aside className="hidden md:block fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col items-center p-3 space-y-4 bg-gray-100 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-90">
        <ContactButton
          imgSrc={vnFlag}
          text="Gọi ngay"
          color="bg-blue-600"
        />
        <ContactButton
          imgSrc={deFlag}
          text="Gọi ngay"
          color="bg-blue-600"
        />
        <ContactButton
          imgSrc={zaloIcon}
          text="Zalo"
          color="bg-green-500"
        />
        <ContactButton
          imgSrc={facebookIcon}
          text="Facebook"
          color="bg-blue-800"
        />
      </div>
    </aside>
  );
};

export default ContactSidebar;
