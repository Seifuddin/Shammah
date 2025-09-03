"use client";
import { Target, Eye, Quote } from "lucide-react";

export default function CorePrinciples() {
  return (
    <div className="bg-whit py-20 mx-auto px-6 lg:px-12 bg-gray-50">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                    Our Mission, Vision & Motto<span className="text-blue-900"></span>
                  </h1>
                  {/* Mission <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-5">
            The Purpose & Goals of establishing Lapsa Web & Graphics.
          </p> */}
      <div className=" max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        {/* Mission */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 flex flex-col">
          <div className="flex justify-center mb-4">
            <Target className="w-8 h-8 text-red-700" />
          </div>
          <h3 className="font-bold text-red-700 mb-2">Our Mission</h3>
          <p className="text-blue-900">
            To empower businesses and individuals by crafting innovative digital experiences and impactful designs that inspire action, build trust, and ignite growth.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 flex flex-col">
          <div className="flex justify-center mb-4">
            <Eye className="w-8 h-8 text-red-700" />
          </div>
          <h3 className="font-bold text-red-700 mb-2">Our Vision</h3>
          <p className="text-blue-900">
            To be a global leader in digital design and development—where creativity meets functionality, and every pixel tells a story that connects people to brands.
          </p>
        </div>

        {/* Motto */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 flex flex-col">
          <div className="flex justify-center mb-4">
            <Quote className="w-8 h-8 text-red-700" />
          </div>
          <h3 className="font-bold text-red-700 mb-2">Our Motto</h3>
          <p className="text-blue-900 italic">
            “Elevate Your Brand Online...”
          </p>
          <p className="text-blue-900">
             We Design Your Digital Future by Elevating Your Brand Online.
          </p>
        </div>
      </div>
    </div>
  );
}