import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

const placeholderBgs = ['#ffb3c8', '#c8e8d4', '#ffe79e', '#cdd9ff', '#fff4ee'];

// pick stable bg per src
function bgFor(src: string): string {
  let h = 0;
  for (let i = 0; i < src.length; i++) h = (h * 31 + src.charCodeAt(i)) >>> 0;
  return placeholderBgs[h % placeholderBgs.length];
}

export default function SafeImage({ src, alt, className = '', loading = 'lazy' }: SafeImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const showPlaceholder = status !== 'loaded';
  const bg = bgFor(src);

  return (
    <div className="relative overflow-hidden w-full h-full">
      {showPlaceholder && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10"
          style={{ backgroundColor: bg }}
        >
          <div className="animate-drift" style={{ animationDuration: '5s' }}>
            <svg width="80" height="80" viewBox="0 0 120 120" fill="none" stroke="#4a2e22" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
              <path d="M30 56 C 30 38, 50 28, 60 28 C 72 28, 90 38, 90 56 Z" fill="#ffb3c8"/>
              <path d="M28 56 L 92 56 L 86 96 C 86 100, 82 102, 78 102 L 42 102 C 38 102, 34 100, 34 96 Z" fill="#ffe79e"/>
              <line x1="42" y1="60" x2="38" y2="98"/>
              <line x1="56" y1="60" x2="54" y2="98"/>
              <line x1="70" y1="60" x2="72" y2="98"/>
              <line x1="84" y1="60" x2="88" y2="98"/>
              <circle cx="60" cy="22" r="6" fill="#ff7a8a"/>
              <path d="M60 16 C 62 10, 68 8, 70 12" fill="none"/>
            </svg>
          </div>
          <span className="font-accent text-[#4a2e22] text-sm font-bold">fresh from the oven</span>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${className} ${
          status === 'loaded' ? 'opacity-100' : 'opacity-0'
        }`}
        loading={loading}
        decoding="async"
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
      />
    </div>
  );
}
