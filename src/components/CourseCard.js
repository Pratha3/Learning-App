import Link from "next/link";

export default function CourseCard({ course }) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-indigo-500 transition-shadow">
            <img
                src={course.image}
                alt={course.title}
                className="w-full h-80 object-cover"
            />
            <div className="p-6">
                <h2 className="text-xl text-gray-900 font-semibold">{course.title}</h2>
                <p className="text-gray-600 mt-2">{course.description}</p>
            </div>
        </div>
    );
}
