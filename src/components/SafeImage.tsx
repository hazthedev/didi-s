import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export default function SafeImage({ src, alt, className = '', loading = 'lazy' }: SafeImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  const showPlaceholder = status !== 'loaded';

  return (
    <div className="relative overflow-hidden w-full h-full">
      {/* Placeholder — visible until image loads successfully */}
      {showPlaceholder && (
        <div className="absolute inset-0 bg-cream flex flex-col items-center justify-center gap-3 z-10">
          <div className="w-10 h-10 rounded-full border-2 border-dashed border-sienna/25 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A85D3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3c-4.5 0-8 3.5-8 8 0 5.25 8 10 8 10s8-4.75 8-10c0-4.5-3.5-8-8-8z"/>
              <circle cx="12" cy="11" r="2.5"/>
            </svg>
          </div>
          <span className="font-accent text-sienna text-xs">fresh from the oven soon</span>
        </div>
      )}

      {/* Image — starts invisible, reveals on load */}
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
