import { ArrowRight, Mail, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-black py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-white/10 pb-12 mb-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Let's create something exceptional together
            </h2>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="text-xl py-8 px-6 rounded-full hover:bg-white hover:text-black transition-all duration-300 border border-white/30 text-white"
              >
                <a href="mailto:hello@broadpath.ai">
                  Get in touch <ArrowRight className="ml-2 h-6 w-6" />
                </a>
              </Button>
              <Button
                asChild
                className="text-xl py-8 px-8 rounded-full bg-green-500 text-black hover:bg-green-600 transition-all duration-300"
              >
                <a href="/contact">
                  Start a project <ArrowRight className="ml-2 h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/3 space-y-8">
            <div>
              <h3 className="text-white/60 text-sm font-medium mb-3">Email</h3>
              <a
                href="mailto:hello@broadpath.ai"
                className="text-white hover:text-white/80 text-lg font-medium flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                hello@broadpath.ai
              </a>
            </div>
            <div>
              <h3 className="text-white/60 text-sm font-medium mb-3">Follow us</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-white/60">
            © 2025 Broadpath, Lda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
