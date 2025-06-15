
import { BarChart3, Bot, Database, Brain } from "lucide-react";
const About = () => {
  const skills = [{
    icon: BarChart3,
    title: "Data Analysis",
    description: "Python, R, SQL, Tableau",
    color: "bg-blue-500",
    lightColor: "bg-blue-100"
  }, {
    icon: Brain,
    title: "Machine Learning",
    description: "Scikit-learn, TensorFlow, PyTorch",
    color: "bg-purple-500",
    lightColor: "bg-purple-100"
  }, {
    icon: Bot,
    title: "Process Automation",
    description: "RPA, APIs, Workflow Optimization",
    color: "bg-green-500",
    lightColor: "bg-green-100"
  }, {
    icon: Database,
    title: "Data Engineering",
    description: "ETL Pipelines, Big Data, Cloud Platforms",
    color: "bg-orange-500",
    lightColor: "bg-orange-100"
  }];
  const stats = [{
    number: "285+",
    label: "Projects Completed"
  }, {
    number: "190+",
    label: "Happy Clients"
  }];
  return <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            What do I help?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-xl">
            I help businesses solve problems and build efficient solutions by combining <span className="font-semibold text-gray-800">data science</span>, <span className="font-semibold text-gray-800">AI</span>, and <span className="font-semibold text-gray-800">automation</span>. My work is focused on creating <span className="font-semibold text-gray-800">digital products</span> that <span className="font-semibold text-gray-800">save time</span>, <span className="font-semibold text-gray-800">reduce costs</span>, and <span className="font-semibold text-gray-800">drive business growth</span>.
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => <div key={skill.title} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-gray-100">
              <div className={`inline-flex items-center justify-center w-16 h-16 ${skill.lightColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className={`w-8 h-8 text-gray-700`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {skill.description}
              </p>
            </div>)}
        </div>

        {/* Stats Section */}
        <div className="flex justify-center gap-16 mb-16">
          {stats.map((stat, index) => <div key={stat.label} className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>)}
        </div>

        {/* About Description */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">About Me</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I'm a passionate data scientist with 5+ years of experience transforming raw data into actionable insights 
              and building automated solutions that drive business growth and operational efficiency. 
              I use process design to create digital products that help businesses solve complex problems and make data-driven decisions.
            </p>
            <div className="inline-flex items-center gap-4 bg-teal-50 px-6 py-3 rounded-full">
              <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
              <span className="text-teal-700 font-medium">Available for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
