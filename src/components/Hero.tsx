import { ArrowRight, ChevronDown, Mail, Linkedin, Youtube, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const floatingTags = [
  { label: "n8n", className: "top-4 -left-4 md:-left-10" },
  { label: "LangChain", className: "top-20 -right-4 md:-right-10" },
  { label: "OpenAI", className: "bottom-32 -left-6 md:-left-14" },
  { label: "AI Agents", className: "bottom-12 -right-2 md:-right-6" },
  { label: "APIs", className: "top-1/2 -left-10 md:-left-20" },
  { label: "Automation", className: "bottom-0 left-1/3" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background pt-24 pb-16">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-3xl translate-y-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for full-time roles · UAE
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] tracking-tight">
              AI Automation
              <br />
              <span className="text-accent">Engineer</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl">
              Saving time is saving money — I build AI-powered workflows using{" "}
              <span className="font-semibold text-foreground">n8n</span>,{" "}
              <span className="font-semibold text-foreground">LangChain</span>, and{" "}
              <span className="font-semibold text-foreground">APIs</span> to
              automate operations, streamline internal business processes, and
              help businesses{" "}
              <span className="font-semibold text-foreground">save time</span>{" "}
              and cut costs.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-7 h-12 font-semibold group"
              >
                <a href="#projects">
                  View Case Studies
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-7 h-12 font-semibold border-2 border-foreground/15 hover:border-accent hover:text-accent"
              >
                <a href="#contact">
                  <Mail className="w-4 h-4 mr-1" />
                  Contact Me
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 max-w-xl border-t border-border">
              <div className="pt-6">
                <div className="text-3xl md:text-4xl font-black text-foreground">30+</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">
                  Projects Completed
                </div>
              </div>
              <div className="pt-6 border-l border-border pl-6">
                <div className="text-3xl md:text-4xl font-black text-accent">AI</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">
                  Workflow Systems
                </div>
              </div>
              <div className="pt-6 border-l border-border pl-6">
                <div className="text-3xl md:text-4xl font-black text-foreground">API</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">
                  Integrations Built
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-5 pt-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                Connect
              </span>
              <div className="h-px flex-1 max-w-[40px] bg-border" />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.linkedin.com/in/abdallah-hilal/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all hover:-translate-y-0.5"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>LinkedIn</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.youtube.com/@AbdallahHelalAI"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all hover:-translate-y-0.5"
                    >
                      <Youtube className="w-4 h-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>YouTube</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://linktr.ee/abdallah.helal"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Linktree"
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card hover:bg-[#43E660] hover:text-white hover:border-[#43E660] transition-all hover:-translate-y-0.5"
                    >
                      <Link2 className="w-4 h-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>Linktree</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.datacamp.com/portfolio/AbdallahHelal"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="DataCamp"
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card hover:bg-[#03EF62] hover:text-black hover:border-[#03EF62] transition-all hover:-translate-y-0.5"
                    >
                      <svg
                        viewBox="-9.6 -9.6 43.2 43.2"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M12.946 18.151v-5.239L21.209 8.2 19.2 7.048l-6.254 3.567V5.36c0-.356-.192-.689-.5-.866L4.922.177a1.434 1.434 0 0 0-1.455.044 1.438 1.438 0 0 0-.676 1.224v14.777A1.44 1.44 0 0 0 4.92 17.49l6.032-3.44v4.683a1 1 0 0 0 .504.867l7.73 4.4 2.01-1.152-8.25-4.697zM10.953 5.938v5.814L4.785 15.27V2.4l6.168 3.539v-.001z" />
                      </svg>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>DataCamp</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Right — portrait + floating tech tags */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px]">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 via-secondary/20 to-primary/20 blur-2xl" />
              <div className="absolute inset-4 rounded-full border border-accent/20" />
              <div className="absolute inset-10 rounded-full border border-foreground/10" />

              {/* Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src="/lovable-uploads/profile-professional.png"
                  alt="Abdallah Helal — AI Automation Engineer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating pills */}
              {floatingTags.map((t, i) => (
                <div
                  key={t.label}
                  className={`absolute ${t.className} bg-card/80 border border-border/60 shadow-sm rounded-full px-2.5 py-1 text-[11px] font-medium text-foreground/70 backdrop-blur-sm`}
                  style={{
                    animation: `float 7s ease-in-out infinite`,
                    animationDelay: `${i * 0.7}s`,
                  }}
                >
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="flex flex-col items-center gap-1 text-muted-foreground">
          <span className="text-[10px] uppercase tracking-widest font-semibold">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 text-accent" />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;