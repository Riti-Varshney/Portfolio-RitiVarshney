import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { Badge } from "./Badge";
import Button from "./Button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Productivity Suite with Sketch Workspace",
      description:
        "A hybrid interface combining task management and sketching on canvas with localStorage-based data retention and motion-aware UI transitions.",
      tech: ["React.js", "Tailwind CSS", "HTML5 Canvas", "LocalStorage API"],
      features: ["Hybrid Interface", "Canvas Interaction", "Data Persistence", "Motion-aware UI"],
      status: "completed",
      highlight: "Canvas Integration",
      github: "https://github.com/Riti-Varshney/DailyDrift-TodoApp-",
    },
    {
      title: "Learning Hub - Interactive Video & Quiz Platform",
      description:
        "Dynamic interface that fetches topic-wise educational videos with intuitive navigation and interactive quizzes for enhanced learning experience.",
      tech: ["React.js", "YouTube API", "REST APIs", "Responsive Design"],
      features: ["Video-based Learning", "Interactive Quizzes", "Dynamic Content", "Responsive UI"],
      status: "completed",
      highlight: "Educational Platform",
      github: "https://github.com/Riti-Varshney?tab=repositories", // <-- Add your actual repo link here
    },
    {
      title: "Dynamic Product Discovery Platform",
      description:
        "An immersive platform showcasing culturally rich products with AI-powered suggestions and image-based product lookup capabilities.",
      tech: ["MERN Stack", "AI Integration", "Image Recognition", "Cultural Design"],
      features: ["AI-powered Suggestions", "Image Lookup", "Cultural Products", "Immersive UI"],
      status: "in-progress",
      highlight: "AI-Powered",
      github: "https://github.com/Riti-Varshney?tab=repositories", // <-- Add your actual repo link here
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#0a0a0a] min-h-screen" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-500">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Innovative solutions blending design thinking with technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group border border-[#222222] bg-[#111111] rounded-lg p-6 flex flex-col h-full
                hover:ring-2 hover:ring-purple-600 hover:shadow-[0_0_15px_6px_rgba(168,85,247,0.6)]
                transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <CardTitle className="text-xl text-white group-hover:text-purple-400 leading-tight">
                    {project.title}
                  </CardTitle>
                  <Badge
                    variant={project.status === "in-progress" ? "default" : "secondary"}
                    className="shrink-0 bg-gray-700 text-gray-300"
                  >
                    {project.status === "in-progress" ? "In Progress" : "Completed"}
                  </Badge>
                </div>
                <Badge variant="outline" className="w-fit text-xs text-gray-300 border-gray-600">
                  {project.highlight}
                </Badge>
              </CardHeader>

              <CardContent className="flex flex-col flex-grow">
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-white">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <Badge
                        key={feature}
                        variant="secondary"
                        className="text-xs bg-gray-700 text-gray-300"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-white">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs text-gray-300 border-gray-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-500"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
