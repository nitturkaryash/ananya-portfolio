import React from 'react';
import { cn } from '@/lib/utils';

interface AnanyaCardProps {
  className?: string;
}

export const AnanyaCard: React.FC<AnanyaCardProps> = ({ className }) => {
  return (
    <div 
      className={cn("relative overflow-hidden", className)}
      style={{
        width: '759.4033203125px',
        height: '593.6983032226562px',
        maxWidth: '90vw',
        maxHeight: '80vh',
        borderRadius: '66px',
      }}
    >
      {/* Background Image - Exact Figma positioning */}
      <div
        className="absolute ananya-bg-image"
        style={{
          width: '593.135009765625px',
          height: '759.4033203125px',
          left: '9.43574333190918px',
          top: '603.1339721679688px',
          transform: 'matrix(0.0019049129914492369, -0.9999982118606567, 0.9999982118606567, 0.0019049129914492369, 0, 0)',
          borderRadius: '66px',
        }}
      />

      {/* Content Container - Exact Figma positioning */}
      <div
        className="relative z-10 flex flex-col"
        style={{
          position: 'absolute',
          left: '56.46630859375px',
          top: '143.353515625px',
          width: '646px',
          height: 'auto',
        }}
      >
        {/* Header Text - Exact Figma positioning */}
        <h2
          className="text-white font-normal italic text-center"
          style={{
            fontSize: '32px',
            lineHeight: '40.57261276245117px',
            fontWeight: 400,
            width: '646px',
            height: '40.57261276245117px',
            fontFamily: 'Figtree, sans-serif',
          }}
        >
          Hi, I'm Ananya, based out of New York City!
        </h2>

        {/* Divider Line - Exact Figma positioning */}
        <div
          className="bg-white"
          style={{
            position: 'absolute',
            left: '7px',
            top: '78px',
            width: '632px',
            height: '1px',
          }}
        />

        {/* Main Text - Exact Figma positioning */}
        <div
          style={{
            position: 'absolute',
            left: '-4px',
            top: '107px',
            width: '653px',
            height: '244px',
          }}
        >
          <h1
            className="text-white font-medium text-center leading-tight"
            style={{
              fontSize: '58px',
              lineHeight: '69.6px',
              fontWeight: 500,
              fontFamily: 'Figtree, sans-serif',
            }}
          >
            Design, for me, is<br />
            <span style={{ color: '#B7EA01', fontWeight: 500 }}>
              where resilience meets imagination.
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AnanyaCard;
