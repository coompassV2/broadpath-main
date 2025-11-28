import { ArrowRight } from "lucide-react";
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
        overview: "Transform your ideas into working AI-powered prototypes in weeks, not months. Our rapid development approach combines cutting-edge AI technologies with proven product development methodologies.",
        features: [
          "Custom AI model development and integration",
          "Rapid prototyping with real user feedback",
          "Scalable architecture from day one",
          "Performance optimization and monitoring",
          "Continuous iteration and improvement"
        ],
        process: [
          "Discovery & Requirements Analysis",
          "AI Model Selection & Development",
          "MVP Architecture Design",
          "Rapid Development & Testing",
          "Deployment & User Feedback Integration"
        ],
        outcomes: "Launch a functional AI product in 4-8 weeks with validated user feedback and a clear path to scale."
      }
    },
    {
      title: "Product & GTM Strategy",
      description: "From 0 to 1 and beyond: we shape your roadmap, validate your idea, and support go-to-market strategies that align with your mission.",
      details: {
        overview: "Navigate the complex journey from concept to market success with our comprehensive product and go-to-market strategy services. We help you validate, build, and launch products that create real impact.",
        features: [
          "Market research and competitive analysis",
          "User persona development and validation",
          "Product roadmap and feature prioritization",
          "Go-to-market strategy development",
          "Launch planning and execution support"
        ],
        process: [
          "Market Opportunity Assessment",
          "User Research & Validation",
          "Product Strategy & Roadmap",
          "GTM Strategy Development",
          "Launch Execution & Optimization"
        ],
        outcomes: "Clear product direction, validated market fit, and a comprehensive go-to-market strategy that drives sustainable growth."
      }
    },
    {
      title: "Ethical AI & Automation",
      description: "We craft human-centered AI systems that drive real value — responsibly. Efficiency, intelligence, and integrity baked in from day one.",
      details: {
        overview: "Build AI systems that not only perform exceptionally but also align with your values and ethical principles. We ensure your AI solutions are transparent, fair, and beneficial to all stakeholders.",
        features: [
          "Ethical AI framework development",
          "Bias detection and mitigation",
          "Transparency and explainability",
          "Privacy-preserving AI solutions",
          "Responsible AI governance"
        ],
        process: [
          "Ethical Framework Design",
          "AI System Development",
          "Bias Testing & Mitigation",
          "Transparency Implementation",
          "Ongoing Monitoring & Governance"
        ],
        outcomes: "AI systems that are not only powerful and efficient but also trustworthy, fair, and aligned with your organizational values."
      }
    },
    {
      title: "Tech for Good Innovation",
      description: "Blockchain, AI, and emerging tech built with purpose. We develop digital solutions designed to solve real problems and create measurable change.",
      details: {
        overview: "Leverage cutting-edge technologies to address real-world challenges and create positive social impact. We specialize in developing solutions that make a difference in communities and society.",
        features: [
          "Social impact technology development",
          "Blockchain for transparency and trust",
          "AI for social good applications",
          "Digital inclusion solutions",
          "Impact measurement and reporting"
        ],
        process: [
          "Social Problem Identification",
          "Technology Solution Design",
          "Stakeholder Engagement",
          "Development & Testing",
          "Impact Measurement & Scaling"
        ],
        outcomes: "Technology solutions that create measurable positive impact while building sustainable, scalable systems for social change."
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
                <DialogContent className="backdrop-blur-xl bg-white/5 border border-white/10 text-white max-w-4xl max-h-[90vh] overflow-y-auto shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)]">
                  <DialogHeader className="mb-6">
                    <DialogTitle className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
                      {service.title}
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-8">
                    {/* Overview */}
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white">Overview</h3>
                      <p className="text-white/70 leading-relaxed">{service.details.overview}</p>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white">What We Deliver</h3>
                      <ul className="space-y-2">
                        {service.details.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-white/70">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Process */}
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white">Our Process</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.details.process.map((step, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="w-8 h-8 bg-white/10 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="text-white text-sm font-medium">{idx + 1}</span>
                            </div>
                            <span className="text-white/70">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div className="border-t border-white/10 pt-6">
                      <h3 className="text-xl font-semibold mb-3 text-white">Expected Outcomes</h3>
                      <p className="text-white/70 leading-relaxed">{service.details.outcomes}</p>
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

