
import { Card, CardContent } from "@/components/ui/card";
import { Instructor } from "@/data/instructors";

interface InstructorCardProps {
  instructor: Instructor;
}

const InstructorCard = ({ instructor }: InstructorCardProps) => {
  return (
    <Card className="h-full overflow-hidden card-hover">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={instructor.image}
          alt={instructor.name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{instructor.name}</h3>
        <p className="text-sm text-academy-teal mb-2">{instructor.title}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {instructor.specializations.map((spec) => (
            <span 
              key={spec} 
              className="text-xs bg-gray-100 px-2 py-1 rounded-full"
            >
              {spec}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-600 line-clamp-4">{instructor.bio}</p>
      </CardContent>
    </Card>
  );
};

export default InstructorCard;
