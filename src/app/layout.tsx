import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

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
            <Link href="/" className="mb-4 sm:mb-0">
              <Image
                src="/img/Part_1.png"
                alt="HARONEX Logo"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <div className="flex space-x-6">
              <Link href="/courses" className="hover:text-yellow-300">
                Courses
              </Link>
              <Link href="/about" className="hover:text-yellow-300">
                About
              </Link>
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
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/courses"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      FAQ
                    </Link>
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
                    <Link
                      href="/contact"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/help"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      Privacy Policy
                    </Link>
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
