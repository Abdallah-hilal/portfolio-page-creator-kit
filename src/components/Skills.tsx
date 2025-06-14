
import { Workflow, Brain, BarChart3, Globe, Code, Cloud, Zap, Bot } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Workflow,
      title: "Process Automation",
      skills: [
        { name: "n8n", logo: "https://docs.n8n.io/favicon.ico" },
        { name: "Zapier", logo: "https://cdn.zapier.com/storage/services/6cf3f5a0238d7971d4e2d62e8a9ec1c6.png" },
        { name: "Power Automate", logo: "https://powerautomate.microsoft.com/images/application-logos/svg/powerautomate.svg" },
        { name: "UiPath", logo: "https://www.uipath.com/hs-fs/hubfs/UiPath-Logo.png" }
      ],
      color: "bg-purple-500",
      lightColor: "bg-purple-100"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      skills: [
        { name: "Python", logo: "https://www.python.org/static/img/python-logo.png" },
        { name: "Scikit-learn", logo: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png" },
        { name: "TensorFlow", logo: "https://www.tensorflow.org/images/tf_logo_social.png" },
        { name: "PyTorch", logo: "https://pytorch.org/assets/images/pytorch-logo.png" }
      ],
      color: "bg-blue-500",
      lightColor: "bg-blue-100"
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      skills: [
        { name: "Python", logo: "https://www.python.org/static/img/python-logo.png" },
        { name: "R", logo: "https://www.r-project.org/Rlogo.png" },
        { name: "SQL", logo: "https://cdn-icons-png.flaticon.com/512/4492/4492311.png" },
        { name: "Pandas", logo: "https://pandas.pydata.org/static/img/pandas_white.svg" }
      ],
      color: "bg-green-500",
      lightColor: "bg-green-100"
    },
    {
      icon: Globe,
      title: "Web Scraping",
      skills: [
        { name: "BeautifulSoup", logo: "https://pypi.org/static/images/logo-small.8998e9d1.svg" },
        { name: "Scrapy", logo: "https://scrapy.org/img/scrapylogo.png" },
        { name: "Selenium", logo: "https://selenium-python.readthedocs.io/en/stable/_static/logo.png" },
        { name: "Requests", logo: "https://docs.python-requests.org/en/latest/_static/requests-sidebar.png" }
      ],
      color: "bg-orange-500",
      lightColor: "bg-orange-100"
    },
    {
      icon: Code,
      title: "Programming",
      skills: [
        { name: "Python", logo: "https://www.python.org/static/img/python-logo.png" },
        { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
        { name: "SQL", logo: "https://cdn-icons-png.flaticon.com/512/4492/4492311.png" },
        { name: "Git", logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" }
      ],
      color: "bg-red-500",
      lightColor: "bg-red-100"
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: [
        { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "Google Cloud", logo: "https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png" },
        { name: "Azure", logo: "https://azure.microsoft.com/svghandler/azure-logo/" },
        { name: "Docker", logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" }
      ],
      color: "bg-cyan-500",
      lightColor: "bg-cyan-100"
    },
    {
      icon: Zap,
      title: "API Integration",
      skills: [
        { name: "REST APIs", logo: "https://restfulapi.net/wp-content/uploads/rest.png" },
        { name: "GraphQL", logo: "https://graphql.org/img/logo.svg" },
        { name: "Webhooks", logo: "https://cdn-icons-png.flaticon.com/512/2618/2618600.png" },
        { name: "OAuth", logo: "https://oauth.net/images/oauth-2-sm.png" }
      ],
      color: "bg-yellow-500",
      lightColor: "bg-yellow-100"
    },
    {
      icon: Bot,
      title: "Data Visualization",
      skills: [
        { name: "Tableau", logo: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png" },
        { name: "Power BI", logo: "https://powerbi.microsoft.com/pictures/application-logos/svg/powerbi.svg" },
        { name: "Plotly", logo: "https://plotly.com/all_static/images/plotly_logo.png" },
        { name: "D3.js", logo: "https://raw.githubusercontent.com/d3/d3-logo/master/d3.png" }
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
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      className="w-6 h-6 object-contain"
                      onError={(e) => {
                        // Fallback to a default icon if logo fails to load
                        e.currentTarget.style.display = 'none';
                      }}
                    />
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
