
import { useState } from "react";
import { 
  Table, TableHeader, TableRow, TableHead, TableBody, TableCell 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, 
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger 
} from "@/components/ui/alert-dialog";
import { PlusCircle, Edit, Trash2, Eye } from "lucide-react";
import { blogPosts } from "@/data/blog";

const AdminBlogPage = () => {
  // We'll use this to track the current status filter
  const [statusFilter, setStatusFilter] = useState("all");
  
  // Filter blog posts based on status
  const filteredPosts = statusFilter === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.featured === (statusFilter === "featured"));

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Blog Posts</h1>
          <p className="text-gray-500 mt-1">Manage your blog content.</p>
        </div>
        <Button className="flex items-center gap-1">
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
                  <Button variant="outline" size="sm">
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
                        <AlertDialogAction className="bg-red-600 hover:bg-red-700">Delete</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminBlogPage;
