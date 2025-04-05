
import Layout from "@/components/Layout";
import InstructorCard from "@/components/InstructorCard";
import { instructors } from "@/data/instructors";

const AboutPage = () => {
  return (
    <Layout>
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">About The Ambitious Academy</h1>
          <p className="text-xl max-w-3xl">
            Building the next generation of legal leaders through specialized education and practical skills development.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                The Ambitious Academy was founded with a clear mission: to bridge the gap between traditional legal education and the practical skills required in today's rapidly evolving legal landscape.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that legal education should be accessible, practical, and directly applicable to real-world challenges. Our specialized courses are designed to complement traditional legal education and provide practicing attorneys with targeted skills development opportunities.
              </p>
              <p className="text-gray-600">
                Through a combination of expert instruction, practical exercises, and cutting-edge content, we're building a community of legal professionals equipped to navigate complex legal challenges and advance their careers.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Legal professionals in discussion" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg bg-academy-teal opacity-20 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-lg bg-academy-orange opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-academy-red/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-academy-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We are committed to maintaining the highest standards in our course content, instruction, and student experience. We continuously refine our offerings to ensure they reflect current legal developments and best practices.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-academy-teal/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-academy-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
              <p className="text-gray-600">
                We believe legal education should be accessible to all who seek it. We strive to create an inclusive learning environment that welcomes diverse perspectives and experiences, enriching the educational experience for everyone.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-academy-orange/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-academy-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                The legal profession is evolving rapidly, and legal education must evolve alongside it. We embrace innovative teaching methods, emerging legal technologies, and fresh perspectives to prepare our students for the future of legal practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Expert Faculty</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructors.map((instructor) => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Students Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-academy-orange fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The Corporate Law Masterclass completely transformed my approach to M&A work. The instructor's real-world examples and practical advice were invaluable. I've already implemented several strategies from the course in my practice."
              </p>
              <div>
                <p className="font-semibold">Michael T.</p>
                <p className="text-sm text-gray-500">Corporate Attorney</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-academy-orange fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "As a new attorney, I was struggling to bridge the gap between law school and practice. The Constitutional Law Fundamentals course provided the practical context I needed and helped me develop confidence in my analytical skills."
              </p>
              <div>
                <p className="font-semibold">Sarah K.</p>
                <p className="text-sm text-gray-500">Associate Attorney</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-academy-orange fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The Legal Tech course opened my eyes to tools and technologies I hadn't considered for my practice. I've since implemented several solutions that have dramatically improved our efficiency and client service."
              </p>
              <div>
                <p className="font-semibold">David R.</p>
                <p className="text-sm text-gray-500">Managing Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-academy-teal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Advance Your Legal Career?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of legal professionals who have enhanced their skills and knowledge through The Ambitious Academy's specialized courses.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/courses" className="inline-block bg-academy-teal hover:bg-academy-teal/90 text-white font-medium py-3 px-6 rounded-md">
              Browse Courses
            </a>
            <a href="/contact" className="inline-block bg-white text-academy-teal border border-academy-teal font-medium py-3 px-6 rounded-md">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
