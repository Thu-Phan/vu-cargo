import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const footerSections = [
  {
    title: "Bảng Giá",
    items: [
      { title: "Hàng bay airfreight Đức EU → VN", href: "https://docs.google.com/document/d/1ZmScmeuPj_HbsNKLVjxglf9qK3bAJUsL/" },
      { title: "Hàng bay airfreight VN → EU", href: "https://docs.google.com/document/d/1hCK3KMKS2dV0U-_lZgqI3rEv9b20P6VA" },
      { title: "Hàng biển seafreight VN → EU", href: "https://docs.google.com/document/d/1WLao8tdHVJqSDcHBPb4tl9zCeShQ-GgL" },
    ],
  },
];

const BangGia = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <div className="container mx-auto">
      <div className="hidden md:flex">
        {footerSections.map((section) => (
          <div key={section.title} className="mb-4">
            <button
              className="inline-flex items-center gap-2 py-2 px-4 bg-yellow-500 rounded text-red-500"
              onClick={() => toggleSection(section.title)}
            >
              <span className="font-bold">{section.title}</span>
              {expandedSection === section.title ? (
                <ChevronUp />
              ) : (
                <ChevronDown />
              )}
            </button>
            {expandedSection === section.title && (
              <ul className="mt-2 pl-4">
                {section.items.map((item) => (
                  <li key={item.title} className="mb-2">
                    <a href={item.href} className="hover:underline">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Footer */}
      <div className="md:hidden">
        {footerSections.map((section) => (
          <div key={section.title} className="mb-4">
            <button
              className="inline-flex items-center gap-2 py-2 px-4 bg-yellow-300 rounded text-red-500"
              onClick={() => toggleSection(section.title)}
            >
              <span className="font-medium">{section.title}</span>
              {expandedSection === section.title ? (
                <ChevronUp />
              ) : (
                <ChevronDown />
              )}
            </button>
            {expandedSection === section.title && (
              <ul className="mt-2 pl-4">
                {section.items.map((item) => (
                  <li key={item.title} className="mb-2">
                    <a href={item.href} className="hover:underline">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BangGia;
