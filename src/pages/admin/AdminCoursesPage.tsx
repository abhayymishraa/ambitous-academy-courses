import { useState } from "react";
import { 
  Table, TableHeader, TableRow, TableHead, TableBody, TableCell 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Edit, Trash2 } from "lucide-react";
import { courses } from "@/data/courses";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

// Define our internal Course type for admin management
interface AdminCourse {
  id: string;
  title: string;
  description: string;
  instructor: string;
  price: number;
  duration: string;
  level: string;
  image: string;
  featured: boolean;
  // Add optional fields that might be present in the imported courses
  category?: string;
  rating?: number;
  students?: number;
  modules?: Array<{
    title: string;
    lessons: Array<{
      title: string;
      duration: string;
    }>;
  }>;
}

const AdminCoursesPage = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  
  // Convert imported courses to our internal type with guaranteed featured property
  // and ensure modules match our expected structure
  const initialCourses: AdminCourse[] = courses.map(course => {
    // Create a properly typed version of each course
    const adminCourse: AdminCourse = {
      ...course,
      featured: course.featured || false,
    };
    return adminCourse;
  });
  
  const [coursesData, setCoursesData] = useState<AdminCourse[]>(initialCourses);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCourse, setCurrentCourse] = useState<AdminCourse | null>(null);
  const { toast } = useToast();

  const filteredCourses = selectedTab === "all" 
    ? coursesData 
    : selectedTab === "featured" 
      ? coursesData.filter(c => c.featured) 
      : coursesData.filter(c => !c.featured);

  const handleSaveCourse = () => {
    if (!currentCourse) return;
    
    setCoursesData(prev => {
      const index = prev.findIndex(c => c.id === currentCourse.id);
      const newCourses = [...prev];
      if (index !== -1) newCourses[index] = currentCourse;
      return newCourses;
    });
  };

  const handleEditCourse = (course: AdminCourse) => {
    setCurrentCourse({...course});
    setIsEditing(true);
  };

  const closeDialog = () => {
    setIsEditing(false);
    setCurrentCourse(null);
  };

  const handleFieldChange = (field: string, value: string | number | boolean) => {
    if (!currentCourse) return;
    setCurrentCourse({
      ...currentCourse,
      [field]: value
    });
  };

  const handleDelete = (id: string) => {
    setCoursesData(prev => prev.filter(course => course.id !== id));
    toast({
      title: "Course deleted",
      description: "The course has been permanently removed."
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Courses</h1>
          <p className="text-muted-foreground">Manage and organize your courses</p>
        </div>
        <Button className="flex items-center gap-2">
          <PlusCircle className="h-4 w-4" /> Add Course
        </Button>
      </div>
      
      <Tabs defaultValue="all" value={selectedTab} onValueChange={setSelectedTab}>
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="not-featured">Not Featured</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="all" className="mt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Featured</TableHead>
                <TableHead className="min-w-[150px]">Course</TableHead>
                <TableHead>Instructor</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCourses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>
                    {course.featured ? (
                      <Badge className="bg-green-100 text-green-800 font-medium">Featured</Badge>
                    ) : (
                      <Badge variant="outline" className="font-normal">No</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="h-10 w-10 rounded-md object-cover" 
                      />
                      <span className="font-medium">{course.title}</span>
                    </div>
                  </TableCell>
                  <TableCell>{course.instructor}</TableCell>
                  <TableCell>${course.price}</TableCell>
                  <TableCell>{course.level}</TableCell>
                  <TableCell>{course.duration}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleEditCourse(course)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleDelete(course.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        
        <TabsContent value="featured" className="mt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[150px]">Course</TableHead>
                <TableHead>Instructor</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCourses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="h-10 w-10 rounded-md object-cover" 
                      />
                      <span className="font-medium">{course.title}</span>
                    </div>
                  </TableCell>
                  <TableCell>{course.instructor}</TableCell>
                  <TableCell>${course.price}</TableCell>
                  <TableCell>{course.level}</TableCell>
                  <TableCell>{course.duration}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleEditCourse(course)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleDelete(course.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        
        <TabsContent value="not-featured" className="mt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[150px]">Course</TableHead>
                <TableHead>Instructor</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCourses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="h-10 w-10 rounded-md object-cover" 
                      />
                      <span className="font-medium">{course.title}</span>
                    </div>
                  </TableCell>
                  <TableCell>{course.instructor}</TableCell>
                  <TableCell>${course.price}</TableCell>
                  <TableCell>{course.level}</TableCell>
                  <TableCell>{course.duration}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleEditCourse(course)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleDelete(course.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
      
      <Dialog open={isEditing} onOpenChange={(open) => !open && closeDialog()}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Course</DialogTitle>
            <DialogDescription>
              Make changes to the course information here.
            </DialogDescription>
          </DialogHeader>
          
          {currentCourse && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input 
                    id="title" 
                    value={currentCourse.title} 
                    onChange={(e) => handleFieldChange('title', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instructor">Instructor</Label>
                  <Input 
                    id="instructor" 
                    value={currentCourse.instructor} 
                    onChange={(e) => handleFieldChange('instructor', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input 
                    id="price" 
                    type="number" 
                    value={currentCourse.price.toString()} 
                    onChange={(e) => handleFieldChange('price', parseFloat(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input 
                    id="duration" 
                    value={currentCourse.duration} 
                    onChange={(e) => handleFieldChange('duration', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="level">Level</Label>
                  <Input 
                    id="level" 
                    value={currentCourse.level} 
                    onChange={(e) => handleFieldChange('level', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image">Image URL</Label>
                  <Input 
                    id="image" 
                    value={currentCourse.image} 
                    onChange={(e) => handleFieldChange('image', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  value={currentCourse.description} 
                  onChange={(e) => handleFieldChange('description', e.target.value)}
                  rows={4}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch 
                  id="featured" 
                  checked={currentCourse.featured} 
                  onCheckedChange={(checked) => handleFieldChange('featured', checked)}
                />
                <Label htmlFor="featured">Featured Course</Label>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={closeDialog}>
              Cancel
            </Button>
            <Button onClick={() => {
              handleSaveCourse();
              closeDialog();
              toast({
                title: "Course updated",
                description: "Your changes have been saved successfully."
              });
            }}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminCoursesPage;
