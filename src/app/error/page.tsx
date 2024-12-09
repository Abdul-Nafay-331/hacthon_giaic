'use client';
import Link from "next/link";
import Image from "next/image";

export default function ErrorPage() {
  return (
<div>

<div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
    <Image
      src= '/upper.png'
      alt="Banner Image"
      className="absolute inset-0 w-full h-full object-cover"
      
      layout="fill"
    />
    <div className="min-h-[350px] relative z-50 max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
      <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
        404
      </h2>
      <div className="flex items-center space-x-2 text-black">
        <a href="/" className="text-white">Home</a>
        <span className="text-white"> &gt; </span>
        <a href="/about" className="text-orange-500">page not found</a>
      </div>
    </div>
  </div>
<div className="min-h-screen flex flex-col bg-white">
      {/* Main Content Section */}
      <section className="flex-grow flex flex-col items-center justify-center bg-white py-12 px-6 text-center">
        <div className="max-w-md">
          <h2 className="text-[96px] font-bold text-[#FF9F0D] mb-4">404</h2>
          <p className="text-[32px] font-semibold mb-4">
            Oops! Something went wrong.
          </p>
          <p className="text-[18px] text-gray-600 mb-6">
            The page you're looking for cannot be found. We're working on
            fixing this!
          </p>
          <p className="text-[18px] text-gray-600 mb-6">
            While you're here, why not explore other sections of our website?
          </p>
          <Link href="/" className="bg-[#FF9F0D] text-white text-[18px] font-bold px-6 py-3 rounded shadow hover:bg-[#e8890b] transition duration-200">
            Go Back to Home
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-4 bg-gray-100 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Your Website. All rights reserved.
        </p>
      </footer>
      </div>
    </div>
  );
}
