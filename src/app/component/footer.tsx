import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <p className="font-bold text-3xl mb-4">
            <span className="text-yellow-600">Still</span> Need Our Support?
          </p>
          <p className="mb-6">
            Don’t wait, make a smart & logical quote here. It’s pretty easy.
          </p>
        </div>

        {/* Subscription Section */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white py-2 px-4 rounded-l-lg focus:outline-none"
          />
          <button className="bg-white text-[#FF9F0D] py-2 px-4 rounded-r-lg hover:bg-gray-100">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Decorative Image */}
      <div className="mt-10 flex justify-center">
        <Image src="/top.png" alt="Top Decoration" width={200} height={50} />
      </div>

      {/* Bottom Sections */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* About Us */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <p className="text-gray-300 mb-4">
            Corporate clients and leisure travelers have been relying on
            Groundlink for dependable, safe, and professional chauffeured car
            services in major cities across the world.
          </p>
          <div className="flex items-center space-x-4">
            <Image
              src="/watch.png"
              alt="Operating Hours Icon"
              width={40}
              height={40}
            />
            <p>
              <strong>Opening Hours</strong>
              <br />
              Mon - Sat: 8:00 AM - 6:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/singin" className="text-gray-300 hover:text-yellow-600">
                About
              </a>
            </li>
            <li>
              <a href="/singin" className="text-gray-300 hover:text-yellow-600">
                News
              </a>
            </li>
            <li>
              <a href="/singin" className="text-gray-300 hover:text-yellow-600">
                Partner
              </a>
            </li>
            <li>
              <a href="/singin" className="text-gray-300 hover:text-yellow-600">
                Team
              </a>
            </li>
            <li>
              <a href="/singin" className="text-gray-300 hover:text-yellow-600">
                Menu
              </a>
            </li>
            <li>
              <a href="/singin" className="text-gray-300 hover:text-yellow-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/fqa" className="text-gray-300 hover:text-yellow-600">
                FAQ
              </a>
            </li>
            <li>
              <a href="/singin" className="text-gray-300 hover:text-yellow-600">
                Term & conditions
              </a>
            </li>
            <li>
              <a href="/singin" className="text-gray-300 hover:text-yellow-600">
                Reporting
              </a>
            </li>
            <li>
              <a href="/singin" className="text-gray-300 hover:text-yellow-600">
                Documentation
              </a>
            </li>
            <li>
              <a href="/singin" className="text-gray-300 hover:text-yellow-600">
                Support Policy
              </a>
            </li>
            <li>
              <a href="/singin" className="text-gray-300 hover:text-yellow-600">
                Privacy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Recent Post</h3>
          <div>
            <img src="/postcard.png" alt="" />
            <img src="/postcard.png" alt="" />
            <img src="/postcard.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex  justify-between bg-transparent bg-slate-500 p-2 pr-5 pl-14 ">
        <p>Copyright © 2022 by Ayeman. all Rights Reserved.</p>
        <img src="/scicon.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
