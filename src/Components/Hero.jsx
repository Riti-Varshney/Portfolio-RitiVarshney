import Button from "./Button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Hero = () => {
  // Scroll smoothly to projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll smoothly to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e1331] via-[#2a1f45] to-[#1e1331] overflow-hidden"
      id="hero"
    >
      {/* Glowing purple background spotlight */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-700/60 via-transparent to-transparent opacity-70"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl h-25 md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(192,38,211,0.8)]">
          Riti Varshney
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Visual Design Intern & Frontend Developer passionate about creating{" "}
          <span className="text-pink-400 font-semibold">
            user-first digital experiences
          </span>{" "}
          with motion-aware design and AI-powered creativity.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {/* Get in Touch button scrolls to contact section */}
          <Button
            variant="purple"
            size="lg"
            className="group"
            onClick={scrollToContact}
          >
            <Mail className="w-5 h-5 mr-2" />
            Get in Touch
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* View My Work button scrolls to projects */}
          <Button variant="black" size="lg" onClick={scrollToProjects}>
            View My Work
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          {[
            {
              href: "https://github.com/Riti-Varshney",
              icon: Github,
              label: "GitHub",
            },
            {
              href: "https://linkedin.com/in/riti-varshney-a717ab2b2",
              icon: Linkedin,
              label: "LinkedIn",
            },
            { href: "mailto:9riti2004@gmail.com", icon: Mail, label: "Mail" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-full border border-gray-700 bg-black/20 hover:bg-pink-600 hover:border-pink-600 transition-colors group"
            >
              <Icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
