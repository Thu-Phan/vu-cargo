import React from "react";
import helpIcon from "./assets/help.png";
import financialIcon from "./assets/financial-report.png";
import profitIcon from "./assets/profit.png";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 mb-4 p-2 bg-white rounded-lg shadow-lg">
        <img src={icon} alt={title} className="mb-4 w-12 h-12" />
      </div>
      <h3 className="text-red-500 font-medium mb-2">{title}</h3>
      <p className="text-gray-600 text-sm hidden md:block">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: helpIcon,
      title: "Uy Tín",
      description:
        "Với 8 năm kinh nghiệm trong lĩnh vực xuất nhập khẩu cùng với sự tin tưởng của hơn 10.000 khách hàng, Vu Cargo tự tin mang dịch vụ của mình ra khắp nhiều nước.",
    },
    {
      icon: financialIcon,
      title: "An Toàn",
      description:
        "Mọi đơn hàng đều được Vu Cargo đóng pallet cẩn thận. Khách hàng có thể gửi mọi loại hàng từ giá trị cao, hàng dễ vỡ cho đến hàng nhạy cảm cần đảm bảo chắc chắn.",
    },
    {
      icon: profitIcon,
      title: "Tiết Kiệm",
      description:
        "Với hình thức vận chuyển trọn gói, Vu Cargo luôn dành ưu đãi cho những khách hàng lớn để giúp tiết kiệm một khoản đáng kể cước phí vận chuyển",
    },
  ];

  return (
<section className="px-4 py-12 w-full">
      <h2 className="text-2xl font-bold mb-6 text-red-600">
        VÌ SAO NÊN CHỌN VU CARGO?
      </h2>
      <p className="mb-8 text-gray-600">
        VU Cargo mang đến dịch vụ vận chuyển nhanh chóng và an toàn, với giá cả
        cạnh tranh cho cả đường bay và đường biển. Chúng tôi hỗ trợ mua hộ hàng
        từ các nền tảng thương mại điện tử lớn, giúp bạn dễ dàng sở hữu sản phẩm
        yêu thích.
      </p>
      <div className="grid grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
