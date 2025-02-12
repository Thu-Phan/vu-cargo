'use client'

import { useState, useEffect } from 'react'
import ArticlePage from './components/ArticlePage'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import containerImage from './assets/container.jpg'
import planeImage from './assets/plane.jpg'
import deliveryManImage from './assets/delivery-man.jpg'
import stockImage from './assets/stock.jpg'

// Updated images array with metadata and content
const images = [
  {
    src: containerImage,
    title: 'Làm sao để chuyển hàng từ Đức về Việt Nam tiết kiệm nhất?',
    author: 'Admin',
    date: 'November 22, 2023',
    content: `Chuyển hàng từ Đức về Việt Nam là một nhu cầu ngày càng phổ biến. Bài viết này sẽ hướng dẫn bạn cách để tiết kiệm chi phí tối đa.

Đầu tiên, bạn cần lựa chọn phương thức vận chuyển phù hợp. Có nhiều options như vận chuyển đường biển, đường hàng không, hoặc kết hợp cả hai. Mỗi phương thức đều có ưu và nhược điểm riêng.

Vận chuyển đường biển thường có chi phí thấp hơn nhưng thời gian vận chuyển lâu hơn. Ngược lại, vận chuyển đường hàng không nhanh chóng nhưng chi phí cao hơn đáng kể.

Để tiết kiệm chi phí, bạn nên cân nhắc gom hàng với những người khác. Điều này giúp chia sẻ chi phí vận chuyển và giảm giá thành trên mỗi đơn vị sản phẩm.`
  },
  {
    src: planeImage,
    title: 'How to ship from Germany to Vietnam efficiently?',
    author: 'Admin',
    date: 'November 21, 2023',
    content: `Shipping from Germany to Vietnam requires careful planning and understanding of international logistics. This guide will help you navigate the process efficiently.

When shipping internationally, it's crucial to understand the documentation requirements. This includes commercial invoices, packing lists, and customs declarations. Having these documents properly prepared will help avoid delays.

Choose the right shipping method based on your needs. Air freight is faster but more expensive, while sea freight is more economical but takes longer. Consider factors like urgency, budget, and cargo size.

Working with a reliable shipping partner is essential. Look for companies with experience in both German and Vietnamese markets. They can help navigate customs procedures and ensure smooth delivery.`
  },
  {
    src: deliveryManImage,
    title: 'Best practices for international shipping',
    author: 'Admin',
    date: 'November 20, 2023',
    content: `International shipping can be complex, but following these best practices will help ensure successful deliveries.

Proper packaging is crucial for international shipments. Items should be well-protected to withstand long journeys and multiple handling points. Use high-quality materials and consider climate conditions during transit.

Insurance is often overlooked but extremely important. International shipments face various risks, and proper insurance coverage can protect your investment. Consider full-value insurance for valuable items.

Tracking capabilities are essential for international shipments. Choose carriers that offer detailed tracking information and regular updates. This helps you monitor your shipment's progress and plan accordingly.`
  },
  {
    src: stockImage,
    title: 'International logistics guide',
    author: 'Admin',
    date: 'November 19, 2023',
    content: `Understanding international logistics is key to successful global trade. This comprehensive guide covers essential aspects of international shipping and logistics management.

Supply chain optimization is crucial for international logistics. This involves selecting the right suppliers, carriers, and distribution networks. A well-optimized supply chain reduces costs and improves efficiency.

Customs compliance is a critical aspect of international logistics. Each country has its own regulations and requirements. Stay updated with customs regulations to avoid delays and penalties.

Technology plays an increasingly important role in modern logistics. From tracking systems to inventory management, leveraging the right technology can significantly improve your logistics operations.`
  }
]

export default function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState<typeof images[0] | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const itemsToShow = isMobile ? 1 : 3

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const visibleImages = images.slice(currentIndex).concat(images.slice(0, currentIndex))

  return (
    <>
    <Carousel className="w-full">
      <CarouselContent>
        {visibleImages.slice(0, itemsToShow).map((image, index) => (
          <CarouselItem key={index} className={isMobile ? 'basis-full' : 'basis-1/3'}>
            <div
              onClick={() => setSelectedArticle(image)}
              className="block p-1 no-underline cursor-pointer"
            >
              <div className="relative group cursor-pointer transition-transform hover:-translate-y-1 duration-300">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-2 space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{image.author}</span>
                    <span>•</span>
                    <span>{image.date}</span>
                  </div>
                  <h3 className="font-medium text-base line-clamp-2 group-hover:text-red-600 transition-colors">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-4 gap-2">
        <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </Carousel>
            {/* Subscription Form */}
            <div className="bg-gray-100 p-8 rounded-lg mt-12">
              <h2 className="text-3xl font-bold text-center mb-4">
                Chúng tôi cam kết sẽ làm bạn hài lòng!
              </h2>
              <p className="text-gray-600 text-center mb-8">
                *Nhập email để nhận ưu đãi đặc biệt dành cho khách hàng lần đầu gửi
              </p>
              
              <form className="max-w-2xl mx-auto space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Tên đầy đủ*</label>
                  <input
                    type="text"
                    placeholder="Nhập tên của bạn*"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Email*</label>
                  <input
                    type="email"
                    placeholder="Email nhận ưu đãi của bạn*"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Ghi chú (tùy chọn)</label>
                  <textarea
                    placeholder="Bạn cần gửi hàng đến quốc gia nào, loại vật phẩm nào... hay bạn cần Amamy tư vấn những gì?"
                    className="w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div className="mb-6">
                  <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
                >
                  ĐĂNG KÝ NHẬN KHUYẾN MÃI
                </button>
              </form>
            </div>

    {selectedArticle && (
      <ArticlePage
        title={selectedArticle.title}
        author={selectedArticle.author}
        date={selectedArticle.date}
        content={selectedArticle.content}
        image={selectedArticle.src}
        onClose={() => setSelectedArticle(null)}
      />
    )}
    </>
  )
}
