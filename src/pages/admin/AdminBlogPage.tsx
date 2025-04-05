import { useState } from "react";
import { 
  Table, TableHeader, TableRow, TableHead, TableBody, TableCell 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, 
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger 
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PlusCircle, Edit, Trash2, Eye } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

// Define our internal BlogPost type for admin management
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  featured: boolean;
}

const AdminBlogPage = () => {
  const [statusFilter, setStatusFilter] = useState("all");
  // Convert imported blog posts to our internal type with guaranteed featured property
  const initialPosts = blogPosts.map(post => ({
    ...post,
    featured: post.featured || false
  }));
  
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);
  const { toast } = useToast();
  
  // Filter blog posts based on status
  const filteredPosts = statusFilter === "all" 
    ? posts 
    : posts.filter(post => post.featured === (statusFilter === "featured"));

  const handleDelete = (id: string) => {
    setPosts(prev => prev.filter(post => post.id !== id));
    toast({
      title: "Blog post deleted",
      description: "The blog post has been successfully deleted.",
    });
  };

  const handleEditPost = (post: BlogPost) => {
    setCurrentPost({...post});
    setIsEditing(true);
  };

  const handleAddNewPost = () => {
    setCurrentPost({
      id: String(Date.now()),
      title: "",
      excerpt: "",
      content: "",
      author: "",
      date: new Date().toISOString().split('T')[0],
      image: "https://source.unsplash.com/random/?law",
      category: "Legal News",
      featured: false
    });
    setIsEditing(true);
  };

  const handleSavePost = () => {
    if (!currentPost) return;
    
    if (posts.find(p => p.id === currentPost.id)) {
      // Update existing post
      setPosts(prev => 
        prev.map(p => p.id === currentPost.id ? currentPost : p)
      );
      toast({
        title: "Blog post updated",
        description: "The blog post has been successfully updated.",
      });
    } else {
      // Add new post
      setPosts(prev => [...prev, currentPost]);
      toast({
        title: "Blog post added",
        description: "The new blog post has been successfully added.",
      });
    }
    
    setIsEditing(false);
    setCurrentPost(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Blog Posts</h1>
          <p className="text-gray-500 mt-1">Manage your blog content.</p>
        </div>
        <Button className="flex items-center gap-1" onClick={handleAddNewPost}>
          <PlusCircle className="h-4 w-4" />
          New Post
        </Button>
      </div>

      <div className="flex gap-2">
        <Button 
          variant={statusFilter === "all" ? "default" : "outline"} 
          onClick={() => setStatusFilter("all")}
          className="text-sm"
        >
          All Posts
        </Button>
        <Button 
          variant={statusFilter === "featured" ? "default" : "outline"} 
          onClick={() => setStatusFilter("featured")}
          className="text-sm"
        >
          Featured
        </Button>
        <Button 
          variant={statusFilter === "regular" ? "default" : "outline"} 
          onClick={() => setStatusFilter("regular")}
          className="text-sm"
        >
          Regular
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Published</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-medium">{post.title}</TableCell>
              <TableCell>{post.author}</TableCell>
              <TableCell>{post.category}</TableCell>
              <TableCell>{new Date(post.date).toLocaleDateString()}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  post.featured ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                }`}>
                  {post.featured ? "Featured" : "Regular"}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleEditPost(post)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Blog Post</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete this blog post? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction 
                          className="bg-red-600 hover:bg-red-700"
                          onClick={() => handleDelete(post.id)}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Edit Post Dialog */}
      <Dialog open={isEditing} onOpenChange={(open) => {
        if (!open) setIsEditing(false);
      }}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>{currentPost?.id ? (posts.find(p => p.id === currentPost.id) ? "Edit Blog Post" : "Add New Blog Post") : "Blog Post"}</DialogTitle>
            <DialogDescription>
              Fill in the blog post details below.
            </DialogDescription>
          </DialogHeader>
          
          {currentPost && (
            <div className="grid gap-4 py-4 max-h-[70vh] overflow-y-auto">
              <div className="grid gap-2">
                <label htmlFor="title" className="text-sm font-medium">Post Title</label>
                <Input 
                  id="title" 
                  value={currentPost.title} 
                  onChange={(e) => setCurrentPost({...currentPost, title: e.target.value})}
                />
              </div>
              
              <div className="grid gap-2">
                <label htmlFor="excerpt" className="text-sm font-medium">Excerpt</label>
                <Textarea 
                  id="excerpt" 
                  value={currentPost.excerpt} 
                  onChange={(e) => setCurrentPost({...currentPost, excerpt: e.target.value})}
                  rows={2}
                />
              </div>
              
              <div className="grid gap-2">
                <label htmlFor="content" className="text-sm font-medium">Content (HTML)</label>
                <Textarea 
                  id="content" 
                  value={currentPost.content} 
                  onChange={(e) => setCurrentPost({...currentPost, content: e.target.value})}
                  rows={8}
                  className="font-mono text-sm"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="author" className="text-sm font-medium">Author</label>
                  <Input 
                    id="author" 
                    value={currentPost.author} 
                    onChange={(e) => setCurrentPost({...currentPost, author: e.target.value})}
                  />
                </div>
                
                <div className="grid gap-2">
                  <label htmlFor="date" className="text-sm font-medium">Publication Date</label>
                  <Input 
                    id="date" 
                    type="date"
                    value={currentPost.date} 
                    onChange={(e) => setCurrentPost({...currentPost, date: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="category" className="text-sm font-medium">Category</label>
                  <Input 
                    id="category" 
                    value={currentPost.category} 
                    onChange={(e) => setCurrentPost({...currentPost, category: e.target.value})}
                  />
                </div>
                
                <div className="grid gap-2">
                  <label htmlFor="image" className="text-sm font-medium">Image URL</label>
                  <Input 
                    id="image" 
                    value={currentPost.image} 
                    onChange={(e) => setCurrentPost({...currentPost, image: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="featured" 
                  checked={currentPost.featured}
                  onChange={(e) => setCurrentPost({...currentPost, featured: e.target.checked})}
                  className="h-4 w-4 rounded border-gray-300 text-academy-teal focus:ring-academy-teal"
                />
                <label htmlFor="featured" className="text-sm font-medium">Featured Post</label>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
            <Button onClick={handleSavePost}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminBlogPage;
