import Link from "next/link";
import Image from "next/image";
import { courses } from "../../../data/courses";
import { Metadata } from "next";

// Explicitly define the PageProps type
interface PageProps {
  params: {
    id: string;
  };
}

// Optional: Generate dynamic metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const course = courses.find((c) => c.id === Number(params.id));
  return {
    title: course ? course.title : "Course Not Found | HARONEX",
    description: course
      ? course.description
      : "Course not found on HARONEX platform",
  };
}

export default async function CourseDetails({ params }: PageProps) {
  const course = courses.find((c) => c.id === Number(params.id));

  if (!course) {
    return (
      <div className="container mx-auto py-8 text-white bg-gray-900 min-h-screen">
        <h2 className="text-2xl font-bold">Course not found</h2>
        <Link href="/courses" className="text-teal-400 underline mt-4 block">
          Go back to courses
        </Link>
      </div>
    );
  }

  return (
    <div className="container-fluid mx-auto p-8 bg-white text-gray-900 min-h-screen">
      <Link
        href="/courses"
        className="mb-6 text-teal-500 hover:underline flex items-center"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Courses
      </Link>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-bold mb-4 text-teal-500">
            {course.title}
          </h1>
          <p className="text-gray-700 mb-4">{course.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 font-bold">{course.rating}</span>
            <span className="text-gray-500 text-sm ml-2">
              ({course.reviews} reviews)
            </span>
          </div>
          <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>
          <p className="text-gray-600 mb-2">Duration: {course.duration}</p>
          <p className="text-gray-600 mb-4">Level: {course.level}</p>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 sticky top-24">
            <Image
              src={course.image}
              alt={course.title}
              width={400}
              height={192}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <p className="text-2xl font-bold mb-4 text-gray-900">
              ${course.price.toFixed(2)}
            </p>
            <button className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition-all duration-300">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
