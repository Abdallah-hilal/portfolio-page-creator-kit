
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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            My Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A journey through my professional career in data science and analytics
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 ${exp.color} rounded-full border-4 border-white shadow-lg z-10`}></div>
                
                {/* Content */}
                <div className="ml-16 bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="mb-4 lg:mb-0">
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {exp.position}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>
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
