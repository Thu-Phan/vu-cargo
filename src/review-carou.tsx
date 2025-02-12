'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import lotusImage from "./assets/lotus.jpg"

const reviews = [
  {
    id: 1,
    name: "Bảo Dan",
    avatar: lotusImage,
    rating: 5,
    review: "Công nhận bên bạn giao nhanh thật. Trừ hàng xách tay ra m chưa thấy ở đâu nhanh như vậy luôn. Bạn nhân viên check tin nhắn trả lời khách rất dễ thương luôn."
  },
  {
    id: 2,
    name: "Đông Cool",
    avatar: lotusImage,
    rating: 5,
    review: "Bên bạn giao hàng nhanh mà giá ổn ớn. Người nhà mình còn bất ngờ vì hàng giao quá nhanh đy chứ! Giống như giao hàng tốc ở Việt Nam vậy."
  },
  {
    id: 3,
    name: "Tina",
    avatar: lotusImage,
    rating: 5,
    review: "Mình đã nhận được hàng đầy đủ. Cảm ơn bạn nhiều. Dịch vụ của Vu Cargo mình rất ưng tâm."
  },
  {
    id: 4,
    name: "Alex",
    avatar: lotusImage,
    rating: 5,
    review: "Dịch vụ chuyên nghiệp, nhân viên nhiệt tình. Sẽ ủng hộ dài dài."
  }
]

export default function CustomerReviewCarousel() {
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const getVisibleReviews = () => {
    let visibleReviews = []
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % reviews.length
      visibleReviews.push(reviews[index])
    }
    return visibleReviews
  }

  const StarRating = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  )

  return (
    <div className="w-full bg-yellow-300 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">SỰ HÀI LÒNG TỪ KHÁCH HÀNG</h2>
          <div className="flex justify-center items-center gap-2">
            <StarRating rating={5} />
            <span className="text-lg font-semibold">5.00</span>
          </div>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {getVisibleReviews().map((review, index) => (
              <CarouselItem 
                key={review.id} 
                className={`${isMobile ? 'pl-2 basis-full' : 'pl-4 basis-1/3'} flex items-stretch`}
              >
                <div className="w-full max-w-[280px] mx-auto flex">
                  <div className="p-6 bg-white rounded-xl shadow-sm flex flex-col w-full">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-10 h-10 rounded-full flex-shrink-0"
                      />
                      <div>
                        <h3 className="font-semibold">{review.name}</h3>
                        <StarRating rating={review.rating} />
                      </div>
                    </div>
                    <div className="relative flex-grow">
                      <span className="text-5xl text-gray-200 absolute -top-4 -left-2">"</span>
                      <p className="text-gray-600 relative pl-4 pt-2 text-sm">
                        {review.review}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center mt-8 gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={prevSlide} 
            className="rounded-full bg-white hover:bg-yellow-50 hover:text-yellow-600 hover:border-yellow-200"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={nextSlide} 
            className="rounded-full bg-white hover:bg-yellow-50 hover:text-yellow-600 hover:border-yellow-200"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
