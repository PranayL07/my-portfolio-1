import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate Full Stack Developer with 5 years of experience in building web applications.
              I specialize in creating beautiful, functional, and user-friendly websites that help businesses
              grow and succeed online.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My journey in web development started when I built my first website in college. Since then,
              I've worked with various technologies and frameworks, always staying up-to-date with the
              latest industry trends.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-100 px-4 py-2 rounded-full">
                <span className="text-gray-700">🎓 B.S. in Electrical Engineering</span>
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-full">
                <span className="text-gray-700">💼 5 Years Experience</span>
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-full">
                <span className="text-gray-700">🌍 Remote Worker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
