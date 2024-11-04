import React, { useState } from "react";
import { Phone, Mail, MapPin, ChevronDown} from "lucide-react";

interface FooterSectionProps {
  title: string;
  links: string[];
  section: 'company' | 'legal' | 'support';
}

interface ExpandedSections {
  company: boolean;
  legal: boolean;
  support: boolean;
}

const ModernFooter = () => {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    company: false,
    legal: false,
    support: false
  });

  const toggleSection = (section: 'company' | 'legal' | 'support') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const ContactCard = () => (
    <div className="bg-yellow-400 rounded-lg shadow-md p-6 mb-6 transform transition-all duration-300 hover:scale-105">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Vu Cargo</h3>
      <div className="space-y-4">
        <div className="flex items-center hover:text-red-600 transition-colors duration-200 cursor-pointer">
          <MapPin className="text-red-600 h-10 w-10 mr-3 mt-1" />
          <span className="text-gray-600">
            <strong>Đức:</strong> Max-Planck-Straße 16, 63303 Dreieich, Germany<br />
            <strong>Việt Nam:</strong> Kho Gia Lâm - Hà Nội
          </span>
        </div>
        <div className="flex items-center hover:text-red-600 transition-colors duration-200 cursor-pointer">
          <Phone className="text-red-600 h-5 w-5 mr-3" />
          <div className="text-gray-600">
            <div>(+49) 176.5585.9000</div>
            <div>(+84) 0707.600.300</div>
            <div>(+33) 075156.8295</div>
          </div>
        </div>
        <div className="flex items-center hover:text-red-600 transition-colors duration-200 cursor-pointer">
          <Mail className="text-red-600 h-5 w-5 mr-3" />
          <span className="text-gray-600">hallo@vucargo.com</span>
        </div>
      </div>
      
    </div>
  );

  const FooterSection: React.FC<FooterSectionProps> = ({ title, links, section }) => (
    <div className="mb-6 transform transition-all duration-300 hover:scale-105">
      <button
        onClick={() => toggleSection(section)}
        className="w-full flex justify-between items-center mb-4 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md p-2 bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200"
        aria-expanded={expandedSections[section]}
        aria-controls={`${section}-links`}
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <ChevronDown
          className={`transform transition-transform duration-300 ${expandedSections[section] ? "rotate-180" : ""} h-5 w-5`}
        />
      </button>
      <div
        id={`${section}-links`}
        className={`transition-all duration-300 overflow-hidden ${expandedSections[section] ? "max-h-48" : "max-h-0 md:max-h-48"}`}
      >
        <ul className="space-y-2">
          {links.map((link: string, index: number) => (
            <li key={index}>
              <a
                href="#"
                className="text-gray-600 hover:text-red-600 transition-colors duration-200 block p-2 rounded-md hover:bg-yellow-300"
                aria-label={link}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const footerData = {
    company: ["Về chúng tôi", "Điều khoản gửi hàng"],
    legal: ["Điều khoản dịch vụ", "Chính sách khiếu nại", "Chính sách bảo mật", "Chính sách thanh toán"],
    support: ["Bảo Hiểm Hàng Hoá", "Tra cước phí vận chuyển", "Tra cứu nhanh đơn hàng", "Hướng dẫn đóng gói"]
  };

  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <ContactCard />
          </div>
          
          <div className="col-span-1">
            <FooterSection
              title="Giới Thiệu Công Ty"
              links={footerData.company}
              section="company"
            />
          </div>
          
          <div className="col-span-1">
            <FooterSection
              title="Chính sách pháp lý"
              links={footerData.legal}
              section="legal"
            />
          </div>
          
          <div className="col-span-1">
            <FooterSection
              title="Hỗ trợ khách hàng"
              links={footerData.support}
              section="support"
            />
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default ModernFooter;
