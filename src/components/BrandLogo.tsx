import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'primary' | 'monogram' | 'horizontal' | 'signature' | 'badge';
  color?: string;
}

export const BrandLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'primary',
  color = 'currentColor',
}) => {
  // 1. Interlocking "CK" Monogram Logo
  if (variant === 'monogram') {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className || 'w-10 h-10'}
        aria-label="Crystal Kizor Monogram"
      >
        {/* Large graceful C arc */}
        <path
          d="M 54 22 C 34 22 20 35 20 50 C 20 65 34 78 54 78 C 60 78 64 76 68 73 L 64 69 C 61 72 58 73 53 73 C 38 73 28 62 28 50 C 28 38 38 27 53 27 C 60 27 64 30 67 33 L 71 29 C 66 24 61 22 54 22 Z"
          fill={color}
        />
        {/* Architectural K vertical stem */}
        <rect x="47" y="16" width="6.5" height="68" fill={color} />
        {/* K upper ascending arm */}
        <polygon points="53,52 78,16 87,16 60,54" fill={color} />
        {/* K lower descending leg with architectural foot */}
        <polygon points="56,48 83,84 94,84 66,48" fill={color} />
      </svg>
    );
  }

  // 2. Circular Social Profile Logo
  if (variant === 'badge') {
    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className || 'w-12 h-12'}
        aria-label="Crystal Kizor Emblem"
      >
        <circle cx="60" cy="60" r="54" stroke={color} strokeWidth="1.5" />
        {/* Interlocking Monogram centered */}
        <g transform="translate(10, 10)">
          <path
            d="M 54 22 C 34 22 20 35 20 50 C 20 65 34 78 54 78 C 60 78 64 76 68 73 L 64 69 C 61 72 58 73 53 73 C 38 73 28 62 28 50 C 28 38 38 27 53 27 C 60 27 64 30 67 33 L 71 29 C 66 24 61 22 54 22 Z"
            fill={color}
          />
          <rect x="47" y="16" width="6.5" height="68" fill={color} />
          <polygon points="53,52 78,16 87,16 60,54" fill={color} />
          <polygon points="56,48 83,84 94,84 66,48" fill={color} />
        </g>
      </svg>
    );
  }

  // 3. Wide Horizontal Tracked Logo
  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center tracking-[0.35em] uppercase font-sans text-xs sm:text-sm font-medium ${className}`}>
        <span className="text-[#1C1917]">C R Y S T A L</span>
        <span className="mx-2 text-[#9A3412]">·</span>
        <span className="text-[#1C1917]">K I Z O R</span>
      </div>
    );
  }

  // 4. Fluid Script Signature Logo
  if (variant === 'signature') {
    return (
      <div className={`font-serif italic text-2xl sm:text-3xl tracking-normal text-[#1C1917] ${className}`} style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
        Crystal Kizor
      </div>
    );
  }

  // Default: Primary Stacked / Linear Wordmark
  return (
    <div className={`flex flex-col leading-none select-none ${className}`}>
      <span className="font-editorial text-2xl sm:text-3xl font-normal tracking-[-0.03em] uppercase text-[#1C1917]">
        Crystal
      </span>
      <span className="font-editorial text-2xl sm:text-3xl font-normal tracking-[0.08em] uppercase text-[#1C1917] -mt-1 sm:-mt-1.5">
        Kizor
      </span>
    </div>
  );
};
