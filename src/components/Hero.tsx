import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Pranay Lamture</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Frontend Developer | UI/UX Enthusiast
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a href="https://github.com/PranayL07" target="_blank" rel="noopener noreferrer" 
               className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/pranay-lamture-3036051b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"
               className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:lamturepranay7@gmailcom"
               className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <a href="/resume.pdf" 
             download
             className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
