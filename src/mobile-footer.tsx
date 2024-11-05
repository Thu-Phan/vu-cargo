import React from 'react';
import vnFlag from "./assets/contact/vn.png";
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
      <span className="opacity-0 group-hover:opacity-100 absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-sm px-2 py-1 rounded transition-opacity">
        {text}
      </span>
    </button>
  );
};

const MobileFooter = () => {
  return (
    <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 z-50 shadow-lg">
      <div className="flex justify-around max-w-screen-xl mx-auto px-4">
        <ContactButton
          imgSrc={vnFlag}
          text="Gọi ngay"
          color="bg-blue-600"
        />
        <ContactButton
          imgSrc={vnFlag}
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
    </footer>
  );
};

export default MobileFooter;
