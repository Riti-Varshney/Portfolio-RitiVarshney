import { Calendar, MapPin } from "lucide-react";
import { Badge } from "./Badge"; // Assuming you have a Badge component

const EducationCertifications = () => {
  return (
    <section className="py-20 px-6 bg-gray-950 text-gray-300" id="education">
      <div className="max-w-5xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-16 ">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-purple-500">
            Education & Certifications
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Building strong foundations in computer science and emerging technologies
          </p>
        </div>

        {/* Education Card */}
        <div className="bg-black rounded-lg p-6 mb-8 shadow-lg  transition duration-300 ease-in-out
             hover:shadow-[0_0_12px_4px_rgba(168,85,247,0.4)] cursor-pointer" >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-purple-600 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-white text-lg md:text-xl">
              Bachelor of Technology - Computer Science And Engineering
            </h3>
          </div>

          <a
            href="#"
            className="text-purple-500 hover:underline font-medium text-sm md:text-base"
          >
            Aligarh College Of Engineering And Technology
          </a>

          <div className="flex items-center gap-4 mt-2 text-gray-400 text-xs md:text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Sep 2022 - July 2026</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Aligarh, India</span>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-white font-semibold mb-2 text-sm md:text-base">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {["Operating Systems", "Data Structures", "Databases", "Analysis Of Algorithms"].map(
                (course) => (
                  <Badge key={course} variant="outline" className="text-xs md:text-sm">
                    {course}
                  </Badge>
                )
              )}
            </div>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="bg-black rounded-lg p-6 shadow-lg  transition duration-300 ease-in-out
             hover:shadow-[0_0_12px_4px_rgba(168,85,247,0.4)] cursor-pointer">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-600 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 14l2-2 4 4 3-3 2 2-6 6-5-5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4h16v16H4V4z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-white text-lg md:text-xl">Certifications</h3>
          </div>

          {/* Certification 1 */}
          <div className="bg-gray-900 rounded-md p-4 mb-4 flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h4 className="font-semibold text-white text-sm md:text-base">
                Introduction to Generative AI
              </h4>
              <p className="text-gray-400 text-xs md:text-sm">Google</p>
            </div>
            <div className="flex gap-2 mt-3 md:mt-0">
              <Badge variant="outline" className="text-xs md:text-sm">
                AI/ML
              </Badge>
              <Badge variant="secondary" className="text-xs md:text-sm">
                Completed
              </Badge>
            </div>
          </div>

          {/* Certification 2 */}
          <div className="bg-gray-900 rounded-md p-4 flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h4 className="font-semibold text-white text-sm md:text-base">
                30 Days of Code
              </h4>
              <p className="text-gray-400 text-xs md:text-sm">HackerRank</p>
              <p className="text-purple-500 text-xs mt-1 md:mt-0">4-Star Badge</p>
            </div>
            <div className="flex gap-2 mt-3 md:mt-0">
              <Badge variant="outline" className="text-xs md:text-sm">
                Programming
              </Badge>
              <Badge variant="purple" className="text-xs md:text-sm">
                In Progress
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;
