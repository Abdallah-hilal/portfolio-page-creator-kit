import { Workflow, Bot, Plug, Database, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    points: [
      "Design and build n8n workflows that automate repetitive operations",
      "Connect apps, APIs, and databases into one seamless flow",
      "Replace manual ops with reliable, monitored automations",
      "Save hours of work every single week",
    ],
  },
  {
    icon: Bot,
    title: "AI Agents & Chat Systems",
    points: [
      "Build AI customer support agents powered by LangChain + OpenAI",
      "Multi-step AI workflows that reason, decide, and act",
      "Integrate with WhatsApp, websites, and CRM platforms",
      "Cut support load and deliver 24/7 responses",
    ],
  },
  {
    icon: Plug,
    title: "Business Systems Integration",
    points: [
      "API integrations between your internal tools and platforms",
      "Automate internal ops across sales, ops, finance, marketing",
      "Centralize workflows across teams into one source of truth",
      "Unblock teams with automation that actually scales",
    ],
  },
  {
    icon: Database,
    title: "Data & AI Solutions",
    points: [
      "Python automation, scraping, and data pipelines",
      "AI-enhanced insights on top of your business data",
      "Reporting, analytics, and dashboards that drive decisions",
      "Turn raw data into operational leverage",
    ],
  },
];

const stats = [
  { value: "30+", label: "AI Projects Delivered" },
  { value: "Workflow", label: "Automation Systems Shipped" },
  { value: "Business", label: "Integrations Built" },
];

const About = () => {
  return (
    <section className="py-24 lg:py-32 bg-muted/40 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4">
            What I Build
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.05] tracking-tight mb-6">
            AI Systems & Automation
            <br />
            <span className="text-accent">Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            I design{" "}
            <span className="font-semibold text-foreground">AI-powered systems</span>{" "}
            that help businesses{" "}
            <span className="font-semibold text-foreground">automate operations</span>,{" "}
            <span className="font-semibold text-foreground">streamline workflows</span>,
            integrate tools, and{" "}
            <span className="font-semibold text-foreground">reduce manual work</span>{" "}
            using modern{" "}
            <span className="font-semibold text-foreground">AI</span> and{" "}
            <span className="font-semibold text-foreground">automation</span>{" "}
            technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mb-20">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-card rounded-2xl p-7 lg:p-8 border border-border hover:border-accent/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-secondary text-background flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <s.icon className="w-6 h-6" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition-all" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {s.title}
              </h3>
              <ul className="space-y-2.5">
                {s.points.map((p, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm md:text-base text-foreground/70 leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {stats.map((s) => (
            <div key={s.label} className="bg-card p-8 text-center">
              <div className="text-4xl md:text-5xl font-black text-foreground mb-2">
                {s.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;