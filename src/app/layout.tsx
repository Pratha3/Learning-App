import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "HARONEX Learning Platform",
  description: "Learn from industry experts with HARONEX.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-white text-gray-900 min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="bg-gradient-to-r from-teal-500 to-indigo-600 text-white p-4 sticky top-0 z-10 shadow-lg">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <a href="/" className="mb-4 sm:mb-0">
              <Image
                src="/img/Part_1.png"
                alt="HARONEX Logo"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </a>
            <div className="flex space-x-6">
              <a href="/courses" className="hover:text-yellow-300">
                Courses
              </a>
              <a href="/about" className="hover:text-yellow-300">
                About
              </a>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="bg-white">
          <main className="flex-grow">{children}</main>
        </div>

        {/* Footer */}
        <footer className="bg-gray-50 text-gray-700 py-12 mt-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* About */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  About HARONEX
                </h3>
                <p className="text-sm text-gray-600">
                  HARONEX is a leading online learning platform dedicated to
                  empowering learners with high-quality education from industry
                  experts.
                </p>
              </div>

              {/* Explore */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  Explore
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/" className="text-gray-600 hover:text-indigo-600">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/courses"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/faq"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  Support
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/help"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  Get in Touch
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Email: support@haronex.com
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Phone: +91 123-456-7890
                </p>
                <p className="text-sm text-gray-600">
                  Address: 123 Learning Lane, Education City, USA
                </p>
              </div>
            </div>

            <div className="mt-8 text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} HARONEX. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
