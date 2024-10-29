import { FC } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  iconSrc: string
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, iconSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      <img src={iconSrc} alt={title} className="mb-4 w-12 h-12" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 hidden md:block">{description}</p>
    </div>
  )
}

export default function ServiceGrid() {
  const services = [
    {
      title: "Ước tính lệ phí",
      description: "Nhanh chóng tính toán chi phí vận chuyển dựa trên kích thước và trọng lượng",
      iconSrc: "src\\assets\\profit.png"
    },
    {
      title: "Gửi hàng trực tuyến",
      description: "Tiện lợi tạo đơn và quản lý vận chuyển chỉ với vài thao tác đơn giản",
      iconSrc: "src\\assets\\shipping.png"
    },
    {
      title: "Theo dõi lô hàng",
      description: "Luôn biết vị trí đơn hàng với hệ thống theo dõi chính xác theo thời gian thực",
      iconSrc: "src\\assets\\delivery-service.png"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  )
}