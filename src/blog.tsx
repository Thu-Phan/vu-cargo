import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  image: string;
}

export function Component() {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "Làm sao để chuyển hàng từ Đức về Việt Nam tiết kiệm nhất?",
      date: "November 22, 2023",
      author: "Admin",
      image: "/src/assets/stock.jpg",
    },
    {
      id: 2,
      title: "Rủi ro và cách xử lý khi gửi hàng từ Đức về Việt Nam",
      date: "November 22, 2023",
      author: "Admin",
      image: "/src/assets/delivery-man.jpg",
    },
    {
      id: 3,
      title: "Mua hàng hộ tại các nước EU nhanh gọn, tiết kiệm nhất",
      date: "November 22, 2023",
      author: "Admin",
      image: "/src/assets/container.jpg",
    },
  ]);

  return (
    <div className="w-full py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Tin Tức</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {posts.map((post) => (
              <CarouselItem key={post.id} className="pl-2 md:pl-4 md:basis-1/3 basis-full">
                <Card className="h-full">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>
                    <CardTitle className="text-lg mb-2 line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Đọc thêm
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
}
