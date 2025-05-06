import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-teal-500 to-indigo-600 text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4 text-yellow-300">
            Discover Your Next Course
          </h1>
          <p className="text-lg text-gray-200">
            Learn from industry experts and advance your career with HARONEX.
          </p>
        </div>
      </header>

      {/* Popular Courses Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Popular Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
