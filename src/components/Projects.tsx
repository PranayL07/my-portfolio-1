import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'My Portfolio',
    description: 'A full-featured Portfolio built with React, JavaScript, HTMLand CSS.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
    tags: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/PranayL07/my-portfolio-1',
    liveUrl: 'https://portfolio-pranaylamture.netlify.app/',
  },
  {
    title: 'One Page Webdesign',
    description: 'During internship, as a task created One Page Website design purely made with CSS and HTML.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    tags: ['HTML', 'CSS', 'UI Design'],
    githubUrl: 'https://github.com/PranayL07/LetsGrowMore2',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Payment Gateway Integration',
    description: 'As a task during internship with The Sparks Foundation, created a Payment Gateway Integration for NGO.',
    image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&q=80',
    tags: ['HTML', 'CSS', 'API'],
    githubUrl: 'https://github.com/PranayL07/Web-Development-1',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Notes Taking Webapp',
    description: 'Notes Taking Webapp, a mini project while interning with CodeClause.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    tags: ['JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
            in web development and design.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
