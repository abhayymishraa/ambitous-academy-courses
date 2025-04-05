
import { useState } from "react";
import { 
  Table, TableHeader, TableRow, TableHead, TableBody, TableCell 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, 
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger 
} from "@/components/ui/alert-dialog";
import { PlusCircle, Edit, Trash2, UserPlus } from "lucide-react";
import { instructors } from "@/data/instructors";

const AdminInstructorsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Instructors</h1>
          <p className="text-gray-500 mt-1">Manage your teaching staff.</p>
        </div>
        <Button className="flex items-center gap-1">
          <UserPlus className="h-4 w-4" />
          Add Instructor
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center space-x-4">
              <img 
                src={instructor.image} 
                alt={instructor.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium">{instructor.name}</h3>
                <p className="text-sm text-gray-500">{instructor.title}</p>
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {instructor.specializations.map((spec) => (
                <span 
                  key={spec} 
                  className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                >
                  {spec}
                </span>
              ))}
            </div>
            
            <div className="mt-4 text-sm text-gray-600 line-clamp-2">
              {instructor.bio}
            </div>
            
            <div className="mt-4 flex justify-end gap-2">
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
                    <AlertDialogTitle>Remove Instructor</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to remove this instructor? This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-600 hover:bg-red-700">Remove</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminInstructorsPage;
