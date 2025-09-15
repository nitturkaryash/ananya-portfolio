import React from 'react';
import { AnanyaCard } from '@/components/AnanyaCard';

const AnanyaCardDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Ananya Card Demo
        </h1>
        
        <div className="space-y-8">
          {/* Original Card */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Original Design</h2>
            <AnanyaCard />
          </div>

          {/* Variations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-700">Smaller Version</h2>
              <AnanyaCard className="max-w-2xl" />
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-700">Larger Version</h2>
              <AnanyaCard className="max-w-5xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnanyaCardDemo;
