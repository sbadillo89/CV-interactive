import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className }) => {
  return (
    <section>
      <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 relative ${className}`}>
        {title}
        <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500 rounded-full"></span>
      </h2>
      <div className="mt-8">
        {children}
      </div>
    </section>
  );
};

export default Section;