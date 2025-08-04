import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./Card"; // Adjust path as needed
import { Badge } from "./Badge";
import { Palette, Code, Database, Brain, Users, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Visual Design & UI Tools",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        "Figma",
        "Canva",
        "HTML5 Canvas",
        "Adobe XD",
        "Responsive Design",
        "UI Prototyping",
        "Motion-Aware Design",
      ],
      color: "bg-gradient-primary",
    },
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS", "Chart.js"],
      color: "bg-gradient-accent",
    },
    {
      title: "Backend & Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "MySQL", "Postman"],
      color: "bg-gradient-secondary",
    },
    {
      title: "AI/ML & APIs",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Gemini AI", "YouTube Data API", "Whois API"],
      color: "bg-accent",
    },
    {
      title: "Design Concepts",
      icon: <Zap className="w-6 h-6" />,
      skills: ["Motion Design", "User-Centered Design", "Responsive Interfaces", "Prototyping"],
      color: "bg-primary",
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: ["Collaboration", "Creative Thinking", "Fast Learning", "Adaptability", "Communication"],
      color: "bg-muted",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black text-gray-300" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-500">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning design, development, and emerging
            technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="group border border-gray-800 bg-[#111111]/70 backdrop-blur-sm p-6 rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_4px_rgba(168,85,247,0.6)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`p-3 rounded-full text-white`}
                    style={{
                      background:
                        category.color === "bg-gradient-primary"
                          ? "linear-gradient(135deg, #a855f7, #ec4899)"
                          : category.color === "bg-gradient-accent"
                          ? "linear-gradient(90deg, #7c3aed, #db2777)"
                          : category.color === "bg-gradient-secondary"
                          ? "linear-gradient(135deg, #3b82f6, #2563eb)"
                          : category.color === "bg-accent"
                          ? "#8b5cf6"
                          : category.color === "bg-primary"
                          ? "#6366f1"
                          : category.color === "bg-muted"
                          ? "#9ca3af"
                          : "#6b7280",
                    }}
                  >
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg text-gray-200">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs hover:bg-purple-600 hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
