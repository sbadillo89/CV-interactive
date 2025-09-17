import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      if (e.target instanceof Element && (e.target.matches('a') || e.target.matches('button'))) {
        setHovered(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      if (e.target instanceof Element && (e.target.matches('a') || e.target.matches('button'))) {
        setHovered(false);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  const outlineStyle = {
    transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) scale(${hovered ? 1.5 : 1})`,
    width: hovered ? '40px' : '30px',
    height: hovered ? '40px' : '30px',
  };

  const dotStyle = {
     transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) scale(${hovered ? 0 : 1})`,
  };

  return (
    <div className="custom-cursor hidden md:block">
      <div className="cursor-dot" style={dotStyle}></div>
      <div className="cursor-outline" style={outlineStyle}></div>
    </div>
  );
};

export default CustomCursor;
