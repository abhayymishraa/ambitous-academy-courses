
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Clock, Users, Award, Check } from "lucide-react";
import Layout from "@/components/Layout";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

const CourseDetailPage = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);
  
  // Get related courses (same category, excluding current course)
  const relatedCourses = courses
    .filter(c => c.id !== id && c.category === course?.category)
    .slice(0, 3);
  
  if (!course) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
          <p className="mb-8">Sorry, the course you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/courses">Browse All Courses</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Course Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-2/3 pr-0 lg:pr-12">
              <Link to={`/courses?category=${encodeURIComponent(course.category)}`} className="inline-block mb-3">
                <span className="bg-academy-teal/20 text-academy-teal/90 py-1 px-3 rounded-full text-sm">
                  {course.category}
                </span>
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              
              <p className="text-lg text-gray-300 mb-6">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-academy-orange text-academy-orange" />
                  <span className="ml-1 font-medium">{course.rating}</span>
                  <span className="ml-1 text-gray-400">({course.students} students)</span>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="ml-2">{course.duration}</span>
                </div>
                
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-gray-400" />
                  <span className="ml-2">{course.level}</span>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <p className="text-sm text-gray-400">Instructor</p>
                  <p className="font-medium">{course.instructor}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400">Last Updated</p>
                  <p className="font-medium">March 2025</p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
              <div className="bg-white rounded-lg shadow-lg p-6 text-gray-900">
                <div className="aspect-video w-full overflow-hidden rounded-md mb-4">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="mb-4">
                  {course.discount ? (
                    <div className="flex items-center">
                      <span className="text-3xl font-bold">${course.discount}</span>
                      <span className="ml-2 text-gray-500 line-through">${course.price}</span>
                    </div>
                  ) : (
                    <span className="text-3xl font-bold">${course.price}</span>
                  )}
                </div>
                
                <Button className="w-full bg-academy-teal hover:bg-academy-teal/90 text-white mb-4">
                  Enroll Now
                </Button>
                
                <Button variant="outline" className="w-full mb-6">
                  Add to Wishlist
                </Button>
                
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-3">This course includes:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-academy-teal mr-2" />
                      <span>{course.duration} of on-demand video</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-academy-teal mr-2" />
                      <span>Comprehensive course materials</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-academy-teal mr-2" />
                      <span>Practice exercises and quizzes</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-academy-teal mr-2" />
                      <span>Certificate of completion</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-academy-teal mr-2" />
                      <span>Lifetime access</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="curriculum">
          <TabsList className="mb-8">
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="curriculum" className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">Course Curriculum</h2>
                <p className="text-gray-600">{course.modules.length} modules • {course.modules.reduce((sum, module) => sum + module.lessons.length, 0)} lessons</p>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-500 mr-2" />
                <span>{course.duration}</span>
              </div>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {course.modules.map((module, index) => (
                <AccordionItem value={`module-${index}`} key={index}>
                  <AccordionTrigger className="hover:bg-gray-50 px-4">
                    <div className="flex-1 text-left">
                      <div className="font-medium">{module.title}</div>
                      <div className="text-sm text-gray-500">{module.lessons.length} lessons • {module.duration}</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="divide-y">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className="px-4 py-3 flex items-center">
                          <span className="mr-4 flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-sm">
                            {lessonIndex + 1}
                          </span>
                          <div className="flex-1">
                            <p className="font-medium">{lesson}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          
          <TabsContent value="overview">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-6">About This Course</h2>
              <p className="mb-4">{course.description}</p>
              <h3 className="text-xl font-semibold mt-8 mb-4">What You'll Learn</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {course.modules.flatMap((module) => 
                  module.lessons.slice(0, 2).map((lesson, i) => (
                    <li key={i} className="flex items-start mb-3">
                      <Check className="h-5 w-5 text-academy-teal mr-2 mt-0.5" />
                      <span>{lesson}</span>
                    </li>
                  ))
                )}
              </ul>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Who This Course is For</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-academy-teal mr-2 mt-0.5" />
                  <span>Law students seeking practical knowledge beyond traditional law school curriculum</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-academy-teal mr-2 mt-0.5" />
                  <span>Practicing attorneys looking to expand their expertise or transition to a new practice area</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-academy-teal mr-2 mt-0.5" />
                  <span>Legal professionals seeking to stay current with evolving legal standards and practices</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Prerequisites</h3>
              <p>
                This {course.level.toLowerCase()} level course is designed for {course.level === "Beginner" ? "those new to" : course.level === "Intermediate" ? "those with some experience in" : "experienced professionals in"} {course.category.toLowerCase()}. {course.level !== "Beginner" && "Prior experience or coursework in basic legal principles is recommended."}
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="instructor">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt={course.instructor} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-3/4">
                <h2 className="text-2xl font-bold mb-2">{course.instructor}</h2>
                <p className="text-academy-teal text-lg mb-4">Expert in {course.category}</p>
                
                <div className="prose max-w-none">
                  <p className="mb-4">
                    A distinguished expert in {course.category}, {course.instructor.split(' ')[1]} brings decades of practical experience and academic expertise to The Ambitious Academy. With a commitment to practical, applicable legal education, they have developed this course to bridge the gap between theoretical knowledge and real-world application.
                  </p>
                  <p>
                    Their teaching philosophy emphasizes critical thinking, ethical practice, and the development of practical skills that can be immediately applied in professional settings. Students consistently praise their ability to explain complex concepts clearly and their dedication to student success.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews">
            <div>
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-5xl font-bold mb-2">{course.rating}</div>
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-6 w-6 ${i < Math.floor(course.rating) ? "fill-academy-orange text-academy-orange" : "text-gray-300"}`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">{course.students} students</p>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="font-semibold text-xl mb-4">Student Feedback</h3>
                  
                  <div className="space-y-6">
                    <div className="border-b pb-6">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold mr-3">
                            JD
                          </div>
                          <div>
                            <p className="font-medium">John Doe</p>
                            <p className="text-gray-500 text-sm">2 weeks ago</p>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-5 w-5 ${i < 5 ? "fill-academy-orange text-academy-orange" : "text-gray-300"}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">
                        This course exceeded my expectations. The instructor's explanations were clear and the practical examples really helped me apply the concepts in my work. Highly recommended for anyone looking to develop expertise in this area.
                      </p>
                    </div>
                    
                    <div className="border-b pb-6">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold mr-3">
                            MS
                          </div>
                          <div>
                            <p className="font-medium">Maria Smith</p>
                            <p className="text-gray-500 text-sm">1 month ago</p>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-5 w-5 ${i < 4 ? "fill-academy-orange text-academy-orange" : "text-gray-300"}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">
                        As a practicing attorney for 10+ years, I was looking to specialize further in this area. The course materials were comprehensive and up-to-date with current legal developments. The instructor's real-world experience added tremendous value.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Related Courses</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CourseDetailPage;
