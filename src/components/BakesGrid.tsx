import { useState, useMemo } from 'react';
import SafeImage from './SafeImage';

interface BakeItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  tags: string[];
  featured?: boolean;
  bentoSize?: 'large' | 'wide' | 'tall' | 'small';
}

interface BakesGridProps {
  items: BakeItem[];
  activeCategory: string;
}

const filterOptions = [
  { id: 'halal', label: 'Halal ✓' },
  { id: 'vegetarian', label: 'Vegetarian' },
  { id: 'signature', label: 'Signature' },
  { id: 'new', label: 'New' },
];

function getImageUrl(path: string, bentoSize: string): string {
  const base = path.replace('/images/bakes/', 'https://images.unsplash.com/photo-');
  const sizes: Record<string, string> = {
    large: 'w=900&h=900&fit=crop&q=85',
    wide: 'w=900&h=500&fit=crop&q=85',
    tall: 'w=500&h=800&fit=crop&q=85',
    small: 'w=500&h=500&fit=crop&q=85',
  };
  return `${base}?${sizes[bentoSize] || sizes.small}`;
}

function BentoTile({ item }: { item: BakeItem }) {
  const size = item.bentoSize || 'small';

  const gridClasses: Record<string, string> = {
    large: 'col-span-1 sm:col-span-2 lg:col-span-2 row-span-2',
    wide: 'col-span-1 sm:col-span-2 lg:col-span-2 row-span-1',
    tall: 'col-span-1 row-span-2',
    small: 'col-span-1 row-span-1',
  };

  const isLarge = size === 'large';
  const isWide = size === 'wide';
  const isTall = size === 'tall';
  const isSmall = size === 'small';

  return (
    <div
      className={`group ${gridClasses[size]} candy-card overflow-hidden bg-white`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${
          isLarge ? 'h-[55%] lg:h-[60%]' :
          isWide ? 'h-[55%] sm:h-[65%]' :
          isTall ? 'h-[55%] lg:h-[60%]' :
          'h-[65%]'
        }`}
      >
        <SafeImage
          src={getImageUrl(item.image, size)}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>

      {/* Text */}
      <div
        className={`${
          isLarge ? 'p-5 lg:p-6' :
          isWide ? 'p-4 lg:p-5' :
          isTall ? 'p-4 lg:p-5' :
          'p-3 lg:p-4'
        } space-y-1.5`}
      >
        <div className="flex items-start justify-between gap-2">
          <h3
            className={`font-display text-[#4a2e22] group-hover:text-[#cf3a4e] transition-colors duration-300 leading-tight ${
              isLarge ? 'text-xl lg:text-2xl' :
              isWide ? 'text-lg lg:text-xl' :
              isTall ? 'text-base lg:text-lg' :
              'text-sm lg:text-base'
            }`}
          >
            {item.name}
          </h3>
          <span
            className={`font-bold text-[#4a2e22] tabular-nums whitespace-nowrap bg-[#ffd66e] border-2 border-[#4a2e22] rounded-full px-2.5 py-0.5 ${
              isLarge ? 'text-sm' :
              'text-xs'
            }`}
          >
            RM{item.price}
          </span>
        </div>

        {/* Description — hidden on small, line-clamped on tall */}
        {!isSmall && (
          <p
            className={`text-[#6e4f3f] font-medium leading-relaxed ${
              isLarge ? 'text-sm lg:text-base' :
              isWide ? 'text-sm' :
              'text-xs lg:text-sm line-clamp-2'
            }`}
          >
            {item.description}
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1 pt-0.5">
          {item.tags.slice(0, isSmall ? 2 : undefined).map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider font-bold text-[#4a2e22] bg-[#fff4ee] border border-[#4a2e22]/30 rounded-full px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BakesGrid({ items, activeCategory }: BakesGridProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filterId: string) => {
    setActiveFilters((prev) =>
      prev.includes(filterId) ? prev.filter((f) => f !== filterId) : [...prev, filterId]
    );
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
      const filterMatch =
        activeFilters.length === 0 || activeFilters.every((f) => item.tags.includes(f));
      return categoryMatch && filterMatch;
    });
  }, [items, activeCategory, activeFilters]);

  return (
    <div className="space-y-8">
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2">
        {filterOptions.map((filter) => (
          <button
            key={filter.id}
            onClick={() => toggleFilter(filter.id)}
            className={`candy-pill px-4 py-1.5 text-xs font-bold transition-all duration-300 ${
              activeFilters.includes(filter.id)
                ? 'bg-[#ff7a8a] text-[#fff4ee]'
                : 'bg-white text-[#4a2e22] hover:bg-[#ffd66e]'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 auto-rows-[minmax(260px,auto)]">
        {filteredItems.map((item) => (
          <BentoTile key={item.id} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-20">
          <p className="text-[#4a2e22] font-display text-2xl">No bakes match your filters.</p>
          <button
            onClick={() => setActiveFilters([])}
            className="candy-pill bg-[#ff7a8a] text-[#fff4ee] px-5 py-2 text-sm font-bold mt-4"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
