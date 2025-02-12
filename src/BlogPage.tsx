import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { articles } from "./data/articles";

export default function BlogPage() {

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-8">Tin Tức</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((post) => (
          <Card key={post.id} className="h-full flex flex-col">
            <CardHeader className="p-0">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4 flex-grow">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
              </div>
              <CardTitle className="text-lg mb-2 line-clamp-2">
                {post.title}
              </CardTitle>
              <CardDescription className="line-clamp-3">
                {post.content.split('\n\n')[0]}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Link to={`/blog/${post.slug}`} className="w-full">
                <Button variant="outline" className="w-full">
                  Đọc thêm
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

    </div>
  );
}
