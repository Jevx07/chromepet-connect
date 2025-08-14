import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: 'characters' | 'words';
  direction?: 'top' | 'bottom' | 'left' | 'right';
  onAnimationComplete?: () => void;
  className?: string;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 100,
  animateBy = 'words',
  direction = 'top',
  onAnimationComplete,
  className = '',
}) => {
  const [animatedItems, setAnimatedItems] = useState<boolean[]>([]);

  const items = animateBy === 'words' ? text.split(' ') : text.split('');

  useEffect(() => {
    const initialState = new Array(items.length).fill(false);
    setAnimatedItems(initialState);

    const timeouts: NodeJS.Timeout[] = [];

    items.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setAnimatedItems(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });

        // Check if this is the last item to animate
        if (index === items.length - 1 && onAnimationComplete) {
          setTimeout(() => {
            onAnimationComplete();
          }, 100);
        }
      }, index * delay);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [text, delay, items.length, onAnimationComplete]);

  const getTransformStyle = (direction: string) => {
    switch (direction) {
      case 'top':
        return 'translateY(-20px)';
      case 'bottom':
        return 'translateY(20px)';
      case 'left':
        return 'translateX(-20px)';
      case 'right':
        return 'translateX(20px)';
      default:
        return 'translateY(-20px)';
    }
  };

  return (
    <div className={cn('inline-block', className)}>
      {items.map((item, index) => (
        <span
          key={index}
          className={cn(
            'inline-block transition-all duration-500 ease-out',
            animatedItems[index]
              ? 'opacity-100 blur-0 transform-none'
              : 'opacity-0 blur-sm'
          )}
          style={{
            transform: animatedItems[index] ? 'none' : getTransformStyle(direction),
            transitionDelay: `${index * (delay / 1000)}s`,
          }}
        >
          {item}
          {animateBy === 'words' && index < items.length - 1 && ' '}
        </span>
      ))}
    </div>
  );
};

export default BlurText;