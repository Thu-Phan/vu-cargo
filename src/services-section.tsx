import cargoShipImage from "./assets/aerial-view-cargo-ship-cargo-container-harbor.jpg";
import logisticsImage from "./assets/logistics-transportation-container-cargo-ship-cargo-plane-with-working-crane-bridge-shipyard-sunrise-logistic-import-export-transport-industry-background-ai-generative.jpg";
import containerYardImage from "./assets/industrial-port-container-yard.jpg";

const services = [
  {
    title: "Vận chuyển hàng Đức, EU về Việt Nam",
    description: "Chúng tôi cung cấp dịch vụ vận chuyển hàng từ Đức và các nước EU về Việt Nam qua đường hàng không và đường biển. Với thời gian vận chuyển nhanh chóng chỉ từ 4-6 ngày, hàng hóa được đảm bảo an toàn, đáp ứng mọi nhu cầu của bạn.",
    image: cargoShipImage,
    imageAlt: "Vận chuyển hàng từ Đức, EU về Việt Nam",
  },
  {
    title: "Vận chuyển hàng Việt Nam đi Đức, EU",
    description: "Vận chuyển hàng hóa từ Việt Nam sang Đức và các nước EU chưa bao giờ dễ dàng hơn. Chúng tôi hỗ trợ gửi hàng qua đường hàng không với tốc độ nhanh hoặc đường biển với chi phí tối ưu, đảm bảo an toàn cho mọi loại hàng hóa.",
    image: logisticsImage,
    imageAlt: "Vận chuyển hàng từ Việt Nam đi Đức, EU",
  },
  {
    title: "Mua hộ hàng Đức, EU và Shopee miễn phí",
  },
]

function ServicesSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Dịch Vụ</h2>
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a href="#" className="inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition duration-300">
                  Đọc thêm
                </a>
              </div>
              <div className="lg:w-1/2">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default ServicesSection;