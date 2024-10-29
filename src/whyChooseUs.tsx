import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 mb-4 p-2 bg-white rounded-lg shadow-lg">
      <img src={icon} alt={title} className="mb-4 w-12 h-12" />

        {/* {icon} */}
      </div>
      <h3 className="text-red-500 font-medium mb-2">{title}</h3>
      <p className="text-gray-600 text-sm hidden md:block">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 5h-2V3c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-5-2v2H9V3h5zM5 19V7h14v12H5z" fill="url(#gradient1)" />
          <circle cx="15" cy="13" r="2" fill="url(#gradient1)" />
          <defs>
            <linearGradient id="gradient1" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF5722" />
              <stop offset="1" stopColor="#FFA000" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Uy Tín",
      description: "Với 8 năm kinh nghiệm trong lĩnh vực xuất nhập khẩu cùng với sự tin tưởng của hơn 10.000 khách hàng, Vu Cargo tự tin mang dịch vụ của mình ra khắp nhiều nước."
    },
    
    {
      icon: "src\\assets\\shipping.png",
      // icon: (
      //   <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      //     <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" fill="url(#gradient2)" />
      //     <path d="M12 17h2v-2h-2v2zm0-4h2V7h-2v6z" fill="url(#gradient2)" />
      //     <defs>
      //       <linearGradient id="gradient2" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
      //         <stop stopColor="#FF5722" />
      //         <stop offset="1" stopColor="#FFA000" />
      //       </linearGradient>
      //     </defs>
      //   </svg>
      // ),
      title: "An Toàn",
      description: "Mọi đơn hàng đều được Vu Cargo đóng pallet cẩn thận. Khách hàng có thể gửi mọi loại hàng từ giá trị cao, hàng dễ vỡ cho đến hàng nhạy cảm cần đảm bảo chắc chắn."
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14z" fill="url(#gradient3)" />
          <path d="M9 17l3-3 3 3m-6-4l3-3 3 3" fill="url(#gradient3)" />
          <defs>
            <linearGradient id="gradient3" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF5722" />
              <stop offset="1" stopColor="#FFA000" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Tiết Kiệm",
      description: "Với hình thức vận chuyển trọn gói, Vu Cargo luôn dành ưu đãi cho những khách hàng lớn để giúp tiết kiệm một khoản đáng kể cước phí vận chuyển"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">VÌ SAO NÊN CHỌN VU CARGO?</h2>
      <p className="mb-8 text-gray-600">
        VU Cargo mang đến dịch vụ vận chuyển nhanh chóng và an toàn, với giá cả cạnh tranh cho cả đường
        bay và đường biển. Chúng tôi hỗ trợ mua hộ hàng từ các nền tảng thương mại điện tử lớn, giúp bạn dễ
        dàng sở hữu sản phẩm yêu thích.
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