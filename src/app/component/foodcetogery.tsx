import React from "react";
import Image from "next/image";

const FoodCategory = () => {
  // Items array containing food details
  const items = [
    { id: 1, img: "/imgitem1.png", label: "Save 50% on Fast Food" },
    { id: 2, img: "/imgitem2.jpg", label: "Delicious Burgers" },
    { id: 3, img: "/imgitem3.jpg", label: "Healthy Salads" },
    { id: 4, img: "/imgitem4.jpg", label: "Desserts" },
  ];

  return (
    <section className=" text-white py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-orange-500">Choose</span> Food Item
        </h2>

        {/* Grid of food items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative group rounded-lg overflow-hidden shadow-lg"
            >
              {/* Food Image */}
              <Image
                src={item.img}
                alt={item.label}
                width={500}
                height={500}
                className="w-full h-[300px] object-cover transform transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay Label */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 px-4 py-2 rounded-md transition-opacity duration-300 group-hover:bg-opacity-90">
                <span className="text-orange-500 font-semibold">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategory;
