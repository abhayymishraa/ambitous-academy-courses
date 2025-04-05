
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link to={`/courses/${course.id}`}>
      <Card className="h-full overflow-hidden card-hover">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-2">
            <Badge variant="outline" className="bg-academy-teal/10 text-academy-teal">
              {course.category}
            </Badge>
            <Badge variant="outline" className="bg-gray-100">
              {course.level}
            </Badge>
          </div>
          <h3 className="text-lg font-semibold line-clamp-2 h-14">{course.title}</h3>
          <p className="text-sm text-gray-500 mb-2">By {course.instructor}</p>
          <p className="text-sm text-gray-600 line-clamp-3 mb-4 h-18">{course.description}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center border-t">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-academy-orange text-academy-orange" />
            <span className="text-sm font-medium ml-1">{course.rating}</span>
            <span className="text-xs text-gray-500 ml-1">({course.students} students)</span>
          </div>
          <div className="font-bold">
            {course.discount ? (
              <div className="flex flex-col items-end">
                <span className="text-academy-red line-through text-sm">${course.price}</span>
                <span>${course.discount}</span>
              </div>
            ) : (
              <span>${course.price}</span>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CourseCard;
