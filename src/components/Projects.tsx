
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      shortDescription: "Modern e-commerce solution with real-time inventory",
      description: "A modern e-commerce solution built with React and Node.js, featuring real-time inventory management and secure payment processing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2024",
      status: "Live Project"
    },
    {
      title: "Task Management App",
      shortDescription: "Collaborative task management with real-time updates",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2024",
      status: "In Development"
    },
    {
      title: "Portfolio Website",
      shortDescription: "Responsive portfolio with smooth animations",
      description: "A responsive portfolio website showcasing modern design principles with smooth animations and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2024",
      status: "Completed"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Each project demonstrates different aspects of modern web development, from e-commerce solutions to collaborative tools. Hover over the cards to see more details about each project.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="project-card group cursor-pointer"
            >
              {/* Image Section */}
              <div className="project-thumb">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Info Section */}
              <div className="project-infos">
                <div className="project-content">
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  
                  <div className="project-date">
                    {project.date}
                  </div>
                  
                  <div className="project-status">
                    {project.status}
                  </div>
                  
                  <p className="project-short-description">
                    {project.shortDescription}
                  </p>
                  
                  <p className="project-description">
                    {project.description}
                  </p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="tag"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="project-details">
                  <div className="project-links">
                    <a 
                      href={project.liveUrl}
                      className="project-link"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="project-link"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-card {
          width: 100%;
          height: 400px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          position: relative;
          background: white;
          transform: translateZ(0);
          transition: transform 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
        }

        .project-thumb {
          width: 100%;
          height: 300px;
          overflow: hidden;
          border-radius: 8px 8px 0 0;
        }

        .project-infos {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: white;
          padding: 20px 24px;
          transition: transform 0.4s cubic-bezier(0.17, 0.67, 0.5, 1.03) 0.15s;
          transform: translateY(150px);
        }

        .project-card:hover .project-infos {
          transform: translateY(0);
        }

        .project-content {
          height: calc(100% - 60px);
          overflow: hidden;
        }

        .project-title {
          font-size: 1rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #152536;
          margin: 10px 0 15px 0;
          line-height: 1.2;
        }

        .project-date {
          font-size: 0.85rem;
          text-transform: uppercase;
          color: rgba(21, 37, 54, 0.7);
          margin-bottom: 8px;
          font-weight: 500;
        }

        .project-status {
          display: inline-block;
          font-size: 0.85rem;
          text-transform: uppercase;
          color: rgba(21, 37, 54, 0.7);
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          opacity: 0;
          transition: opacity 0.5s cubic-bezier(0.17, 0.67, 0.5, 1.03) 0.25s;
          font-weight: 500;
        }

        .project-card:hover .project-status {
          opacity: 1;
        }

        .project-short-description {
          font-size: 0.9rem;
          line-height: 1.6;
          color: rgba(21, 37, 54, 0.7);
          margin-bottom: 15px;
          opacity: 1;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-short-description {
          opacity: 0;
        }

        .project-description {
          font-size: 0.9rem;
          line-height: 1.6;
          color: rgba(21, 37, 54, 0.7);
          margin-bottom: 15px;
          opacity: 0;
          transition: opacity 0.5s cubic-bezier(0.17, 0.67, 0.5, 1.03) 0.25s;
        }

        .project-card:hover .project-description {
          opacity: 1;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 15px;
          opacity: 0;
          transition: opacity 0.5s cubic-bezier(0.17, 0.67, 0.5, 1.03) 0.3s;
        }

        .project-card:hover .project-tags {
          opacity: 1;
        }

        .tag {
          padding: 4px 12px;
          background: #F17C58;
          color: white;
          font-size: 0.75rem;
          border-radius: 12px;
          font-weight: 500;
        }

        .project-details {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px 24px;
          opacity: 0;
          transition: opacity 0.5s cubic-bezier(0.17, 0.67, 0.5, 1.03) 0.25s;
        }

        .project-card:hover .project-details {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 20px;
        }

        .project-link {
          display: flex;
          items-center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #4e958b;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .project-link:hover {
          color: #F17C58;
        }
      `}</style>
    </section>
  );
};

export default Projects;
