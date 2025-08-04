import { Mail, Phone, Github, Linkedin, Code, ExternalLink, Terminal } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-black text-white" id="about">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-gray-400 text-lg mt-2">
          Ready to collaborate on exciting projects and bring creative ideas to life
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {/* Left Panel - Get in Touch */}
<div className="bg-gray-900 rounded-md p-6 shadow-md hover:shadow-[0_0_12px_4px_rgba(168,85,247,0.4)] transition duration-300 ease-in-out">
  <div className="flex items-center gap-3 mb-4">
    <Mail className="text-purple-500" />
    <h3 className="font-semibold text-lg">Get in Touch</h3>
  </div>

  <div className="space-y-4">
    <div className="bg-black/30 rounded p-4 border border-purple-700">
      <p className="text-xs text-purple-400 uppercase mb-1">Email</p>
      <p className="font-semibold text-white">9riti2004@gmail.com</p>
    </div>
    <div className="bg-black/30 rounded p-4 border border-purple-700">
      <p className="text-xs text-purple-400 uppercase mb-1">Phone</p>
      <p className="font-semibold text-white">+91-8630530816</p>
    </div>

    {/* A Full-Box Styled Footer Note */}
    <div className="bg-purple-600 text-white rounded p-4 text-sm text-center font-medium shadow-lg hover:bg-purple-700 transition">
      Always open to connect & collaborate — feel free to reach out!
    </div>
  </div>
</div>

        {/* Right Panel - Online Profiles */}
        <div className="bg-gray-900 rounded-md p-6 shadow-md hover:shadow-[0_0_16px_2px_rgba(168,85,247,0.3)] transition duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="text-purple-500" />
            <h3 className="font-semibold text-lg">Find Me Online</h3>
          </div>

          <div className="space-y-4">
            {[
              {
                platform: "GitHub",
                username: "Riti-Varshney",
                icon: <Github className="w-4 h-4" />,
                link: "https://github.com/Riti-Varshney",
              },
              {
                platform: "LinkedIn",
                username: "riti-varshney-a717ab2b2",
                icon: <Linkedin className="w-4 h-4" />,
                link: "https://www.linkedin.com/in/riti-varshney-a717ab2b2/",
              },
              {
                platform: "LeetCode",
                username: "RITIVARSHNEY",
                icon: <Code className="w-4 h-4" />,
                link: "https://leetcode.com/RITIVARSHNEY/",
              },
              {
                platform: "HackerRank",
                username: "RitiV",
                icon: <Code className="w-4 h-4" />,
                link: "https://www.hackerrank.com/RitiV",
              },
            ].map(({ platform, username, icon, link }) => (
              <a
                key={platform}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-black/30 rounded p-3 hover:bg-black/40 transition"
              >
                <div>
                  <p className="text-xs text-gray-400 flex items-center gap-2">
                    {icon} {platform}
                  </p>
                  <p className="font-semibold text-sm mt-1">{username}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
