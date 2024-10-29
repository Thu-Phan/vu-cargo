import React from "react"

// Testimonial data
const testimonials = [
  {
    name: "Alex Johnson",
    role: "CEO, TechCorp",
    quote: "This product has revolutionized our workflow. Highly recommended!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Sarah Lee",
    role: "Designer, CreativeCo",
    quote: "The user interface is intuitive and the features are top-notch.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Mike Brown",
    role: "Developer, CodeMasters",
    quote: "The API documentation is excellent. Integration was a breeze.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emily Chen",
    role: "Marketing Manager, GrowthInc",
    quote: "Our team's productivity has increased significantly since we started using this tool.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "David Kim",
    role: "CTO, InnovateTech",
    quote: "The scalability and performance of this solution are unmatched in the industry.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col items-center">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                    width={100}
                    height={100}
                    className="rounded-full mb-4"
                  />
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{testimonial.role}</p>
                  <blockquote className="text-center italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
      >
        →
      </button>
    </div>
  )
}
