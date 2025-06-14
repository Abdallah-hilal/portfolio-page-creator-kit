
import { Workflow, Brain, BarChart3, Database, Code, Cloud, Zap, Bot } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Workflow,
      title: "Process Automation",
      skills: [
        { name: "n8n", logo: "⚡" },
        { name: "Zapier", logo: "⚡" },
        { name: "Power Automate", logo: "🔄" },
        { name: "UiPath", logo: "🤖" }
      ],
      color: "bg-purple-500",
      lightColor: "bg-purple-100"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      skills: [
        { name: "Python", logo: "🐍" },
        { name: "Scikit-learn", logo: "📊" },
        { name: "TensorFlow", logo: "🧠" },
        { name: "PyTorch", logo: "🔥" }
      ],
      color: "bg-blue-500",
      lightColor: "bg-blue-100"
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      skills: [
        { name: "Python", logo: "🐍" },
        { name: "R", logo: "📈" },
        { name: "SQL", logo: "🗃️" },
        { name: "Pandas", logo: "🐼" }
      ],
      color: "bg-green-500",
      lightColor: "bg-green-100"
    },
    {
      icon: Database,
      title: "Data Engineering",
      skills: [
        { name: "ETL Pipelines", logo: "🔄" },
        { name: "Apache Airflow", logo: "🌊" },
        { name: "PostgreSQL", logo: "🐘" },
        { name: "MongoDB", logo: "🍃" }
      ],
      color: "bg-orange-500",
      lightColor: "bg-orange-100"
    },
    {
      icon: Code,
      title: "Programming",
      skills: [
        { name: "Python", logo: "🐍" },
        { name: "JavaScript", logo: "💛" },
        { name: "SQL", logo: "🗃️" },
        { name: "Git", logo: "📚" }
      ],
      color: "bg-red-500",
      lightColor: "bg-red-100"
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: [
        { name: "AWS", logo: "☁️" },
        { name: "Google Cloud", logo: "🌐" },
        { name: "Azure", logo: "🔷" },
        { name: "Docker", logo: "🐳" }
      ],
      color: "bg-cyan-500",
      lightColor: "bg-cyan-100"
    },
    {
      icon: Zap,
      title: "API Integration",
      skills: [
        { name: "REST APIs", logo: "🔗" },
        { name: "GraphQL", logo: "⚡" },
        { name: "Webhooks", logo: "🎣" },
        { name: "OAuth", logo: "🔐" }
      ],
      color: "bg-yellow-500",
      lightColor: "bg-yellow-100"
    },
    {
      icon: Bot,
      title: "Data Visualization",
      skills: [
        { name: "Tableau", logo: "📊" },
        { name: "Power BI", logo: "📈" },
        { name: "Plotly", logo: "📋" },
        { name: "D3.js", logo: "🎨" }
      ],
      color: "bg-indigo-500",
      lightColor: "bg-indigo-100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise in automation, data science, and modern development technologies
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${category.lightColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className={`w-8 h-8 text-gray-700`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <span className="text-2xl">{skill.logo}</span>
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
