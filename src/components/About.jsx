"use client";

export default function AboutUs() {
  return (
    <section
      className="relative bg-cover bg-center bg--50 bg-no-repeat py-6 text-gray-800">
      {/* style={{
        backgroundImage: `url('/images/pexels-pixabay-268533.jpg')`,
      }}
        */}
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-white/60 to-white/60 z-0 opacity-4"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Intro */}
        <div className="text-center py-6 px-4 max-w-6xl mx-auto">
                  <h1 className="max-w-7xl text-3xl md:text-3xl font-extrabold text-blue-500 mb-5">
                    Welcome to Shammah <span className="text-orange-500"></span>
                  </h1>
                  <p className="italic mt-4 text-lg font-semibold text-blue-900">
                    Join us every Sunday at 10 AM for worship and fellowship.
                  </p>
        </div>
        
        {/* Image + Who We Are */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 pt-3 pb-16 items-center">
          <img
            src="/images/pexels-pixabay-268533.jpg"
            alt="Team Collaboration"
            className="w-full rounded-md shadow-lg object-cover"
          />
          <div>
            <h1 className="font-bold mb-4 text-blue-500">Events</h1>
        <p className="text-blue-900 italic">Join us at our upcoming church events and gatherings.</p>
            <h2 className="text-blue-500 mb-4 font-semibold mt-5">Church Events</h2>
      <ul className="list-disc pl-6 text-blue-900">
        <li>Sunday Worship - Every Sunday at 10 AM</li>
        <li>Youth Fellowship - Fridays at 6 PM</li>
        <li>Community Outreach - First Saturday of the Month</li>
      </ul>

      <h2 className="text-blue-500 mb-4 font-semibold mt-5">Other Events</h2>
      <ul className="list-disc pl-6 text-blue-900">
        <li>Door to Door Service - Every Wednesday at 2 PM</li>
        <li>Morning Devotions - Everyday at 6 AM to 7 AM</li>
      </ul>
          </div>
        </div>

        {/* Core Principles <CorePrinciples /> (Mission, Vision, Motto) */}
        
      </div>
    </section>
  );
}

