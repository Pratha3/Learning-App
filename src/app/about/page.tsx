export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Main Content */}
      <section className="container mx-auto py-12 px-4 flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-center text-teal-500">
          About HARONEX
        </h1>

        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 mb-6 leading-relaxed">
            HARONEX is a premier online learning platform committed to
            delivering top-tier educational experiences to learners across the
            globe. Founded in 2018, our mission is to empower individuals by
            equipping them with the skills, knowledge, and confidence needed to
            excel in their professional careers and personal development.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            At HARONEX, we offer an extensive catalog of over 1,000 courses,
            meticulously curated and taught by industry-leading experts. Our
            diverse course offerings span in-demand fields such as software
            development, data science, artificial intelligence, business
            analytics, graphic design, and more. Each course is designed to be
            engaging, practical, and accessible, catering to learners of all
            levels—from beginners to advanced professionals.
          </p>
        </div>

        {/* Vision and Mission Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-teal-500">
              Our Vision
            </h2>
            <p className="text-gray-700">
              To create a world where education is universally accessible,
              empowering every individual to achieve their full potential
              through lifelong learning.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-teal-500">
              Our Mission
            </h2>
            <p className="text-gray-700">
              To deliver high-quality, practical, and affordable education that
              equips learners with the tools they need to succeed in a rapidly
              evolving world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
