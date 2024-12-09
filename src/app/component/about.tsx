import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

function AboutUs() {
  return (
    <section className="bg-black px-6 md:px-[135px] flex flex-col md:flex-row justify-between items-center py-[50px]">
      {/* Text Section */}
      <div className="text-white w-full md:w-[50%]">
        <h1 className="text-[24px] md:text-[32px] font-normal text-[#FF9F0D] font-greatVibes">
          About Us
        </h1>
        <h2 className="text-[28px] md:text-[50px] font-bold mt-4">
          <span className="text-[#FF9F0D]">We</span> Create the Best Foody
          Product
        </h2>
        <p className="text-[14px] md:text-[16px] font-normal mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla. Urna, elit augue
          urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed
          vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <ul className="mt-8 space-y-6">
          <li className="flex items-start">
            <FaCheck className="text-[#FF9F0D] mr-4 mt-1" />
            Lacus nisi, et ac dapibus sit eu velit in consequat.
          </li>
          <li className="flex items-start">
            <FaCheck className="text-[#FF9F0D] mr-4 mt-1" />
            Quisque diam pellentesque bibendum non dui volutpat fringilla.
          </li>
          <li className="flex items-start">
            <FaCheck className="text-[#FF9F0D] mr-4 mt-1" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
        </ul>
        <button className="bg-[#FF9F0D] text-white py-2 px-6 md:py-4 md:px-10 rounded-full mt-8 hover:bg-yellow-800">
          See More
        </button>
      </div>

      {/* Image Section */}
      <div className="mt-10 md:mt-0 w-full md:w-[50%] flex flex-col items-center">
        <Image
          src="/ab1.png"
          alt="Food Preparation"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
        />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <Image
            src="/ab2.png"
            alt="Chef at Work"
            width={200}
            height={150}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/abut.png"
            alt="Delicious Dish"
            width={200}
            height={150}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
