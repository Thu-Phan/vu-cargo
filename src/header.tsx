import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'

function StickyHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-600 shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">VU Cargo</div>
          <div className="hidden md:flex space-x-4">
            <HeaderLink href="#">Trang Chủ</HeaderLink>
            <HeaderLink href="#">Dịch Vụ</HeaderLink>
            <HeaderLink href="#">Bảng Giá</HeaderLink>
            <HeaderLink href="#">Chính Sách Mua Hàng</HeaderLink>
            <HeaderLink href="#">Blog</HeaderLink>
            <HeaderLink href="#">Liên Hệ</HeaderLink>
          </div>
          <div className="hidden md:flex space-x-2">
            <HeaderButton>Đăng Nhập</HeaderButton>
            <HeaderButton isPrimary>Đăng Kí</HeaderButton>
          </div>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <HeaderLink href="#" isMobile>Trang Chủ</HeaderLink>
            <HeaderLink href="#" isMobile>Dịch Vụ</HeaderLink>
            <HeaderLink href="#" isMobile>Bảng Giá</HeaderLink>
            <HeaderLink href="#" isMobile>Chính Sách Mua Hàng</HeaderLink>
            <HeaderLink href="#" isMobile>Blog</HeaderLink>
            <HeaderLink href="#" isMobile>Liên Hệ</HeaderLink>
            <div className="mt-4 space-y-2">
              <HeaderButton isMobile>Đăng Nhập</HeaderButton>
              <HeaderButton isMobile isPrimary>Đăng Kí</HeaderButton>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function HeaderLink({ href, children, isMobile = false }) {
  return (
    <a 
      href={href} 
      className={`
        text-white hover:text-yellow-400 transition-colors duration-300
        ${isMobile ? 'block py-2' : ''}
      `}
    >
      {children}
    </a>
  )
}

function HeaderButton({ children, isMobile = false, isPrimary = false }) {
  return (
    <button 
      className={`
        px-4 py-2 rounded transition-colors duration-300
        ${isMobile ? 'w-full' : ''}
        ${isPrimary 
          ? 'bg-yellow-400 text-blue-600 hover:bg-yellow-500'
          : 'bg-white text-blue-600 hover:bg-gray-200'
        }
      `}
    >
      {children}
    </button>
  )
}

export default StickyHeader;