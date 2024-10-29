import { useState, useEffect } from 'react'
import { Search, Phone, MessageCircle, Facebook, Menu, ChevronLeft, ChevronRight } from 'lucide-react'
import StickyHeader from './header'

export default function Cargo() {
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
      title: "Làm sao để chuyển hàng từ Đức về Việt Nam tiết kiệm nhất?",
      date: "November 22, 2023"
    },
    {
      title: "Rủi ro và cách xử lý khi gửi hàng từ Đức về Việt Nam",
      date: "November 22, 2023"
    },
    {
      title: "Mua hàng hộ tại các nước EU nhanh gọn, tiết kiệm nhất",
      date: "November 22, 2023"
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
      {/* <StickyHeader></StickyHeader> */}
      {/* Header */}
      {/* <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold">VU Cargo</div>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="hover:underline">Trang Chủ</a>
              <a href="#" className="hover:underline">Dịch Vụ</a>
              <a href="#" className="hover:underline">Bảng Giá</a>
              <a href="#" className="hover:underline">Chính Sách Mua Hàng</a>
              <a href="#" className="hover:underline">Blog</a>
              <a href="#" className="hover:underline">Liên Hệ</a>
            </div>
            <div className="hidden md:flex space-x-2">
              <button className="bg-white text-blue-600 px-4 py-2 rounded">Đăng Nhập</button>
              <button className="bg-yellow-400 text-blue-600 px-4 py-2 rounded">Đăng Kí</button>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </nav>
          {isMenuOpen && (
            <div className="mt-4 md:hidden">
              <a href="#" className="block py-2">Trang Chủ</a>
              <a href="#" className="block py-2">Dịch Vụ</a>
              <a href="#" className="block py-2">Bảng Giá</a>
              <a href="#" className="block py-2">Chính Sách Mua Hàng</a>
              <a href="#" className="block py-2">Blog</a>
              <a href="#" className="block py-2">Liên Hệ</a>
              <div className="mt-4 space-y-2">
                <button className="bg-white text-blue-600 px-4 py-2 rounded w-full">Đăng Nhập</button>
                <button className="bg-yellow-400 text-blue-600 px-4 py-2 rounded w-full">Đăng Kí</button>
              </div>
            </div>
          )}
        </div>
      </header> */}

      <div className="flex">
        {/* Sticky Sidebar for Web View */}
        {/* <aside className="hidden md:block w-16 fixed left-0 top-0 h-screen bg-gray-100">
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <ContactButton icon={<Phone />} text="Gọi ngay" color="bg-blue-600" />
            <ContactButton icon={<MessageCircle />} text="Zalo" color="bg-green-500" />
            <ContactButton icon={<Facebook />} text="Facebook" color="bg-blue-800" />
          </div>
        </aside> */}
        <aside className="hidden md:block w-16 fixed left-4 top-1/2 -translate-y-1/2 bg-gray-100 rounded-lg shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
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
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">VU Cargo</h1>
                <p className="text-xl md:text-2xl mb-8">Vận chuyển hàng hóa toàn cầu</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
                  Bắt đầu ngay
                </button>
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
                <button className="bg-blue-600 text-white px-4 py-2 rounded-b sm:rounded-r sm:rounded-b-none flex items-center justify-center">
                  <Search className="mr-2" />
                  Tra Cứu
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-600">Nhập Mã Khách Hàng</p>
            </div>

            {/* Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <ServiceCard
                title="Gửi hàng trực tuyến"
                description="Tiện lợi tạo đơn và quản lý vận chuyển chỉ với vài thao tác đơn giản"
                icon={<MessageCircle className="w-12 h-12 text-blue-600" />}
              />
              <ServiceCard
                title="Ước tính lệ phí"
                description="Nhanh chóng tính toán chi phí vận chuyển dựa trên kích thước và trọng lượng"
                icon={<Search className="w-12 h-12 text-blue-600" />}
              />
              <ServiceCard
                title="Theo dõi lô hàng"
                description="Luôn biết vị trí đơn hàng với hệ thống theo dõi chính xác theo thời gian thực"
                icon={<Search className="w-12 h-12 text-blue-600" />}
              />
            </div>

            {/* Services Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-blue-600">Dịch Vụ</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ServiceDetailCard
                  title="Vận chuyển hàng Đức, EU về Việt Nam"
                  description="Chúng tôi cung cấp dịch vụ vận chuyển hàng từ Đức và các nước EU về Việt Nam qua đường hàng không và đường biển. Với thời gian vận chuyển nhanh chóng chỉ từ 4-6 ngày, hàng hóa được đảm bảo an toàn, đáp ứng mọi nhu cầu của bạn."
                />
                <ServiceDetailCard
                  title="Vận chuyển hàng Việt Nam đi Đức, EU"
                  description="Vận chuyển hàng hóa từ Việt Nam sang Đức và các nước EU chưa bao giờ dễ dàng hơn. Chúng tôi hỗ trợ gửi hàng qua đường hàng không với tốc độ nhanh hoặc đường biển với chi phí tối ưu, đảm bảo an toàn cho mọi loại hàng hóa."
                />
                <ServiceDetailCard
                  title="Mua hộ hàng Đức, EU và Shopee miễn phí"
                  description="Chúng tôi hỗ trợ mua hộ từ các trang thương mại điện tử uy tín như Amazon, eBay, DM... tại Đức và các nước EU, đồng thời nhận mua hộ Shopee tại Việt Nam gửi sang Đức, EU. Quy trình nhanh gọn và chi phí hợp lý giúp bạn dễ dàng sở hữu những sản phẩm yêu thích."
                />
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-blue-600">VÌ SAO NÊN CHỌN VU CARGO?</h2>
              <p className="mb-6">
                VU Cargo mang đến dịch vụ vận chuyển nhanh chóng và an toàn, với giá cả cạnh tranh cho cả đường
                bay và đường biển. Chúng tôi hỗ trợ mua hộ hàng từ các nền tảng thương mại điện tử lớn, giúp bạn dễ
                dàng sở hữu sản phẩm yêu thích.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                  title="Uy Tín"
                  description="Với 8  năm kinh nghiệm trong lĩnh vực xuất nhập khẩu cùng với sự tin tưởng của hơn 10.000 khách hàng, Vu Cargo tự tin mang dịch vụ của mình ra khắp nhiều nước."
                />
                <FeatureCard
                  title="An Toàn"
                  description="Mọi đơn hàng đều được Vu Cargo đóng pallet cẩn thận. Khách hàng có thể gửi mọi loại hàng từ giá trị cao, hàng dễ vỡ cho đến hàng nhạy cảm cần đảm bảo chắc chắn."
                />
                <FeatureCard
                  title="Tiết Kiệm"
                  description="Với hình thức vận chuyển trọn gói, Vu Cargo luôn dành ưu đãi cho những khách hàng lớn để giúp tiết kiệm một khoản đáng kể cước phí vận chuyển."
                />
              </div>
            </section>

            {/* Customer Reviews Carousel */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-blue-600">SỰ HÀI LÒNG TỪ KHÁCH HÀNG</h2>
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
            </section>

            {/* Blog Posts Carousel */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-blue-600">TIN TỨC</h2>
              <div className="relative">
                <BlogPostCard
                  title={blogPosts[currentBlogIndex].title}
                  date={blogPosts[currentBlogIndex].date}
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

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Địa chỉ:</h3>
              <p>Đức: Max-Planck-Straße 16, 63303 Dreieich, Germany</p>
              <p>Việt Nam: Kho Gia Lâm – Hà Nội</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liên hệ:</h3>
              <p>Tel: (+49) 176.5585.9000</p>
              <p>     (+84) 0707.600.300</p>
              <p>     (+33) 075156.8295</p>
              <p>Email: hallo@vucargo.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Chính sách pháp lý</h3>
              <ul>
                <li><a href="#" className="hover:underline">Điều khoản gửi hàng</a></li>
                <li><a href="#" className="hover:underline">Chính sách khiếu nại</a></li>
                <li><a href="#" className="hover:underline">Chính sách bảo mật</a></li>
                <li><a href="#" className="hover:underline">Chính sách thanh toán</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hỗ trợ khách hàng</h3>
              <ul>
                <li><a href="#" className="hover:underline">Tra cước phí vận chuyển</a></li>
                <li><a href="#" className="hover:underline">Tra cứu nhanh đơn hàng</a></li>
                <li><a href="#" className="hover:underline">Hướng dẫn đóng gói</a></li>
                <li><a href="#" className="hover:underline">Bảo Hiểm Hàng Hoá</a></li>
              </ul>
            </div>
          </div>
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

function ServiceDetailCard({ title, description }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-blue-600 font-semibold flex items-center">
        Đọc thêm
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
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

function BlogPostCard({ title, date }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 mb-4">{date}</p>
      <a href="#" className="text-blue-600 font-semibold flex items-center">
        Đọc thêm
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
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
