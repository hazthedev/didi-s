import { useState } from 'react';
import BakesTabs from './BakesTabs';
import BakesGrid from './BakesGrid';

interface Category {
  id: string;
  name: string;
}

interface BakeItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

interface BakesPageClientProps {
  categories: Category[];
  items: BakeItem[];
}

export default function BakesPageClient({ categories, items }: BakesPageClientProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <>
      <BakesTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
        <BakesGrid items={items} activeCategory={activeCategory} />
      </div>
    </>
  );
}
