import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const stroke = "rgba(255,255,255,0.25)";
const strokeThin = 1.2;

function ServiceWireframe({ type }: { type: string }) {
  const className = "w-full h-full min-h-[200px] md:min-h-[260px]";
  switch (type) {
    case "AI MVP Development":
      return (
        <svg viewBox="0 0 120 80" className={className} fill="none" stroke={stroke} strokeWidth={strokeThin}>
          <rect x="8" y="28" width="22" height="24" rx="2" />
          <line x1="30" y1="40" x2="42" y2="40" />
          <rect x="42" y="28" width="22" height="24" rx="2" />
          <line x1="64" y1="40" x2="76" y2="40" />
          <rect x="76" y="28" width="22" height="24" rx="2" />
          <path d="M 98 40 L 104 40 L 104 36 L 112 40 L 104 44 L 104 40 Z" fill={stroke} stroke="none" />
          <circle cx="60" cy="62" r="4" strokeDasharray="2 2" />
          <line x1="60" y1="58" x2="60" y2="48" strokeDasharray="2 2" />
        </svg>
      );
    case "Product & GTM Strategy":
      return (
        <svg viewBox="0 0 120 80" className={className} fill="none" stroke={stroke} strokeWidth={strokeThin}>
          <path d="M 20 20 L 100 20 L 92 60 L 28 60 Z" />
          <line x1="35" y1="40" x2="85" y2="40" />
          <line x1="50" y1="25" x2="50" y2="55" />
          <line x1="70" y1="25" x2="70" y2="55" />
          <circle cx="100" cy="38" r="6" />
          <line x1="94" y1="38" x2="88" y2="38" />
        </svg>
      );
    case "Ethical AI & Automation":
      return (
        <svg viewBox="0 0 120 80" className={className} fill="none" stroke={stroke} strokeWidth={strokeThin}>
          <path d="M 60 12 L 88 28 L 88 52 L 60 68 L 32 52 L 32 28 Z" />
          <line x1="60" y1="28" x2="60" y2="52" />
          <line x1="44" y1="40" x2="76" y2="40" />
          <circle cx="52" cy="36" r="3" />
          <circle cx="68" cy="44" r="3" />
        </svg>
      );
    case "Tech for Good Innovation":
      return (
        <svg viewBox="0 0 120 80" className={className} fill="none" stroke={stroke} strokeWidth={strokeThin}>
          <circle cx="60" cy="38" r="10" />
          <circle cx="28" cy="28" r="8" />
          <circle cx="92" cy="28" r="8" />
          <circle cx="28" cy="58" r="8" />
          <circle cx="92" cy="58" r="8" />
          <line x1="52" y1="32" x2="38" y2="32" />
          <line x1="68" y1="32" x2="82" y2="32" />
          <line x1="52" y1="44" x2="38" y2="52" />
          <line x1="68" y1="44" x2="82" y2="52" />
        </svg>
      );
    default:
      return null;
  }
}

const Services = () => {
  const services = [
    {
      title: "AI MVP Development",
      description: "We bring your vision to life through fast, functional prototypes powered by custom AI — turning concepts into scalable, impact-ready products.",
      details: {
        overview: "Working AI-powered prototypes in weeks, not months — cutting-edge AI with proven product methodology.",
        features: [
          "Custom AI model development",
          "Rapid prototyping & feedback",
          "Scalable architecture",
          "Performance & monitoring"
        ],
        process: [
          "Discovery & Requirements",
          "AI Model Selection & Dev",
          "MVP Architecture Design",
          "Rapid Build & Testing",
          "Deploy & Feedback Loop"
        ],
        outcomes: "Launch in 4–8 weeks with validated feedback and a clear path to scale."
      }
    },
    {
      title: "Product & GTM Strategy",
      description: "From 0 to 1 and beyond: we shape your roadmap, validate your idea, and support go-to-market strategies that align with your mission.",
      details: {
        overview: "From concept to market success: validate, build, and launch products that create real impact.",
        features: [
          "Market & competitive research",
          "User persona & validation",
          "Product roadmap & prioritization",
          "GTM & launch execution"
        ],
        process: [
          "Market Opportunity Assessment",
          "User Research & Validation",
          "Product Strategy & Roadmap",
          "GTM Strategy Development",
          "Launch & Optimization"
        ],
        outcomes: "Clear product direction, validated fit, and a GTM strategy that drives growth."
      }
    },
    {
      title: "Ethical AI & Automation",
      description: "We craft human-centered AI systems that drive real value — responsibly. Efficiency, intelligence, and integrity baked in from day one.",
      details: {
        overview: "AI that performs exceptionally and aligns with your values — transparent, fair, and beneficial.",
        features: [
          "Ethical AI framework",
          "Bias detection & mitigation",
          "Transparency & explainability",
          "Responsible governance"
        ],
        process: [
          "Ethical Framework Design",
          "AI System Development",
          "Bias Testing & Mitigation",
          "Transparency Implementation",
          "Monitoring & Governance"
        ],
        outcomes: "Powerful, efficient AI that is trustworthy, fair, and aligned with your values."
      }
    },
    {
      title: "Tech for Good Innovation",
      description: "Blockchain, AI, and emerging tech built with purpose. We develop digital solutions designed to solve real problems and create measurable change.",
      details: {
        overview: "Cutting-edge tech for real-world challenges — solutions that create measurable social impact.",
        features: [
          "Social impact tech",
          "Blockchain for transparency",
          "AI for social good",
          "Impact measurement"
        ],
        process: [
          "Problem Identification",
          "Solution Design",
          "Stakeholder Engagement",
          "Development & Testing",
          "Impact & Scaling"
        ],
        outcomes: "Measurable positive impact and scalable systems for social change."
      }
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter mb-8 text-white">
            From idea to impact. We build purpose-driven tech that matters
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl">
            Full-stack AI innovation studio turning purpose-led ideas into real-world solutions. We build fast, think bold, and push boundaries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="border-t border-white/10 pt-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-white/60 mb-6">{service.description}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="link" className="text-white p-0 hover:text-white/80">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="backdrop-blur-xl bg-white/5 border border-white/10 text-white max-w-5xl max-h-[88vh] overflow-y-auto shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)] p-6 md:p-8">
                  <DialogHeader className="mb-4">
                    <DialogTitle className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
                      {service.title}
                    </DialogTitle>
                  </DialogHeader>

                  <p className="text-sm md:text-base text-white/75 leading-relaxed mb-6">
                    {service.details.overview}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* What We Deliver — chips */}
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">What We Deliver</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.details.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs md:text-sm text-white/85"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expected Outcomes — highlight card */}
                    <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-4">
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-green-500/20 p-1.5 flex-shrink-0">
                          <Sparkles className="h-4 w-4 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-green-400 mb-1">Expected Outcomes</h3>
                          <p className="text-sm text-white/85 leading-relaxed">
                            {service.details.outcomes}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Our Process + Wireframe (fourth quadrant) */}
                  <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-white">Our Process</h3>
                      <div className="relative">
                        <div className="absolute left-4 top-2 bottom-2 w-px bg-white/20" aria-hidden />
                        <ul className="space-y-3">
                          {service.details.process.map((step, idx) => (
                            <li key={idx} className="flex items-center gap-4 relative">
                              <div className="w-8 h-8 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center flex-shrink-0 z-10 text-sm font-semibold text-white">
                                {idx + 1}
                              </div>
                              <span className="text-sm text-white/80">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-center justify-center min-h-[200px] md:min-h-[280px]">
                      <ServiceWireframe type={service.title} />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

