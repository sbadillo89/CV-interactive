import React from 'react';
import type { Experience } from '../types';
import ExperienceCard from './ExperienceCard';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <div className="timeline max-w-4xl mx-auto">
      {experiences.map((exp, index) => (
        <div key={index} className="timeline-item">
          <ExperienceCard
            experience={exp}
            className="animatable"
            style={{ animationDelay: `${0.2 + index * 0.15}s` }}
          />
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
