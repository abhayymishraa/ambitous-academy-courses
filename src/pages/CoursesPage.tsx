
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const CoursesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [activeFilter, setActiveFilter] = useState<string | null>(categoryFilter);
  
  // Get unique categories
  const categories = Array.from(new Set(courses.map(course => course.category)));

  useEffect(() => {
    let result = courses;
    
    // Apply category filter if present
    if (activeFilter) {
      result = result.filter(course => 
        course.category.toLowerCase() === activeFilter.toLowerCase()
      );
    }
    
    // Apply search filter if present
    if (searchTerm) {
      result = result.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredCourses(result);
    
    // Update URL with filter
    if (activeFilter) {
      setSearchParams({ category: activeFilter });
    } else {
      setSearchParams({});
    }
  }, [activeFilter, searchTerm, setSearchParams]);

  const handleFilterClick = (category: string | null) => {
    setActiveFilter(category);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is applied automatically via the useEffect
  };

  return (
    <Layout>
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Explore Our Legal Courses</h1>
          <p className="text-xl max-w-3xl">
            Discover specialized courses designed to enhance your legal expertise, taught by experienced practitioners and respected academics.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          {/* Category Filters */}
          <div className="flex overflow-x-auto pb-2 space-x-2">
            <Button 
              variant={activeFilter === null ? "default" : "outline"}
              onClick={() => handleFilterClick(null)}
              className={activeFilter === null ? "bg-academy-teal" : ""}
            >
              All Courses
            </Button>
            
            {categories.map(category => (
              <Button 
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => handleFilterClick(category)}
                className={activeFilter === category ? "bg-academy-teal whitespace-nowrap" : "whitespace-nowrap"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Search */}
          <div className="w-full md:w-auto mt-4 md:mt-0">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full md:w-[300px]"
              />
            </form>
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold mb-2">No courses found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters or search term</p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setActiveFilter(null);
              }}
              variant="outline"
            >
              Clear all filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CoursesPage;
