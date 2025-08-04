import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { Badge } from "./Badge";
import Button from "./Button"
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Open Source Contributor",
      company: "GirlScript Summer of Code (GSSoC)",
      period: "May 2025 – Present",
      location: "Remote",
      type: "Open Source",
      description:
        "Contributing to open-source projects focused on UI/UX design enhancements.",
      highlights: ["Design Contribution", "UI/UX Design Enhancements"],
      status: "current",
    },
    {
      title: "Full Stack Developer",
      company: "InternSecure - AI Internship Scam Detector",
      period: "Jul 2025",
      location: "Hackathon",
      type: "Hackathon",
      description:
        "Designed a clean, intuitive interface to present scam-detection results with AI integration.",
      highlights: [
        "Visual Interface Design",
        "AI Integration",
        "System Integration",
        "Gemini API",
      ],
      status: "completed",
    },
    {
      title: "Frontend Developer",
      company: "LivWell - Smart Rental Web App",
      period: "Apr 2025",
      location: "Hackathon",
      type: "Hackathon",
      description:
        "Designed and developed responsive UI for rental listings with Google Maps integration.",
      highlights: [
        "UI Design",
        "Responsive Design",
        "Google Maps Integration",
        "Team Collaboration",
      ],
      status: "completed",
    },
    {
      title: "Open Source Contributor",
      company: "Social Winter Of Code - Season 5",
      period: "Jan 2025 – Mar 2025",
      location: "Remote",
      type: "Open Source",
      description:
        "Contributed UI improvements and bug fixes across multiple open-source repositories.",
      highlights: [
        "UI Improvements",
        "Bug Fixes",
        "Collaborative Reviews",
        "Visual Components",
      ],
      status: "completed",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#121212] text-gray-300" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-purple-500">
            Experience
          </h2>
          <p className="text-gray-400 text-base">
            Building impactful solutions through design and development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`group border rounded-lg p-6 transition-all duration-300 border-gray-700 bg-[#1e1e1e]
                hover:ring-2 hover:ring-purple-500 hover:shadow-[0_0_15px_4px_rgba(168,85,247,0.6)]
                ${
                  exp.status === "current"
                    ? "border-purple-600 ring-2 ring-purple-600 shadow-[0_0_15px_4px_rgba(168,85,247,0.7)]"
                    : ""
                }
              `}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-semibold text-purple-400 group-hover:text-purple-500 transition-colors">
                      {exp.title}
                    </CardTitle>
                    <p className="text-purple-600 mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <Badge
                      variant="secondary"
                      className="w-fit bg-purple-700 text-purple-300 border border-purple-600"
                    >
                      {exp.type}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs border-gray-600 text-gray-400 hover:bg-purple-600 hover:text-white cursor-default"
                    >
                      {highlight}
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

export default Experience;
