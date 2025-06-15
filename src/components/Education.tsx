
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
      name: "Machine Learning Specialization",
      issuer: "Stanford University – Coursera",
      year: "August 2024",
      courses: 3,
      description: "Completed a 3-course specialization taught by Andrew Ng covering supervised learning, unsupervised learning, recommendation systems, and reinforcement learning. Gained deep practical skills to build and deploy ML models.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/2048px-Coursera-Logo_600x600.svg.png"
    },
    {
      name: "Associate Data Scientist in Python",
      issuer: "DataCamp",
      year: "November 2024",
      courses: 9,
      description: "Completed a 90-hour career track, mastering core data science concepts with hands-on projects in Python, pandas, data visualization, and machine learning.",
      logo: "/lovable-uploads/df763234-1fb1-417a-8649-c0ccc670f721.png"
    },
    {
      name: "ALX Data Science Certificate",
      issuer: "ALX",
      year: "August 2024",
      courses: 8,
      description: "Completed 8 intensive courses in data science, covering Python, SQL, data wrangling, statistics, machine learning, and project-based learning to build real-world data-driven solutions.",
      logo: "/lovable-uploads/e59f144a-c467-4ca5-ab6b-ceb49b6a1d50.png"
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
                  <div className="flex items-center gap-3 flex-1">
                    <img src={cert.logo} alt={cert.issuer} className="w-8 h-8 object-contain" />
                    <h4 className="text-lg font-bold text-gray-900">{cert.name}</h4>
                  </div>
                  <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full ml-2">
                    {cert.year}
                  </span>
                </div>
                <p className="text-orange-600 font-semibold mb-2">{cert.issuer}</p>
                <div className="mb-3">
                  <span className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    Courses: {cert.courses}
                  </span>
                </div>
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
