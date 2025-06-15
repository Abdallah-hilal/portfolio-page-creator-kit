
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "El Shorouk Academy",
      period: "Oct 2021 - May 2025",
      description: "Studied core computer science concepts, including data structures, algorithms, object-oriented programming, databases, software development, and problem-solving. Built a strong foundation for data science, automation, and AI applications.",
      type: "degree"
    },
    {
      degree: "Data Science Program (15 months)",
      institution: "ALX Africa",
      period: "2022 - 2024",
      description: "Completed an intensive program covering data analysis, machine learning, data visualization, Python programming, statistics, and real-world data projects. Gained hands-on experience applying data science techniques to solve business problems.",
      type: "degree"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      description: "Professional-level certification demonstrating expertise in designing distributed systems on AWS."
    },
    {
      name: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      year: "2022",
      description: "Certification in designing and building data processing systems on Google Cloud Platform."
    },
    {
      name: "Microsoft Azure Data Scientist Associate",
      issuer: "Microsoft",
      year: "2022",
      description: "Expertise in implementing machine learning solutions using Azure Machine Learning service."
    },
    {
      name: "Tableau Desktop Specialist",
      issuer: "Tableau",
      year: "2021",
      description: "Proficiency in creating interactive data visualizations and dashboards."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development in data science and automation
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-teal-600" />
            <h3 className="text-3xl font-bold text-gray-900">Education</h3>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                    <p className="text-lg text-teal-600 font-semibold mb-2">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{edu.period}</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-orange-600" />
            <h3 className="text-3xl font-bold text-gray-900">Professional Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-gray-900 flex-1">{cert.name}</h4>
                  <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full ml-2">
                    {cert.year}
                  </span>
                </div>
                <p className="text-orange-600 font-semibold mb-3">{cert.issuer}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
