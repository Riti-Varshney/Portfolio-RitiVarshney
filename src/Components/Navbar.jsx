import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero"); // initially 'Home'

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // adjust to detect section in viewport

      let current = "hero"; // fallback

      for (const link of links) {
        const section = document.querySelector(link.href);
        if (section) {
          if (section.offsetTop <= scrollPosition) {
            current = link.href.substring(1); // remove #
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    // Call once to set initial active link
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [links]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <h1 className="text-3xl font-bold text-purple-500">Portfolio</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`transition-colors duration-200 ${
                  activeSection === link.href.substring(1)
                    ? "text-purple-400 font-semibold"
                    : "hover:text-purple-400"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-6 pb-4">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`block transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "text-purple-400 font-semibold"
                      : "text-white hover:text-purple-400"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
