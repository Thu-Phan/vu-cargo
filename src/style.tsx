import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                    width={100}
                    height={100}
                    className="rounded-full mb-4"
                  />
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{testimonial.role}</p>
                  <blockquote className="text-center italic">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
