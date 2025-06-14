
import { BarChart3, Bot, Database, Brain } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Python, R, SQL, Tableau"
    },
    {
      icon: Brain,
      title: "Machine Learning", 
      description: "Scikit-learn, TensorFlow, PyTorch"
    },
    {
      icon: Bot,
      title: "Process Automation",
      description: "RPA, APIs, Workflow Optimization"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "ETL Pipelines, Big Data, Cloud Platforms"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate data scientist with 5+ years of experience transforming raw data into actionable insights 
            and building automated solutions that drive business growth and operational efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                <skill.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
