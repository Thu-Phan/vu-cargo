import { useState, useEffect } from 'react'
import { Search, Phone, MessageCircle, Facebook, Menu, ChevronLeft, ChevronRight } from 'lucide-react'
import ServicesSection from './services-section'
import WhyChooseUs from './whyChooseUs'
import ServiceGrid from './service-card'
import TestimonialCarousel from './style'
import TestimonialCarousel2 from './style2'

function Cargo10() {
  const [customerCode, setCustomerCode] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0)
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)

  const reviews = [
    {
      name: "Bảo Đan",
      review: "Công nhận bên bạn giao nhanh thật. Trừ hàng xách tay ra m chưa thấy ở đâu nhanh như vậy luôn. Mình thấy ai bên Vu Cargo cũng dễ thương thiệt, bạn nhân viên check tin nhắn trả lời khách rất dễ thương luôn."
    },
    {
      name: "Đông Cool",
      review: "Bên bạn giao hàng nhanh mà giá ổn. Người nhà mình còn bất ngờ vì hàng giao quá nhanh ấy chứ. Giống như giao hỏa tốc ở Việt Nam vậy"
    },
    {
      name: "Tina",
      review: "Mình đã nhận được hàng đầy đủ. Cảm ơn bạn nhiều. Dịch vụ của Vu Cargo mình rất yên tâm"
    }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Làm sao để chuyển hàng từ Đức về Việt Nam tiết kiệm nhất?",
      date: "November 22, 2023",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 2,
      title: "Rủi ro và cách xử lý khi gửi hàng từ Đức về Việt Nam",
      date: "November 22, 2023",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 3,
      title: "Mua hàng hộ tại các nước EU nhanh gọn, tiết kiệm nhất",
      date: "November 22, 2023",
      image: "/placeholder.svg?height=200&width=300"
    }
  ]

  const heroImages = [
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=600&width=1200"
  ]

  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 5000)

    const blogInterval = setInterval(() => {
      setCurrentBlogIndex((prevIndex) => (prevIndex + 1) % blogPosts.length)
    }, 5000)

    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000)

    return () => {
      clearInterval(reviewInterval)
      clearInterval(blogInterval)
      clearInterval(heroInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      
      <div className="flex">
        {/* Sticky Sidebar for Web View */}
        <aside className="hidden md:block w-16 fixed left-4 top-1/2 -translate-y-1/2 bg-gray-100 rounded-lg shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            <ContactButton icon={<Phone />} text="Gọi ngay" color="bg-blue-600" />
            <ContactButton icon={<Phone />} text="Gọi ngay" color="bg-blue-600" />
            <ContactButton icon={<MessageCircle />} text="Zalo" color="bg-green-500" />
            <ContactButton icon={<Facebook />} text="Facebook" color="bg-blue-800" />
          </div>
        </aside>


        {/* Main Content */}
        <main className="flex-1 md:ml-16">
          {/* Hero Section with Image Carousel */}
          <section className="relative h-[600px] overflow-hidden">
            {heroImages.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentHeroIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={src}
                  alt={`Hero image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">VU Cargo</h1>
                <p className="text-xl md:text-2xl mb-8">Vận chuyển hàng hóa toàn cầu</p>                
              </div>
            </div>
            <button
              onClick={() => setCurrentHeroIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-gray-800 hover:bg-opacity-75 transition duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-gray-800 hover:bg-opacity-75 transition duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </section>

          <div className="container mx-auto px-4 py-8 mb-16 md:mb-0">



            {/* Customer Code Search */}
            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">Tra Cứu</h2>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="text"
                  placeholder="VD: 123456789abc"
                  className="flex-grow border rounded-t sm:rounded-l sm:rounded-t-none px-4 py-2 mb-2 sm:mb-0"
                  value={customerCode}
                  onChange={(e) => setCustomerCode(e.target.value)}
                />
                <button className="bg-red-600 text-white px-4 py-2 rounded-b sm:rounded-r sm:rounded-b-none flex items-center justify-center">
                  <Search className="mr-2" />
                  Tra Cứu
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-600">Nhập Mã Khách Hàng</p>
            </div>

            {/* Services */}
            
            <ServiceGrid></ServiceGrid>


            {/* Why Choose Us */}

            
            {/* <ServicesSection></ServicesSection>
            <WhyChooseUs></WhyChooseUs>            */}

            <h2 className="text-2xl font-bold mb-6 text-red-600">SỰ HÀI LÒNG TỪ KHÁCH HÀNG</h2>
            <TestimonialCarousel2></TestimonialCarousel2>



            {/* Customer Reviews Carousel */}
            {/* <section className="mb-12">
              <div className="relative">
                <ReviewCard
                  name={reviews[currentReviewIndex].name}
                  review={reviews[currentReviewIndex].review}
                />
                <div className="absolute top-1/2 transform -translate-y-1/2 left-0 -ml-4">
                  <button
                    onClick={() => setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)}
                    className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 right-0 -mr-4">
                  <button
                    onClick={() => setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length)}
                    className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </section> */}

            {/* Blog Posts Carousel */}
            {/* <TestimonialCarousel></TestimonialCarousel> */}

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-blue-600">TIN TỨC</h2>
              <div className="relative">
                <BlogPostCard
                  id={blogPosts[currentBlogIndex].id}
                  title={blogPosts[currentBlogIndex].title}
                  date={blogPosts[currentBlogIndex].date}
                  image={blogPosts[currentBlogIndex].image}
                />
                <div className="absolute top-1/2 transform -translate-y-1/2 left-0 -ml-4">
                  <button
                    onClick={() => setCurrentBlogIndex((prevIndex) => (prevIndex - 1 + blogPosts.length) % blogPosts.length)}
                    className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
                    aria-label="Previous blog post"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 right-0 -mr-4">
                  <button
                    onClick={() => setCurrentBlogIndex((prevIndex) => (prevIndex + 1) % blogPosts.length)}
                    className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
                    aria-label="Next blog post"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Sticky Footer for Mobile View */}
      <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
        <div className="flex justify-around">
          <ContactButton icon={<Phone />} text="Gọi ngay" color="bg-blue-600" />
          <ContactButton icon={<MessageCircle />} text="Zalo" color="bg-green-500" />
          <ContactButton icon={<Facebook />} text="Facebook" color="bg-blue-800" />
        </div>
      </footer>

      
    </div>
  )
}

function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function ContactButton({ icon, text, color }) {
  return (
    <button className={`${color} text-white p-2 rounded-full flex flex-col items-center justify-center`} aria-label={text}>
      {icon}
      <span className="text-xs mt-1 hidden md:inline">{text}</span>
    </button>
  )
}

function ServiceDetailCard({ title, description, imageSrc }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 lg:pr-6 mb-6 lg:mb-0">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="#" className="text-blue-600 font-semibold flex items-center">
          Đọc thêm
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="lg:w-1/2">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  )
}

function ReviewCard({ name, review }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-600 mb-4">{review}</p>
      <p className="font-semibold">{name}</p>
    </div>
  )
}

function BlogPostCard({ id, title, date, image }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-4 md:mb-0 md:pr-6">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 mb-4">{date}</p>
        <a href={`/blog/${id}`} className="text-blue-600 font-semibold flex items-center">
          Đọc thêm
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
export default Cargo10;