
import React from 'react';

const projects = [
  {
    title: "AI Creative Suite",
    category: "Full Stack / AI",
    image: "https://picsum.photos/seed/ai/800/600",
    desc: "A powerful platform for generating creative assets using generative AI models."
  },
  {
    title: "EcoSphere Dashboard",
    category: "Data Visualization",
    image: "https://picsum.photos/seed/eco/800/600",
    desc: "Real-time monitoring dashboard for global sustainability metrics."
  },
  {
    title: "Lumina Marketplace",
    category: "E-Commerce",
    image: "https://picsum.photos/seed/lumina/800/600",
    desc: "A decentralized marketplace for high-end digital collectibles and NFTs."
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-zinc-950/30">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold font-heading mb-4">Selected Works</h2>
            <p className="text-gray-400 max-w-md">A collection of projects that push the boundaries of what's possible on the web.</p>
          </div>
          <button className="hidden md:block text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
            View All Projects →
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-6 glass aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        Case Study
                    </button>
                </div>
              </div>
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">{project.category}</p>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
