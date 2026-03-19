import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

                  {/* Our Process — timeline infographic */}
                  <div className="mt-6 pt-6 border-t border-white/10">
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

