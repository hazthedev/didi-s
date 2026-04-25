import { useState } from 'react';
import { motion } from 'framer-motion';

interface Category {
  id: string;
  name: string;
}

interface BakesTabsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export default function BakesTabs({ categories, activeCategory, onCategoryChange }: BakesTabsProps) {
  return (
    <div className="sticky top-16 lg:top-20 z-30 bg-off-white/95 backdrop-blur-md border-b border-espresso/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
          <button
            onClick={() => onCategoryChange('all')}
            className={`relative px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
              activeCategory === 'all' ? 'text-sienna' : 'text-mocha hover:text-espresso'
            }`}
          >
            All
            {activeCategory === 'all' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-sienna"
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            )}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`relative px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                activeCategory === cat.id ? 'text-sienna' : 'text-mocha hover:text-espresso'
              }`}
            >
              {cat.name}
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-sienna"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
