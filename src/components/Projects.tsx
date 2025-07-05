
import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

// Main categories for the filter tabs
const categoryOptions = [
  { label: "All", value: "All" },
  { label: "Automation", value: "Automation" },
  { label: "Data Science", value: "Data Science" },
  { label: "Web Scraping", value: "Web Scraping" },
  { label: "Machine Learning", value: "Machine Learning" },
];

const Projects = () => {
  const projects = [
    {
      title: "Upwork Job Alerts — Every 10 Minutes!",
      shortDescription: "Automated job monitoring system with AI-powered alerts",
      description: "Built an intelligent automation that monitors Upwork for relevant job postings every 10 minutes. Uses AI to analyze, summarize, and filter opportunities, then sends personalized job alerts via Telegram with detailed match scores and recommendations.",
      image: "/lovable-uploads/19dd1880-85df-499e-bfb8-67aa4d351d24.png",
      tags: ["n8n", "Upwork API", "Google Gemini", "Telegram Bot", "AI Agent"],
      liveUrl: "#",
      githubUrl: "#",
      date: "July 2024",
      status: "Live Project",
      category: "Automation",
    },
    {
      title: "Football Match Scraper",
      shortDescription: "Scalable scraper collecting data from 20,000+ football matches",
      description: "Developed a scalable scraper to collect data from over 20,000 football matches. Cleaned and structured the dataset for use in predictive models and data visualization.",
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop",
      tags: ["Python", "BeautifulSoup", "Requests", "Pandas"],
      liveUrl: "#",
      githubUrl: "#",
      date: "April 2024",
      status: "Completed",
      category: "Web Scraping",
    },
    {
      title: "Finance Tracker & AI Assistant",
      shortDescription: "Automated personal finance tracker with AI-powered insights",
      description: "Built an automated personal finance tracker that syncs expenses and incomes to Notion via Telegram. Integrated an AI agent to answer natural language queries about financial summaries.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      tags: ["Telegram Bot", "n8n", "Notion API", "OpenAI API"],
      liveUrl: "#",
      githubUrl: "#",
      date: "May 2024",
      status: "Live Project",
      category: "Automation",
    },
    {
      title: "Daily Email Summary Bot",
      shortDescription: "Automated email summarization with daily Telegram notifications",
      description: "Created an automation that summarizes important unread emails and sends a Telegram message daily at 7:00 AM. Helps prioritize email workload using custom filters and NLP.",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop",
      tags: ["n8n", "Gmail API", "Google Cloud Functions", "Telegram"],
      liveUrl: "#",
      githubUrl: "#",
      date: "March 2024",
      status: "Live Project",
      category: "Automation",
    },
    {
      title: "Sign Language Recognition",
      shortDescription: "Computer vision model for American Sign Language recognition",
      description: "Developed a computer vision model to recognize American Sign Language gestures using webcam input. Integrated with web and mobile UIs to demonstrate accessibility use cases.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      tags: ["Python", "OpenCV", "MediaPipe", "TensorFlow"],
      liveUrl: "#",
      githubUrl: "#",
      date: "June 2024",
      status: "Completed",
      category: "Machine Learning",
    },
    {
      title: "Gold Price Prediction Model",
      shortDescription: "ML model forecasting gold prices using economic indicators",
      description: "Built a predictive machine learning model to forecast gold prices using historical data and macroeconomic indicators. Achieved high accuracy through feature engineering and model tuning.",
      image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&h=400&fit=crop",
      tags: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
      liveUrl: "#",
      githubUrl: "#",
      date: "February 2024",
      status: "Completed",
      category: "Data Science",
    },
  ];

  // Only keep category filter
  const [categoryFilter, setCategoryFilter] = useState("All");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live Project":
        return "bg-green-100 text-green-800";
      case "In Development":
        return "bg-yellow-100 text-yellow-800";
      case "Completed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Filter only by category
  const filteredProjects = projects.filter(
    (proj) => categoryFilter === "All" || proj.category === categoryFilter
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 mb-4">
            Take a look at my work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
          </p>
        </div>
        {/* Category Tabs Row */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full bg-white border border-[#F17C58]/30 shadow-sm overflow-hidden">
            {categoryOptions.map((opt) => {
              const isActive = categoryFilter === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setCategoryFilter(opt.value)}
                  className={`
                    px-6
                    py-2
                    font-semibold
                    text-sm
                    outline-none
                    transition-all
                    duration-200
                    rounded-full
                    ${isActive
                      ? "bg-[#F17C58] text-white shadow-md"
                      : "bg-white text-[#F17C58] hover:bg-[#f17c58]/10 hover:text-[#F17C58]"}
                    border-none
                    focus-visible:ring-2 focus-visible:ring-[#F17C58] focus-visible:ring-offset-2
                  `}
                  style={{
                    borderRight:
                      opt.value !== categoryOptions[categoryOptions.length - 1].value
                        ? "1px solid #f17c5822"
                        : undefined,
                  }}
                >
                  {opt.label.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#F17C58] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 font-medium">
                    {project.date}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#F17C58]/10 text-[#F17C58] text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-100">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#F17C58] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#F17C58] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-500 text-lg mt-12">
            No projects found for this filter.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
