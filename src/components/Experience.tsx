
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Self-Employed, Brisbane",
      period: "Sep 2019 - Aug 2024",
      position: "Senior Data Scientist",
      description: "Led data science initiatives for various clients, developing machine learning models, automated reporting systems, and data-driven solutions. Specialized in Python, R, and cloud-based analytics platforms.",
      color: "bg-teal-500"
    },
    {
      company: "Tech Solutions Inc",
      period: "Jan 17 - Mar 2019",
      position: "Data Analyst",
      description: "Developed interactive dashboards and performed statistical analysis to support business decisions. Worked with SQL databases, created ETL pipelines, and collaborated with cross-functional teams.",
      color: "bg-orange-500"
    },
    {
      company: "Global Analytics",
      period: "Feb 2015 - Dec 2016",
      position: "Junior Data Scientist",
      description: "Built predictive models using machine learning algorithms, performed data cleaning and preprocessing, and created visualizations for stakeholder presentations. Gained expertise in statistical analysis and data mining.",
      color: "bg-yellow-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Experience
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Main vertical dotted line through center */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dotted border-gray-400 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex">
                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${exp.color} rounded-full border-2 border-white shadow-sm z-10 hidden md:block`}></div>
                
                {/* Mobile timeline dot (left side for mobile) */}
                <div className={`absolute left-4 w-4 h-4 ${exp.color} rounded-full border-2 border-white shadow-sm z-10 md:hidden`}></div>
                
                {/* Mobile timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 md:hidden"></div>
                
                {/* Content */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 ml-12 md:ml-0">
                  {/* Left side - Company and Date */}
                  <div className="space-y-2 md:text-right md:pr-8">
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.company}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {exp.period}
                    </p>
                  </div>
                  
                  {/* Right side - Position and Description */}
                  <div className="space-y-3 md:pl-8">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {exp.position}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
