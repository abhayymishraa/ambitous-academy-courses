
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/blog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import BlogCard from "@/components/BlogCard";

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);
  
  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.id !== id && p.category === post?.category)
    .slice(0, 3);

  if (!post) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
          <p className="mb-8">Sorry, the article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">Return to Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-gray-300 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all articles
          </Link>
          
          <div className="mb-6">
            <span className="bg-academy-teal/20 text-academy-teal/90 py-1 px-3 rounded-full text-sm">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center">
            <div>
              <p className="text-sm text-gray-300">By {post.author}</p>
              <p className="text-sm text-gray-400">{post.date}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

      {relatedPosts.length > 0 && (
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default BlogPostPage;
