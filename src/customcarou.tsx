'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Updated images array with metadata and links
const images = [
  {
    src: 'src\\assets\\container.jpg',
    title: 'Làm sao để chuyển hàng từ Đức về Việt Nam tiết kiệm nhất?',
    author: 'Admin',
    date: 'November 22, 2023',
    href: 'https://example.com/page1'
  },
  {
    src: 'src\\assets\\shipping.png',
    title: 'How to ship from Germany to Vietnam efficiently?',
    author: 'Admin',
    date: 'November 21, 2023',
    href: 'https://example.com/page2'
  },
  {
    src: 'src\\assets\\delivery-man.jpg',
    title: 'Best practices for international shipping',
    author: 'Admin',
    date: 'November 20, 2023',
    href: 'https://example.com/page3'
  },
  {
    src: 'src\\assets\\stock.jpg',
    title: 'International logistics guide',
    author: 'Admin',
    date: 'November 19, 2023',
    href: 'https://example.com/page4'
  },
]

export default function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

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
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {visibleImages.slice(0, itemsToShow).map((image, index) => (
          <CarouselItem key={index} className={isMobile ? 'basis-full' : 'basis-1/3'}>
            <a href={image.href} className="block p-1 no-underline" target="_blank" rel="noopener noreferrer">
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
                  <h3 className="font-medium text-base line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {image.title}
                  </h3>
                </div>
              </div>
            </a>
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
  )
}