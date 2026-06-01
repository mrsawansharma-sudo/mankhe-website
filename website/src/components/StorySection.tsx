import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface StorySectionProps {
  children: ReactNode;
  bgImage?: string;
  bgVideo?: string;
  overlayOpacity?: number;
  className?: string;
  bgImageClassName?: string;
}

export default function StorySection({ 
  children, 
  bgImage, 
  bgVideo, 
  overlayOpacity = 0.5, 
  className = "",
  bgImageClassName = "object-cover"
}: StorySectionProps) {
  return (
    <section className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden ${className}`}>
      {(bgImage || bgVideo) && (
        <div className="absolute inset-0 z-0">
          {bgVideo ? (
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className={`w-full h-full ${bgImageClassName}`}
              src={bgVideo}
            />
          ) : (
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src={bgImage} 
              alt="Background" 
              className={`w-full h-full ${bgImageClassName}`}
              referrerPolicy="no-referrer"
            />
          )}
          <div 
            className="absolute inset-0 bg-black" 
            style={{ opacity: overlayOpacity }} 
          />
        </div>
      )}
      <div className="relative z-10 w-full max-w-5xl px-6">
        {children}
      </div>
    </section>
  );
}
