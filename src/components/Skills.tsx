import { Workflow, Brain, Code, CheckCircle2, Wrench, BarChart3 as Plotly, Phone, ScanSearch } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Data Science",
      skills: [ "Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "SQL" ],
      lightColor: "bg-red-100"
    },
    {
      icon: Plotly,
      title: "Data Visualization & Analysis",
      skills: [ "Tableau", "Seaborn", "Matplotlib", "Plotly" ],
      lightColor: "bg-green-100"
    },
    {
      icon: Workflow,
      title: "Automation & Low-Code Platforms",
      skills: [ "n8n", "Make.com", "Zapier", "API Integration", "Workflow Automation" ],
      lightColor: "bg-purple-100"
    },
    {
      icon: Brain,
      title: "Machine Learning & AI",
      skills: [ "Supervised & Unsupervised Learning", "Predictive Modeling", "AI-powered Automation", "LLMs" ],
      lightColor: "bg-blue-100"
    },
    {
      icon: ScanSearch,
      title: "Web Scraping & Data Extraction",
      skills: [ "BeautifulSoup", "Selenium", "Scrapy", "API-based Scraping" ],
      lightColor: "bg-orange-100"
    },
    {
      icon: Phone,
      title: "AI Voice Agent",
      skills: [ "Voice Automation", "AI-powered Call Agents", "Customer Support Automation" ],
      lightColor: "bg-cyan-100"
    },
    {
      icon: Wrench,
      title: "Other Tools & Platforms",
      skills: [ "Git", "Notion", "Google Sheets Automation", "Airtable" ],
      lightColor: "bg-yellow-100"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-gray-100 flex flex-col"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${category.lightColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className={`w-8 h-8 text-gray-700`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
