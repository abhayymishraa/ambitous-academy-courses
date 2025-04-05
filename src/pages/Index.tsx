
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CourseCard from "@/components/CourseCard";
import BlogCard from "@/components/BlogCard";
import InstructorCard from "@/components/InstructorCard";
import { courses } from "@/data/courses";
import { blogPosts } from "@/data/blog";
import { instructors } from "@/data/instructors";

const Index = () => {
  const featuredCourses = courses.filter(course => course.featured);
  const featuredPosts = blogPosts.filter(post => post.featured);
  const featuredInstructors = instructors.filter(instructor => instructor.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Advance Your Legal Career with Expert-Led Courses
              </h1>
              <p className="text-lg mb-8">
                The Ambitious Academy offers specialized legal education taught by practicing attorneys and renowned professors. Develop practical skills and deep knowledge for today's legal challenges.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-academy-teal hover:bg-academy-teal/90 text-white px-8 py-6">
                  <Link to="/courses">Explore Courses</Link>
                </Button>
                <Button asChild variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white px-8 py-6">
                  <Link to="/about">About Us</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-academy-orange rounded-full opacity-30 blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-academy-teal rounded-full opacity-30 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Legal professionals in discussion" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold">Featured Courses</h2>
              <p className="text-gray-600 mt-2">Explore our most popular legal courses</p>
            </div>
            <Button asChild variant="outline" className="border-academy-teal text-academy-teal hover:bg-academy-teal/10">
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose The Ambitious Academy</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Our specialized approach to legal education sets us apart</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-academy-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-academy-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Practitioners</h3>
              <p className="text-gray-600">Learn from practicing attorneys and renowned professors with real-world experience.</p>
            </div>

            <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-academy-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-academy-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Practical Skills Focus</h3>
              <p className="text-gray-600">Curriculum designed to develop applicable skills for immediate use in legal practice.</p>
            </div>

            <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-academy-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-academy-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Learning</h3>
              <p className="text-gray-600">Self-paced courses that fit your schedule and professional demands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Instructors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Meet Our Expert Faculty</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Learn from experienced professionals and renowned academics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredInstructors.map((instructor) => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-academy-teal text-academy-teal hover:bg-academy-teal/10">
              <Link to="/about#faculty">View All Faculty</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold">Legal Insights Blog</h2>
              <p className="text-gray-600 mt-2">Expert analysis of current legal trends and developments</p>
            </div>
            <Button asChild variant="outline" className="border-academy-teal text-academy-teal hover:bg-academy-teal/10">
              <Link to="/blog">View All Articles</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-academy-teal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Advance Your Legal Career?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Join thousands of legal professionals who have enhanced their practice through The Ambitious Academy's specialized courses.</p>
            <Button className="bg-academy-teal hover:bg-academy-teal/90 text-white px-8 py-6">
              Enroll Today
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
