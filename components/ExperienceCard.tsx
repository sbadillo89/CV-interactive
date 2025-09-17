import React from 'react';
import type { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
  style?: React.CSSProperties;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, className, style }) => {
  return (
    <div 
      className={`bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-black/10 dark:border-white/10 p-6 rounded-xl shadow-lg hover:border-teal-500/50 dark:hover:border-teal-400/50 transition-all duration-300 ease-in-out mb-6 transform hover:-translate-y-1 ${className}`}
      style={style}
    >
      <div className="flex flex-col md:flex-row justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{experience.role}</h3>
          <p className="text-lg text-teal-600 dark:text-teal-300">{experience.company}</p>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap mt-2 md:mt-0">{experience.period}</p>
      </div>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 pl-2">
        {experience.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;