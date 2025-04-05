
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
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Edit, Trash2 } from "lucide-react";
import { courses } from "@/data/courses";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  price: number;
  duration: string;
  level: string;
  image: string;
  featured: boolean;
}

const AdminCoursesPage = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [coursesData, setCoursesData] = useState([...courses]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCourse, setCurrentCourse] = useState<Course | null>(null);
  const { toast } = useToast();

  const filteredCourses = selectedTab === "all" 
    ? coursesData 
    : coursesData.filter(course => 
        selectedTab === "featured" ? course.featured : !course.featured
      );

  const handleDelete = (id: string) => {
    setCoursesData(prev => prev.filter(course => course.id !== id));
    toast({
      title: "Course deleted",
      description: "The course has been successfully deleted.",
    });
  };

  const handleEditCourse = (course: Course) => {
    setCurrentCourse({...course});
    setIsEditing(true);
  };

  const handleAddNewCourse = () => {
    setCurrentCourse({
      id: String(Date.now()),
      title: "",
      description: "",
      instructor: "",
      price: 0,
      duration: "",
      level: "Beginner",
      image: "https://source.unsplash.com/random/?law",
      featured: false
    });
    setIsEditing(true);
  };

  const handleSaveCourse = () => {
    if (!currentCourse) return;
    
    if (coursesData.find(c => c.id === currentCourse.id)) {
      // Update existing course
      setCoursesData(prev => 
        prev.map(c => c.id === currentCourse.id ? currentCourse : c)
      );
      toast({
        title: "Course updated",
        description: "The course has been successfully updated.",
      });
    } else {
      // Add new course
      setCoursesData(prev => [...prev, currentCourse]);
      toast({
        title: "Course added",
        description: "The new course has been successfully added.",
      });
    }
    
    setIsEditing(false);
    setCurrentCourse(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Courses</h1>
          <p className="text-gray-500 mt-1">Manage your course offerings.</p>
        </div>
        <Button className="flex items-center gap-1" onClick={handleAddNewCourse}>
          <PlusCircle className="h-4 w-4" />
          Add Course
        </Button>
      </div>

      <Tabs defaultValue="all" value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList>
          <TabsTrigger value="all">All Courses</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="regular">Regular</TabsTrigger>
        </TabsList>
        
        <TabsContent value={selectedTab} className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Instructor</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCourses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell className="font-medium">{course.title}</TableCell>
                  <TableCell>{course.instructor}</TableCell>
                  <TableCell>${course.price}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      course.featured ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                    }`}>
                      {course.featured ? "Featured" : "Regular"}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm" onClick={() => handleEditCourse(course)}>
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
                            <AlertDialogTitle>Delete Course</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete this course? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction 
                              className="bg-red-600 hover:bg-red-700"
                              onClick={() => handleDelete(course.id)}
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
        </TabsContent>
      </Tabs>

      {/* Edit Course Dialog */}
      <Dialog open={isEditing} onOpenChange={(open) => {
        if (!open) setIsEditing(false);
      }}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>{currentCourse?.id ? (coursesData.find(c => c.id === currentCourse.id) ? "Edit Course" : "Add New Course") : "Course"}</DialogTitle>
            <DialogDescription>
              Fill in the course details below.
            </DialogDescription>
          </DialogHeader>
          
          {currentCourse && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="title" className="text-sm font-medium">Course Title</label>
                <Input 
                  id="title" 
                  value={currentCourse.title} 
                  onChange={(e) => setCurrentCourse({...currentCourse, title: e.target.value})}
                />
              </div>
              
              <div className="grid gap-2">
                <label htmlFor="description" className="text-sm font-medium">Description</label>
                <Textarea 
                  id="description" 
                  value={currentCourse.description} 
                  onChange={(e) => setCurrentCourse({...currentCourse, description: e.target.value})}
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="instructor" className="text-sm font-medium">Instructor</label>
                  <Input 
                    id="instructor" 
                    value={currentCourse.instructor} 
                    onChange={(e) => setCurrentCourse({...currentCourse, instructor: e.target.value})}
                  />
                </div>
                
                <div className="grid gap-2">
                  <label htmlFor="price" className="text-sm font-medium">Price ($)</label>
                  <Input 
                    id="price" 
                    type="number"
                    value={currentCourse.price} 
                    onChange={(e) => setCurrentCourse({...currentCourse, price: parseFloat(e.target.value)})}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="duration" className="text-sm font-medium">Duration</label>
                  <Input 
                    id="duration" 
                    value={currentCourse.duration} 
                    onChange={(e) => setCurrentCourse({...currentCourse, duration: e.target.value})}
                    placeholder="e.g., 8 weeks"
                  />
                </div>
                
                <div className="grid gap-2">
                  <label htmlFor="level" className="text-sm font-medium">Level</label>
                  <select 
                    id="level"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={currentCourse.level}
                    onChange={(e) => setCurrentCourse({...currentCourse, level: e.target.value})}
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="featured" 
                  checked={currentCourse.featured}
                  onChange={(e) => setCurrentCourse({...currentCourse, featured: e.target.checked})}
                  className="h-4 w-4 rounded border-gray-300 text-academy-teal focus:ring-academy-teal"
                />
                <label htmlFor="featured" className="text-sm font-medium">Featured Course</label>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
            <Button onClick={handleSaveCourse}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminCoursesPage;
