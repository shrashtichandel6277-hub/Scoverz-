import React from 'react';
import scoverzLogoImg from '../assets/images/scoverz-logo.png';

interface ScoverzLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showWordmark?: boolean;
  showTagline?: boolean;
}

export const ScoverzLogo: React.FC<ScoverzLogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = false,
  showTagline = false,
}) => {
  const sizeMap = {
    sm: { img: 'w-8 h-8', text: 'text-lg', sub: 'text-[9px]' },
    md: { img: 'w-12 h-12', text: 'text-xl', sub: 'text-[10px]' },
    lg: { img: 'w-20 h-20', text: 'text-2xl', sub: 'text-xs' },
    xl: { img: 'w-32 h-32', text: 'text-3xl', sub: 'text-sm' },
    hero: { img: 'w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80', text: 'text-4xl', sub: 'text-base' },
  };

  const { img, text, sub } = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3.5 select-none bg-transparent ${className}`}>
      {/* 
        Official Scoverz Purple "S" Emblem
        - Source of Truth: exact uploaded transparent PNG asset
        - Background: Genuinely Transparent
        - Strict preservation: aspect ratio maintained with object-fit: contain
        - No added shapes, outlines, or filters
      */}
      <div className={`relative ${img} shrink-0 flex items-center justify-center bg-transparent`}>
        <img
          src={scoverzLogoImg || '/images/scoverz-logo.png'}
          alt="SCOVERZ Official Brand Emblem"
          className="w-full h-full object-contain pointer-events-none"
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Standalone text wordmark for header / footer navigation */}
      {showWordmark && (
        <div className="flex flex-col text-left">
          <span className={`font-display font-black tracking-[0.16em] text-slate-900 ${text}`}>
            SCOVERZ
          </span>
          {showTagline && (
            <span className={`font-semibold tracking-[0.22em] text-purple-700 uppercase -mt-0.5 ${sub}`}>
              CREATING YOUR DIGITAL UNIVERSE
            </span>
          )}
        </div>
      )}
    </div>
  );
};
