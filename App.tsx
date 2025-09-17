import React, { useState, useEffect, useRef } from 'react';
import { locales } from './data';
import type { Education } from './types';
import Section from './components/Section';
import SkillBar from './components/SkillTag'; // Renamed import for clarity, points to the updated component
import Icon from './components/Icon';
import Navigation from './components/Navigation';
import { profileImage } from './profileImage';
import CustomCursor from './components/CustomCursor';
import ExperienceTimeline from './components/ExperienceTimeline';

const EducationCard: React.FC<{ education: Education; className?: string; style?: React.CSSProperties }> = ({ education, className, style }) => (
  <div 
    className={`bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-black/10 dark:border-white/10 p-6 rounded-xl shadow-lg hover:border-teal-500/50 dark:hover:border-teal-400/50 transition-all duration-300 ease-in-out mb-6 transform hover:-translate-y-1 ${className}`}
    style={style}
  >
    <div className="flex flex-col md:flex-row justify-between items-start">
      <div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{education.degree}</h3>
        <p className="text-lg text-teal-600 dark:text-teal-300">{education.institution}</p>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{education.period}</p>
    </div>
  </div>
);

const ContactItem: React.FC<{ icon: 'mail' | 'linkedin' | 'github' | 'location'; text: string; href?: string }> = ({ icon, text, href }) => {
  const iconElement = <Icon name={icon} className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-200" />;
  const iconElementStatic = <Icon name={icon} className="w-6 h-6 text-gray-500 dark:text-gray-400" />;
  
  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-200 group text-lg"
      >
        {iconElement}
        <span>{text}</span>
      </a>
    );
  }

  return (
    <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 text-lg">
       {iconElementStatic}
       <span>{text}</span>
    </div>
  );
};

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
);

const App: React.FC = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      return (storedTheme === 'dark' || storedTheme === 'light') ? storedTheme : 'dark';
    }
    return 'dark';
  });
  const [activeSection, setActiveSection] = useState('home');
  const profileData = locales[language];
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    
    const { pageTitle, pageDescription } = profileData;

    if (pageTitle) {
      document.title = pageTitle;
      document.querySelector('#og-title')?.setAttribute('content', pageTitle);
      document.querySelector('#twitter-title')?.setAttribute('content', pageTitle);
    }
    
    if (pageDescription) {
      document.querySelector('#page-description')?.setAttribute('content', pageDescription);
      document.querySelector('#og-description')?.setAttribute('content', pageDescription);
      document.querySelector('#twitter-description')?.setAttribute('content', pageDescription);
    }

  }, [language, profileData]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            entry.target.classList.add('is-visible');
          }
        });
      },
      // Using a pixel-based rootMargin and a low threshold for more reliable detection.
      // This ensures sections are detected even if they aren't perfectly centered.
      { rootMargin: '-200px 0px -200px 0px', threshold: 0.01 }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [language]);
  
  const sections = ['home', 'about', 'experience', 'education', 'skills', 'languages'];
  const contentSectionIds = ['about', 'experience', 'education', 'skills', 'languages'];

  const LanguageSwitcher = () => (
    <div className="flex justify-center space-x-2 mt-8">
      <button
        onClick={() => setLanguage('es')}
        aria-pressed={language === 'es'}
        className={`px-4 py-2 rounded-md font-semibold transition-all duration-200 ${
          language === 'es'
            ? 'bg-teal-500 text-white shadow-lg scale-105'
            : 'bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-white/20'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`px-4 py-2 rounded-md font-semibold transition-all duration-200 ${
          language === 'en'
            ? 'bg-teal-500 text-white shadow-lg scale-105'
            : 'bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-white/20'
        }`}
      >
        EN
      </button>
    </div>
  );
  
  return (
    <div className="font-sans">
      <CustomCursor />
      <Navigation sections={sections} activeSection={activeSection} />
      
      <main>
        <section id="home" ref={el => { sectionRefs.current.home = el; }} className="min-h-screen flex flex-col justify-center items-center text-center p-4 cv-section">
          <div className="absolute top-5 right-5 flex items-center space-x-4">
            <button
                onClick={() => window.print()}
                className="download-btn flex items-center px-4 py-2 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-white/20 transition-all duration-200"
                aria-label="Download CV as PDF"
            >
                <DownloadIcon />
                PDF
            </button>
            <button 
                onClick={toggleTheme} 
                className="theme-switcher p-2 rounded-full bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-white/20 transition-all duration-200"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          <img 
              src={profileImage} 
              alt={profileData.name}
              className="w-48 h-48 rounded-full object-cover mb-6 shadow-2xl border-4 border-gray-300 dark:border-gray-700/50"
          />
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">{profileData.name}</h1>
          <h2 className="text-2xl md:text-3xl font-medium text-teal-600 dark:text-teal-300 mt-2">{profileData.title}</h2>
            
          <div className="mt-8 space-y-4">
              <ContactItem icon="location" text={profileData.location} />
              <ContactItem icon="mail" text={profileData.email} href={`mailto:${profileData.email}`} />
              <ContactItem icon="linkedin" text="LinkedIn Profile" href={profileData.linkedin} />
              <ContactItem icon="github" text="GitHub Profile" href={profileData.github} />
          </div>
          <LanguageSwitcher />
        </section>

        {contentSectionIds.map(sectionId => {
            // Standardized class for all content sections for consistency.
            const sectionClassName = "min-h-screen flex items-center p-4 md:p-8 cv-section";

            return (
              <section key={sectionId} id={sectionId} ref={el => { sectionRefs.current[sectionId] = el; }} className={sectionClassName}>
                <div className="w-full max-w-4xl mx-auto bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-black/10 dark:border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl">
                  {sectionId === 'about' && (
                    <Section title={profileData.sections.about} className="animatable">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg animatable" style={{ animationDelay: '0.2s' }}>{profileData.about}</p>
                    </Section>
                  )}
                  {sectionId === 'experience' && (
                    <Section title={profileData.sections.experience} className="animatable">
                      <ExperienceTimeline experiences={profileData.experience} />
                    </Section>
                  )}
                  {sectionId === 'education' && (
                    <Section title={profileData.sections.education} className="animatable">
                      {profileData.education.map((edu, index) => <EducationCard key={index} education={edu} className="animatable" style={{ animationDelay: `${0.2 + index * 0.15}s` }} />)}
                    </Section>
                  )}
                  {sectionId === 'skills' && (
                    <Section title={profileData.sections.skills} className="animatable">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        {profileData.skills.map((skill, index) => <SkillBar key={index} skill={skill} className="animatable" style={{ animationDelay: `${0.2 + index * 0.05}s` }}/>)}
                      </div>
                    </Section>
                  )}
                  {sectionId === 'languages' && (
                    <Section title={profileData.sections.languages} className="animatable">
                      <div className="space-y-3">
                        {profileData.languages.map((lang, index) => (
                          <div key={index} className="flex justify-between items-center text-gray-700 dark:text-gray-300 text-lg animatable" style={{ animationDelay: `${0.2 + index * 0.15}s` }}>
                            <span>{lang.language}</span>
                            <span className="font-semibold text-teal-600 dark:text-teal-300">{lang.proficiency}</span>
                          </div>
                        ))}
                      </div>
                    </Section>
                  )}
                </div>
              </section>
            );
          })
        }
      </main>
    </div>
  );
};

export default App;