import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
}

const projects: Project[] = [
  { 
    id: 1, 
    title: 'Project One', 
    thumbnail: '/Assets/my-project/Cuplikan layar 2025-03-13 234551.png',
    description: 'A brief description of project one' 
  },
  { 
    id: 2, 
    title: 'Project Two', 
    thumbnail: '/images/project2.jpg',
    description: 'A brief description of project two' 
},
{ 
    id: 3, 
    title: 'Project Three', 
    thumbnail: '/images/project3.jpg',
    description: 'A brief description of project three' 
},
];

export default function MyProject() {
return (
    <div className="p-5">
    <h1 className="text-3xl font-bold mb-5">My Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
        <div 
          key={project.id} 
          className="border rounded-lg overflow-hidden shadow-lg"
        >
            <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-48 object-cover"
            />
            <div className="p-4">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <button className="mt-3 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                View Details
            </button>
            </div>
        </div>
        ))}
    </div>
    </div>
);
}
