import React from 'react';

interface NavigationProps {
  sections: string[];
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ sections, activeSection }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed right-0 top-1/2 -translate-y-1/2 pr-4 z-50">
      <ul className="space-y-3">
        {sections.map(section => (
          <li key={section}>
            <button
              onClick={() => scrollToSection(section)}
              className="group flex items-center"
              aria-label={`Go to ${section} section`}
            >
              <span className="capitalize text-gray-800 dark:text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3 pointer-events-none">
                {section}
              </span>
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section 
                    ? 'bg-teal-500 dark:bg-teal-400 scale-150' 
                    : 'bg-gray-400/50 dark:bg-white/30 group-hover:bg-gray-600/70 dark:group-hover:bg-white/70 group-hover:scale-125'
                }`}
              ></div>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;