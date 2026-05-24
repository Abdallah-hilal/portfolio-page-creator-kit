import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "AI Automation Engineer",
    company: "Freelance · Upwork",
    period: "2023 — Present",
    description:
      "Designing and shipping AI-powered automation systems for businesses across the UAE, US, and Europe. Building n8n workflows, LangChain agents, and API integrations that replace hours of manual operations.",
    tags: ["n8n", "LangChain", "OpenAI", "APIs"],
  },
  {
    role: "Data Science & Automation Specialist",
    company: "Independent Projects",
    period: "2022 — 2024",
    description:
      "Delivered 30+ end-to-end data and automation projects: ML models, scraping pipelines, business dashboards, and internal tooling integrating Python with low-code platforms.",
    tags: ["Python", "Make.com", "Zapier", "ML"],
  },
];

const Experience = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Building AI systems that ship
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.role}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-accent ring-4 ring-background md:-translate-x-1/2" />
                <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    <Briefcase className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mt-2">
                    {exp.role}
                  </h3>
                  <p className="text-muted-foreground font-medium">{exp.company}</p>
                </div>
                <div className="pl-12 md:pl-12 mt-3 md:mt-0">
                  <p className="text-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-foreground/70 border border-border"
                      >
                        {t}
                      </span>
                    ))}
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