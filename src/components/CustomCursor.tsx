import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CustomCursor = () => {
  const { isRtl } = useLanguage();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring configurations for organic movement
  const haloSpringConfig = { damping: 25, stiffness: 120, mass: 0.8 };
  const haloX = useSpring(mouseX, haloSpringConfig);
  const haloY = useSpring(mouseY, haloSpringConfig);

  const dotSpringConfig = { damping: 40, stiffness: 800, mass: 0.1 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  // States for context awareness
  const [isPointer, setIsPointer] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<string | null>(null); // 'view', 'plus', 'drag'

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      if (!target) return;

      const computedStyle = window.getComputedStyle(target);
      
      // 1. Detect Pointer (Clickable)
      const isClickable = 
        computedStyle.cursor === 'pointer' || 
        target.closest('button') || 
        target.closest('a');
      setIsPointer(!!isClickable);

      // 2. Detect Text areas
      const isTextElement = 
        target.tagName.toLowerCase() === 'input' || 
        target.tagName.toLowerCase() === 'textarea' ||
        target.closest('p') ||
        target.closest('h1') ||
        target.closest('h2') ||
        target.closest('h3');
      setIsText(!!isTextElement);

      // 3. Detect Custom Cursor Attributes
      const customType = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      setCursorType(customType || null);

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999]">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Context-Aware Halo Wrapper */}
            <motion.div
              className="absolute top-0 left-0 flex items-center justify-center rounded-full border border-red/40"
              style={{
                x: haloX,
                y: haloY,
                translateX: '-50%',
                translateY: '-50%',
              }}
              animate={{
                width: isPointer ? 64 : (isText ? 12 : 24),
                height: isPointer ? 64 : (isText ? 40 : 24),
                borderRadius: isText ? '2px' : '9999px',
                backgroundColor: isPointer ? 'rgba(232, 57, 10, 0.08)' : 'rgba(232, 57, 10, 0)',
                scale: isClicking ? 0.85 : 1,
                opacity: 1,
              }}
              transition={{ 
                type: 'spring', 
                damping: 25, 
                stiffness: 250,
                width: { duration: 0.3 },
                height: { duration: 0.3 },
                borderRadius: { duration: 0.3 }
              }}
            >
              <AnimatePresence mode="wait">
                {cursorType === 'view' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="flex flex-col items-center justify-center"
                  >
                    <ArrowUpRight size={14} className="text-red mb-0.5" />
                    <span className="text-[7px] font-syne font-black text-red uppercase tracking-wider">
                      {isRtl ? 'عرض' : 'View'}
                    </span>
                  </motion.div>
                )}
                {cursorType === 'plus' && (
                  <motion.span 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="text-lg font-light text-red"
                  >
                    +
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Inverting Precision Inner Dot */}
            <motion.div
              className="absolute top-0 left-0 rounded-full bg-white transition-colors duration-300"
              style={{
                x: dotX,
                y: dotY,
                translateX: '-50%',
                translateY: '-50%',
                mixBlendMode: 'difference',
              }}
              animate={{
                width: isPointer ? 4 : (isText ? 1 : 6),
                height: isPointer ? 4 : (isText ? 24 : 6),
                scale: isClicking ? 0.6 : 1,
                opacity: isVisible ? 1 : 0,
              }}
            />

            {/* Orbiting Ring on Interaction */}
            {isPointer && !isClicking && (
              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute top-0 left-0 rounded-full border border-dashed border-red/30"
                style={{
                  x: haloX,
                  y: haloY,
                  translateX: '-50%',
                  translateY: '-50%',
                  width: 80,
                  height: 80,
                }}
              />
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

