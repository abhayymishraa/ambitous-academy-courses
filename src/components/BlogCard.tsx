
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.id}`}>
      <Card className="h-full overflow-hidden card-hover">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-2">
            <Badge variant="outline" className="bg-academy-teal/10 text-academy-teal">
              {post.category}
            </Badge>
            <span className="text-xs text-gray-500">{post.date}</span>
          </div>
          <h3 className="text-lg font-semibold line-clamp-2 h-14">{post.title}</h3>
          <p className="text-sm text-gray-500 mb-2">By {post.author}</p>
          <p className="text-sm text-gray-600 line-clamp-3 mb-4 h-18">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center border-t">
          <span className="text-academy-teal text-sm font-semibold">Read more</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
