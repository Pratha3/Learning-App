import Link from "next/link";
import CourseCard from "../../components/CourseCard";
import { courses } from "../../data/courses";

export default function Courses() {
  return (
    <section className="container-fluid mx-auto p-8 bg-white text-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-teal-500 text-center">
        All Courses
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link key={course.id} href={`/courses/${course.id}`} passHref>
            <div className="block transition-all hover:scale-105">
              <CourseCard course={course} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
