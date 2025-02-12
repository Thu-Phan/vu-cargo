import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import BangGia from "./header-test";
import MenuDropdown from "./menu-dropdown";

function StickyHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-yellow-300 shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-red-500">VU Cargo</div>
          <div className="hidden md:flex items-center space-x-4">
            <HeaderLink href="/">Trang Chủ</HeaderLink>
            <HeaderLink href="#">Dịch Vụ</HeaderLink>
            <MenuDropdown></MenuDropdown>
            <HeaderLink href="/faq">Chính Sách Mua Hàng</HeaderLink>
            <HeaderLink href="/blog">Blog</HeaderLink>
            <HeaderLink href="#">Liên Hệ</HeaderLink>
            <div className="flex space-x-2">
              <HeaderButton onClick={() => navigate('/login')}>Đăng Nhập</HeaderButton>
              <HeaderButton isPrimary onClick={() => navigate('/signup')}>Đăng Kí</HeaderButton>
            </div>
          </div>
          <button
            className="md:hidden text-red-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
        {/* Mobile */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <HeaderLink href="/" isMobile>
              Trang Chủ
            </HeaderLink>
            <HeaderLink href="#" isMobile>
              Dịch Vụ
            </HeaderLink>
            <BangGia></BangGia>
            <HeaderLink href="/faq" isMobile>
              Chính Sách Mua Hàng
            </HeaderLink>
            <HeaderLink href="/blog" isMobile>
              Blog
            </HeaderLink>
            <HeaderLink href="#" isMobile>
              Liên Hệ
            </HeaderLink>
            <div className="mt-4 space-y-2">
              <HeaderButton isMobile onClick={() => navigate('/login')}>Đăng Nhập</HeaderButton>
              <HeaderButton isMobile isPrimary onClick={() => navigate('/signup')}>
                Đăng Kí
              </HeaderButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function HeaderLink({ href, children, isMobile = false }) {
  return (
    <a
      href={href}
      className={`
        text-red-500 hover:text-red-700 transition-colors duration-300
        ${isMobile ? "block py-2" : ""}
      `}
    >
      {children}
    </a>
  );
}

function HeaderButton({ children, isMobile = false, isPrimary = false, onClick = () => {} }) {
  return (
    <button
      className={`
        px-4 py-2 rounded transition-colors duration-300
        ${isMobile ? "w-full" : ""}
        ${
          isPrimary
            ? "bg-red-500 text-white hover:bg-red-600"
            : "border-2 border-red-500 bg-transparent text-red-500 hover:bg-red-50"
        }
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function CloneHeaderButton({ children, isMobile = false, isPrimary = false }) {
  return (
    <button
      className={`
        px-4 py-2 rounded transition-colors duration-300
        ${isMobile ? "w-full" : "w-full"}
        ${
          isPrimary
            ? "bg-red-500 text-white hover:bg-red-600"
            : "border-2 border-red-500 bg-transparent text-red-500 hover:bg-red-50"
        }
      `}
    >
      {children}
    </button>
  );
}

function CloneHeaderLink({ children, isMobile = false }) {
  return (
    <button
      className={`
        text-red-500 hover:text-red-700 transition-colors duration-300
        ${isMobile ? "block py-2" : ""}
      `}
    >
      {children}
    </button>
  );
}

export default StickyHeader;
