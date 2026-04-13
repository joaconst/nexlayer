'use client';

import { motion } from 'framer-motion';

export default function GeometricBackground() {
  const shapes = [
    { type: 'circle', size: 300, top: '10%', left: '-5%', delay: 0, duration: 8 },
    { type: 'rectangle', width: 200, height: 150, top: '60%', right: '-5%', delay: 1, duration: 6 },
    { type: 'circle', size: 150, bottom: '15%', left: '15%', delay: 0.5, duration: 7 },
    { type: 'rectangle', width: 120, height: 120, top: '25%', right: '10%', delay: 1.5, duration: 9 },
    { type: 'line', width: 180, height: 2, top: '45%', left: '-3%', delay: 0.8, duration: 10 },
    { type: 'circle', size: 80, bottom: '30%', right: '20%', delay: 2, duration: 5.5 },
    { type: 'rectangle', width: 100, height: 100, top: '75%', left: '85%', delay: 1.2, duration: 7.5 },
  ];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => {
        const floatAnimation = {
          y: [0, -20, 0],
          rotate: shape.type !== 'line' ? [0, 5, 0] : [0, 3, 0],
        };
        
        if (shape.type === 'circle') {
          return (
            <motion.div
              key={index}
              className="absolute rounded-full bg-indigo/5"
              style={{
                width: shape.size,
                height: shape.size,
                top: shape.top,
                left: shape.left,
                right: shape.right,
                bottom: shape.bottom,
              }}
              animate={floatAnimation}
              transition={{
                duration: shape.duration,
                delay: shape.delay,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          );
        } else if (shape.type === 'rectangle') {
          return (
            <motion.div
              key={index}
              className="absolute bg-indigo/5"
              style={{
                width: shape.width,
                height: shape.height,
                top: shape.top,
                left: shape.left,
                right: shape.right,
                bottom: shape.bottom,
              }}
              animate={floatAnimation}
              transition={{
                duration: shape.duration,
                delay: shape.delay,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          );
        } else {
          return (
            <motion.div
              key={index}
              className="absolute bg-indigo/10"
              style={{
                width: shape.width,
                height: shape.height,
                top: shape.top,
                left: shape.left,
              }}
              animate={floatAnimation}
              transition={{
                duration: shape.duration,
                delay: shape.delay,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          );
        }
      })}
    </div>
  );
}