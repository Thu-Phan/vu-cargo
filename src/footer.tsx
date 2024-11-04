import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const footerSections = [
  {
    title: "Giới Thiệu Công Ty",
    items: [
      { title: "Về chúng tôi", href: "#" },
      { title: "Điều khoản gửi hàng", href: "#" },
    ],
  },
  {
    title: "Chính sách pháp lý",
    items: [
      { title: "Điều khoản dịch vụ", href: "#" },
      { title: "Chính sách khiếu nại", href: "#" },
      { title: "Chính sách bảo mật", href: "#" },
      { title: "Chính sách thanh toán", href: "#" },
    ],
  },
  {
    title: "Hỗ trợ khách hàng",
    items: [
      { title: "Bảo Hiểm Hàng Hoá", href: "#" },
      { title: "Tra cước phí vận chuyển", href: "#" },
      { title: "Tra cứu nhanh đơn hàng", href: "#" },
      { title: "Hướng dẫn đóng gói", href: "#" },
    ],
  },
];

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <footer className="bg-yellow-400 text-black py-8 px-4 md:px-0">
      <div className="container mx-auto">
        {/* Desktop Footer */}
        <div className="hidden md:flex justify-between">
          <div className="w-1/4">
            {/* <h2 className="text-2xl font-bold mb-4">Vu Cargo</h2> */}
            <p className="mb-2">
              <strong>Địa chỉ:</strong> <br></br>
              Đức: Max-Planck-Straße 16, 63303 Dreieich, Germany<br></br>
              Việt Nam: Kho Gia Lâm - Hà Nội
            </p>

              
            <p className="mb-2"></p>
            <p className="mb-2">
              <strong>Tel:</strong> (+49) 176.5585.9000
            </p>
            <p className="mb-2">(+84) 0707.600.300</p>
            <p className="mb-2">(+33) 075156.8295</p>
            <p>
              <strong>Email:</strong> hallo@vucargo.com
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title} className="w-1/4">
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item.title} className="mb-2">
                    <a href={item.href} className="hover:underline">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Footer */}
        <div className="md:hidden">
          <h2 className="text-2xl font-bold mb-4">Vu Cargo</h2>
          <p className="mb-2">
            <strong>Địa chỉ:</strong>
          </p>
          <p className="mb-2">
            Đức: Max-Planck-Straße 16, 63303 Dreieich, Germany
          </p>
          <p className="mb-2">Việt Nam: Kho Gia Lâm - Hà Nội</p>
          <p className="mb-2">
            <strong>Tel:</strong> (+49) 176.5585.9000
          </p>
          <p className="mb-2">(+84) 0707.600.300</p>
          <p className="mb-2">(+33) 075156.8295</p>
          <p className="mb-4">
            <strong>Email:</strong> hallo@vucargo.com
          </p>

          {footerSections.map((section) => (
            <div key={section.title} className="mb-4">
              <button
                className="flex justify-between items-center w-full py-2 px-4 bg-yellow-500 rounded"
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
      </div>
    </footer>
  );
};

export default Footer;
