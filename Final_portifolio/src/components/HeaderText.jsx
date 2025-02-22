import { AnimatePresence, motion, useInView } from 'framer-motion';
import * as React from 'react';

export default function HeaderText({ text = 'Gradual Spacing' }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="text-[#3c5a87] flex space-x-1.5 justify-center">
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.p
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center font-bold tracking-tighter leading-none"
            style={{
              fontSize: 'clamp(4rem, 5vw, 5rem)', // Adjust font size dynamically
            }}
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
}
