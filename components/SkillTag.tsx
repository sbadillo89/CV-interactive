import React from 'react';
import type { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
  className?: string;
  style?: React.CSSProperties;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, className, style }) => {
  const proficiency = skill.level * 10;
  const [barWidth, setBarWidth] = React.useState(0);

  const barRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarWidth(proficiency);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [proficiency]);


  return (
    <div className={`relative group w-full ${className}`} style={style} ref={barRef}>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-800 dark:text-white">{skill.name}</span>
        <span className="text-sm font-medium text-teal-600 dark:text-teal-300">{proficiency}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700/50">
        <div
          className="bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500 h-2.5 rounded-full"
          style={{ width: `${barWidth}%`, transition: 'width 1s ease-out' }}
          role="progressbar"
          aria-valuenow={proficiency}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${skill.name} proficiency`}
        ></div>
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full mb-2 w-max max-w-xs p-3 bg-gray-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 left-1/2 -translate-x-1/2">
        <p>{skill.description}</p>
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-800"></div>
      </div>
    </div>
  );
};

export default SkillBar;
