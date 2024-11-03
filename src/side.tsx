import React from 'react';

const ContactButton = ({ imgSrc, text, color }) => {
  return (
    <button 
      className={`w-12 h-12 rounded-lg ${color} p-2 hover:opacity-90 transition-opacity relative group`}
    >
      <img 
        src={imgSrc} 
        alt={text}
        className="w-full h-full object-contain"
      />
      <span className="opacity-0 group-hover:opacity-100 absolute left-full ml-2 whitespace-nowrap bg-gray-800 text-white text-sm px-2 py-1 rounded transition-opacity">
        {text}
      </span>
    </button>
  );
};

const ContactSidebar = () => {
  return (
    <aside className="hidden md:block w-16 fixed left-4 top-1/2 -translate-y-1/2 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex flex-col items-center py-4 space-y-4">
        <ContactButton
          imgSrc="src\\assets\\vn-phone.svg"
          text="Gọi ngay"
          color="bg-blue-600"
        />
        <ContactButton
          imgSrc="src\\assets\\vn.svg"
          text="Gọi ngay"
          color="bg-blue-600"
        />
        <ContactButton
          imgSrc="src/assets/Icon_of_Zalo.svg.png"
          text="Zalo"
          color="bg-green-500"
          />
        <ContactButton
          imgSrc="src\\assets\\facebook_icon.png"
          text="Facebook"
          color="bg-blue-800"
        />
      </div>
    </aside>
  );
};

export default ContactSidebar;