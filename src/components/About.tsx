
import { BarChart3, Bot, Brain, Globe, Phone } from "lucide-react";
const About = () => {
  const skills = [
    {
      icon: Bot,
      title: "Process Automation",
      description: (
        <ul className="list-disc list-inside text-left space-y-2 text-gray-600 leading-relaxed">
          <li>Connect and automate apps, tools, and systems</li>
          <li>Build low-code workflows (<span className="font-semibold text-gray-800">n8n, Make.com, Zapier</span>)</li>
          <li><span className="font-semibold text-gray-800">API integrations</span></li>
          <li>End-to-end automation to <span className="font-semibold text-gray-800">save your valuable time and money</span></li>
        </ul>
      ),
      color: "bg-green-500",
      lightColor: "bg-green-100",
    },
    {
      icon: Phone,
      title: "AI Voice Agent",
      description: (
        <ul className="list-disc list-inside text-left space-y-2 text-gray-600 leading-relaxed">
            <li>Build <span className="font-semibold text-gray-800">AI-powered voice assistants</span> for customer support & automation</li>
            <li>Integrate <span className="font-semibold text-gray-800">voice bots</span> into your existing systems</li>
            <li>Automate phone calls, bookings, and customer inquiries</li>
            <li>Reduce support costs and <span className="font-semibold text-gray-800">improve customer experience</span></li>
        </ul>
      ),
      color: "bg-red-500",
      lightColor: "bg-red-100",
    },
    {
      icon: Globe,
      title: "Web Scraping",
      description: (
        <ul className="list-disc list-inside text-left space-y-2 text-gray-600 leading-relaxed">
            <li>Extract data from websites and APIs</li>
            <li>Build custom scrapers with <span className="font-semibold text-gray-800">BeautifulSoup, Selenium, Scrapy</span></li>
            <li>Collect real-time <span className="font-semibold text-gray-800">market and competitor data</span></li>
            <li>Provide clean, structured data for your business</li>
        </ul>
      ),
      color: "bg-orange-500",
      lightColor: "bg-orange-100",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: (
        <ul className="list-disc list-inside text-left space-y-2 text-gray-600 leading-relaxed">
            <li>Build custom <span className="font-semibold text-gray-800">ML models</span></li>
            <li>Predict trends and customer behavior</li>
            <li>Automate decision-making processes</li>
            <li>Deliver <span className="font-semibold text-gray-800">actionable business insights</span></li>
        </ul>
      ),
      color: "bg-purple-500",
      lightColor: "bg-purple-100",
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: (
        <ul className="list-disc list-inside text-left space-y-2 text-gray-600 leading-relaxed">
            <li>Data cleaning and preparation</li>
            <li>Data visualization and reporting</li>
            <li><span className="font-semibold text-gray-800">SQL</span> and <span className="font-semibold text-gray-800">Python</span> analytics</li>
            <li>Turn raw data into <span className="font-semibold text-gray-800">clear business insights</span></li>
        </ul>
      ),
      color: "bg-blue-500",
      lightColor: "bg-blue-100",
    },
  ];
  const stats = [{
    number: "50+",
    label: "Projects Completed"
  }, {
    number: "10+",
    label: "Happy Clients"
  }, {
    number: "25+",
    label: "Hours on Upwork"
  }];
  return <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            What do I help?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I help businesses solve problems and build efficient solutions by combining <span className="font-semibold text-gray-800">data science</span>, <span className="font-semibold text-gray-800">AI</span>, and <span className="font-semibold text-gray-800">automation</span>. My work is focused on creating <span className="font-semibold text-gray-800">digital products</span> that <span className="font-semibold text-gray-800">save time</span>, <span className="font-semibold text-gray-800">reduce costs</span>, and <span className="font-semibold text-gray-800">drive business growth</span>.
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill) => <div key={skill.title} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-gray-100 flex flex-col">
              <div className={`inline-flex items-center justify-center w-16 h-16 ${skill.lightColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className={`w-8 h-8 text-gray-700`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {skill.title}
              </h3>
              <div className="text-gray-600 leading-relaxed flex-grow">
                {skill.description}
              </div>
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
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I can help you with <span className="font-semibold text-gray-800">automation, data science, and AI solutions</span> that save time, reduce costs, and simplify your business.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Using <span className="font-semibold text-gray-800">Python, machine learning, web scraping, low-code platforms (n8n, Make.com, Zapier), and API integrations</span>, I build efficient systems tailored to your needs.
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
